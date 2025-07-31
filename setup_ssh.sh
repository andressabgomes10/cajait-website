#!/bin/bash

# 🔧 Script de Configuração SSH - Site Cajá
# Execute uma vez para configurar a chave SSH automaticamente

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔧 Configuração Automática SSH - Cajá${NC}"
echo "====================================="

SSH_KEY_PATH="$HOME/.ssh/cajait_hostinger"
SSH_CONFIG_PATH="$HOME/.ssh/config"

# Criar diretório .ssh se não existir
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Criar arquivo com a chave SSH
echo -e "${BLUE}🔑 Criando chave SSH...${NC}"
cat > "$SSH_KEY_PATH" << 'EOF'
-----BEGIN OPENSSH PRIVATE KEY-----
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCsGJR8A6VCbmZEWOIco5iIls80Ta4LmEvxWyCMq6x10Tka5Suu1eTDfagUar9FwRspwlEtAnbhIiyDVHSREzcEndPdncDFTWwy/CFKaZpLyTEYuzA008nS/FTM33pCPXu8fOtHdC5QBL/I2x8ODS7mnBs222liFp4WEDMZAt4L5vM9JMGXxrT9SJMyL/2wAmj9+0jiL5cg5Ktcvop0JtFiRfG097JL8k7QiuYZRuqNFltGOINNsyLtyavARE+Lh7IeObCY2hLhoyap5GC5Zob1aymlEJ22gyWb74K9XZxUQEootMrNnvs+5tYXdoTbYGxUxHs6qs1CwRJGzZkoFXFhRWDqzY0TL6M6KQ3LARLNrUNw2Rv0w5XrwgwZfnJrCEA0u2ANjgppgTlFNqVjaYcLJW5F1YAf4dCxaS5/qiPUQrodwmM+6to1syu4317koUesUrTHfq/at/SqYRlNzENxlY8Vmp3YGRSAtEMxwdO6CS3U07PyT+NQF9wh8SX1slM= u921347543@br-asc-web1845.main-hosting.eu
EOF

# Definir permissões corretas para a chave
chmod 600 "$SSH_KEY_PATH"
echo -e "${GREEN}✅ Chave SSH criada em $SSH_KEY_PATH${NC}"

# Adicionar configuração SSH
echo -e "${BLUE}⚙️  Configurando SSH...${NC}"
if ! grep -q "Host cajait-hostinger" "$SSH_CONFIG_PATH" 2>/dev/null; then
    cat >> "$SSH_CONFIG_PATH" << EOF

# Configuração Hostinger - Site Cajá
Host cajait-hostinger
    HostName br-asc-web1845.main-hosting.eu
    User u921347543
    IdentityFile $SSH_KEY_PATH
    StrictHostKeyChecking no
    UserKnownHostsFile /dev/null

EOF
    chmod 600 "$SSH_CONFIG_PATH"
    echo -e "${GREEN}✅ Configuração SSH adicionada${NC}"
else
    echo -e "${YELLOW}⚠️  Configuração SSH já existe${NC}"
fi

# Testar conexão
echo -e "${BLUE}🧪 Testando conexão SSH...${NC}"
if ssh -i "$SSH_KEY_PATH" -o ConnectTimeout=10 -o StrictHostKeyChecking=no u921347543@br-asc-web1845.main-hosting.eu "echo 'Conexão SSH funcionando!'" 2>/dev/null; then
    echo -e "${GREEN}✅ Conexão SSH estabelecida com sucesso!${NC}"
else
    echo -e "${RED}❌ Não foi possível conectar via SSH${NC}"
    echo -e "${YELLOW}💡 Verifique se a chave SSH está correta no painel do Hostinger${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Configuração SSH concluída!${NC}"
echo "==============================="
echo -e "${BLUE}📋 Próximos passos:${NC}"
echo "1. Execute: chmod +x deploy_cajait.sh"
echo "2. Execute: ./deploy_cajait.sh"
echo ""
echo -e "${YELLOW}💡 Comandos disponíveis:${NC}"
echo "• Deploy completo: ./deploy_cajait.sh"
echo "• Atualização rápida: ./update_cajait.sh"
echo "• Conexão SSH: ssh cajait-hostinger"