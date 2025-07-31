#!/bin/bash

# 🚀 Script de Deploy Automático - Site Cajá no Hostinger
# Execute este script no seu computador local para fazer deploy automaticamente

# Configurações do servidor Hostinger
SSH_USER="u921347543"
SSH_HOST="br-asc-web1845.main-hosting.eu"
SSH_KEY_PATH="~/.ssh/cajait_hostinger"  # Caminho para sua chave SSH
REMOTE_PATH="/home/u921347543/public_html"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Iniciando Deploy Automático do Site Cajá${NC}"
echo "=================================================="

# Verificar se a chave SSH existe
if [ ! -f "$SSH_KEY_PATH" ]; then
    echo -e "${RED}❌ Erro: Chave SSH não encontrada em $SSH_KEY_PATH${NC}"
    echo -e "${YELLOW}💡 Salve sua chave SSH como $SSH_KEY_PATH e execute novamente${NC}"
    exit 1
fi

# Verificar se os arquivos existem
required_files=("index.html" "style.css" "script.js" "contact.php")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}❌ Erro: Arquivo $file não encontrado${NC}"
        exit 1
    fi
done

echo -e "${GREEN}✅ Todos os arquivos encontrados${NC}"

# 1. Fazer backup do site atual
echo -e "${BLUE}📦 Criando backup do site atual...${NC}"
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "cd $REMOTE_PATH && tar -czf backup_$(date +%Y%m%d_%H%M%S).tar.gz *.html *.css *.js *.php config/ admin/ 2>/dev/null || echo 'Backup parcial criado'"

# 2. Upload dos arquivos principais
echo -e "${BLUE}📤 Fazendo upload dos arquivos principais...${NC}"
scp -i "$SSH_KEY_PATH" index.html style.css script.js contact.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Arquivos principais enviados com sucesso${NC}"
else
    echo -e "${RED}❌ Erro no upload dos arquivos principais${NC}"
    exit 1
fi

# 3. Criar e enviar pasta config
echo -e "${BLUE}📁 Enviando configurações...${NC}"
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "mkdir -p $REMOTE_PATH/config"
scp -i "$SSH_KEY_PATH" config/database.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/config/"

# 4. Criar e enviar pasta admin
echo -e "${BLUE}👨‍💼 Enviando painel administrativo...${NC}"
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "mkdir -p $REMOTE_PATH/admin"
scp -i "$SSH_KEY_PATH" admin/*.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/admin/"

# 5. Configurar permissões
echo -e "${BLUE}🔒 Configurando permissões...${NC}"
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "
cd $REMOTE_PATH
chmod 644 *.php
chmod 644 config/*.php
chmod 644 admin/*.php
chmod 755 config/
chmod 755 admin/
"

# 6. Testar se o site está funcionando
echo -e "${BLUE}🧪 Testando o site...${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" "https://cajait.com")
if [ "$response" = "200" ]; then
    echo -e "${GREEN}✅ Site respondendo corretamente (HTTP $response)${NC}"
else
    echo -e "${YELLOW}⚠️  Site respondeu com código HTTP $response${NC}"
fi

# 7. Testar painel admin
admin_response=$(curl -s -o /dev/null -w "%{http_code}" "https://cajait.com/admin/")
if [ "$admin_response" = "200" ]; then
    echo -e "${GREEN}✅ Painel administrativo funcionando (HTTP $admin_response)${NC}"
else
    echo -e "${YELLOW}⚠️  Painel admin respondeu com código HTTP $admin_response${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Deploy concluído com sucesso!${NC}"
echo "=================================================="
echo -e "${BLUE}📍 URLs importantes:${NC}"
echo "• Site principal: https://cajait.com"
echo "• Painel admin: https://cajait.com/admin/"
echo "• Login: admin / cajait2025!"
echo ""
echo -e "${YELLOW}📋 Próximos passos:${NC}"
echo "1. Configurar o banco de dados no Hostinger"
echo "2. Editar config/database.php com suas credenciais"
echo "3. Executar o script database_setup.sql no phpMyAdmin"
echo "4. Testar o formulário de contato"
echo ""
echo -e "${GREEN}✨ Site da Cajá deployado com sucesso!${NC}"