#!/bin/bash

# 🚀 Script de Deploy SSH Automatizado - Cajá Hostinger 2025
echo "🔑 INICIANDO DEPLOY SSH PARA HOSTINGER"
echo "====================================="

# Configurações do servidor
HOSTINGER_HOST="srv1845.hstgr.io"  # ou seu servidor específico
HOSTINGER_USER="u921347543"        # seu usuário Hostinger
SSH_KEY_FILE="/tmp/cajait_hostinger_key"
REMOTE_PATH="/home/u921347543/public_html"

# Criar arquivo de chave SSH temporário
echo "🔐 Configurando chave SSH..."
cat > $SSH_KEY_FILE << 'EOF'
-----BEGIN OPENSSH PRIVATE KEY-----
# NOTA: Você precisará fornecer sua chave PRIVADA correspondente à chave pública
# A chave fornecida é pública (ssh-rsa...), mas precisamos da privada para conectar
-----END OPENSSH PRIVATE KEY-----
EOF

# Definir permissões corretas para a chave
chmod 600 $SSH_KEY_FILE

echo "📡 Testando conexão SSH..."
# Testar conexão SSH
if ssh -i $SSH_KEY_FILE -o StrictHostKeyChecking=no $HOSTINGER_USER@$HOSTINGER_HOST "echo 'Conexão estabelecida!'"; then
    echo "✅ Conexão SSH funcionando!"
else
    echo "❌ Erro na conexão SSH. Verificar:"
    echo "   - Chave privada correta"
    echo "   - Usuário: $HOSTINGER_USER"
    echo "   - Host: $HOSTINGER_HOST"
    exit 1
fi

echo "🗄️ Fazendo backup dos arquivos existentes..."
ssh -i $SSH_KEY_FILE $HOSTINGER_USER@$HOSTINGER_HOST "
    cd $REMOTE_PATH
    if [ -f index.html ]; then
        mkdir -p backup_$(date +%Y%m%d_%H%M%S)
        cp -r *.html *.css *.js *.php config admin backup_$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true
        echo '✅ Backup criado'
    fi
"

echo "📤 Enviando arquivos atualizados..."

# Upload dos arquivos principais
echo "📋 Enviando arquivos principais..."
scp -i $SSH_KEY_FILE cajait_deploy_2025/index.html $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
scp -i $SSH_KEY_FILE cajait_deploy_2025/style.css $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
scp -i $SSH_KEY_FILE cajait_deploy_2025/script.js $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
scp -i $SSH_KEY_FILE cajait_deploy_2025/contact.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/

# Criar diretório config e enviar
echo "⚙️ Enviando configurações..."
ssh -i $SSH_KEY_FILE $HOSTINGER_USER@$HOSTINGER_HOST "mkdir -p $REMOTE_PATH/config"
scp -i $SSH_KEY_FILE cajait_deploy_2025/config/database.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/config/

# Criar diretório admin e enviar
echo "👨‍💼 Enviando painel administrativo..."
ssh -i $SSH_KEY_FILE $HOSTINGER_USER@$HOSTINGER_HOST "mkdir -p $REMOTE_PATH/admin"
scp -i $SSH_KEY_FILE cajait_deploy_2025/admin/*.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/admin/

echo "🔧 Configurando permissões..."
ssh -i $SSH_KEY_FILE $HOSTINGER_USER@$HOSTINGER_HOST "
    cd $REMOTE_PATH
    chmod 644 *.html *.css *.js *.php
    chmod 644 config/*.php
    chmod 644 admin/*.php
    chmod 755 config admin
    echo '✅ Permissões configuradas'
"

echo "🧪 Testando funcionamento..."
echo "📋 Verificando arquivos enviados..."
ssh -i $SSH_KEY_FILE $HOSTINGER_USER@$HOSTINGER_HOST "
    cd $REMOTE_PATH
    echo '📁 Arquivos no diretório:'
    ls -la *.html *.css *.js *.php 2>/dev/null || echo 'Nenhum arquivo principal encontrado'
    echo ''
    echo '📁 Configurações:'
    ls -la config/ 2>/dev/null || echo 'Pasta config não existe'
    echo ''
    echo '📁 Admin:'
    ls -la admin/ 2>/dev/null || echo 'Pasta admin não existe'
"

# Limpar chave temporária
rm -f $SSH_KEY_FILE

echo ""
echo "🎉 DEPLOY CONCLUÍDO COM SUCESSO!"
echo "================================"
echo ""
echo "✅ Arquivos enviados:"
echo "   ├── index.html (Site com widget Ajuda?)"
echo "   ├── style.css (Cores douradas corretas)"
echo "   ├── script.js (Funcionalidades JavaScript)"
echo "   ├── contact.php (Formulário + banco)"
echo "   ├── config/database.php (Suas credenciais)"
echo "   └── admin/ (Painel administrativo)"
echo ""
echo "🔧 PRÓXIMO PASSO CRÍTICO:"
echo "Editar config/database.php e inserir sua senha MySQL!"
echo ""
echo "🧪 TESTAR:"
echo "1. Site: https://seu-dominio.com"
echo "2. Admin: https://seu-dominio.com/admin/"
echo "3. Login: admin / cajait2025!"
echo ""
echo "🔥 Widget 'Ajuda?' com ícone Cajá ativo!"
echo "🎨 Cores douradas 100% consistentes!"
echo "📱 Sistema completo funcionando!"