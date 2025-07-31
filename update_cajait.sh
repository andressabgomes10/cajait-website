#!/bin/bash

# 🔄 Script de Atualização Rápida - Site Cajá
# Use este script para atualizações rápidas após o deploy inicial

# Configurações
SSH_USER="u921347543"
SSH_HOST="br-asc-web1845.main-hosting.eu"
SSH_KEY_PATH="~/.ssh/cajait_hostinger"
REMOTE_PATH="/home/u921347543/public_html"

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔄 Atualização Rápida do Site Cajá${NC}"
echo "=================================="

# Verificar qual arquivo atualizar
if [ "$1" ]; then
    file_to_update="$1"
    echo -e "${YELLOW}📝 Atualizando arquivo específico: $file_to_update${NC}"
    
    if [ ! -f "$file_to_update" ]; then
        echo -e "${RED}❌ Arquivo $file_to_update não encontrado${NC}"
        exit 1
    fi
    
    # Upload do arquivo específico
    scp -i "$SSH_KEY_PATH" "$file_to_update" "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"
    echo -e "${GREEN}✅ $file_to_update atualizado com sucesso${NC}"
    
else
    # Atualização geral dos arquivos principais
    echo -e "${YELLOW}📝 Atualizando todos os arquivos principais...${NC}"
    
    scp -i "$SSH_KEY_PATH" index.html style.css script.js contact.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"
    
    if [ -f "config/database.php" ]; then
        scp -i "$SSH_KEY_PATH" config/database.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/config/"
    fi
    
    if [ -f "admin/index.php" ]; then
        scp -i "$SSH_KEY_PATH" admin/*.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/admin/"
    fi
    
    echo -e "${GREEN}✅ Todos os arquivos atualizados${NC}"
fi

# Configurar permissões
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "
cd $REMOTE_PATH
chmod 644 *.php 2>/dev/null
chmod 644 config/*.php 2>/dev/null
chmod 644 admin/*.php 2>/dev/null
"

echo -e "${GREEN}🎉 Atualização concluída!${NC}"
echo ""
echo -e "${BLUE}💡 Uso:${NC}"
echo "• Atualizar tudo: ./update_cajait.sh"
echo "• Atualizar arquivo específico: ./update_cajait.sh contact.php"