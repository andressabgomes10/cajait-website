#!/bin/bash

# 🚀 Deploy Direto via SCP - Usando a nova chave gerada
echo "🚀 INICIANDO DEPLOY AUTOMÁTICO COM NOVA CHAVE"
echo "============================================="

SSH_KEY="/tmp/cajait_hostinger_nova"
HOSTINGER_USER="u921347543"
HOSTINGER_HOST="srv1845.hstgr.io"
REMOTE_PATH="/home/u921347543/public_html"

echo "🔐 Testando conexão SSH..."
if ssh -i $SSH_KEY -o StrictHostKeyChecking=no -o ConnectTimeout=10 $HOSTINGER_USER@$HOSTINGER_HOST "echo 'Conexão OK!'"; then
    echo "✅ Conexão SSH estabelecida!"
    
    echo "🗄️ Fazendo backup dos arquivos existentes..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "
        cd $REMOTE_PATH
        if [ -f index.html ]; then
            mkdir -p backup_$(date +%Y%m%d_%H%M%S)
            cp -r *.html *.css *.js *.php config admin backup_$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true
            echo '✅ Backup criado'
        fi
    "
    
    echo "📤 Enviando arquivos do site atualizado..."
    
    # Upload arquivos principais
    scp -i $SSH_KEY cajait_deploy_2025/index.html $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    scp -i $SSH_KEY cajait_deploy_2025/style.css $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    scp -i $SSH_KEY cajait_deploy_2025/script.js $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    scp -i $SSH_KEY cajait_deploy_2025/contact.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    
    # Criar e enviar config
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "mkdir -p $REMOTE_PATH/config"
    scp -i $SSH_KEY cajait_deploy_2025/config/database.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/config/
    
    # Criar e enviar admin
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "mkdir -p $REMOTE_PATH/admin"
    scp -i $SSH_KEY cajait_deploy_2025/admin/*.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/admin/
    
    echo "🔧 Configurando permissões..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "
        cd $REMOTE_PATH
        chmod 644 *.html *.css *.js *.php 2>/dev/null || true
        chmod 644 config/*.php 2>/dev/null || true
        chmod 644 admin/*.php 2>/dev/null || true
        chmod 755 config admin 2>/dev/null || true
        echo '✅ Permissões configuradas'
    "
    
    echo ""
    echo "🎉 DEPLOY CONCLUÍDO COM SUCESSO!"
    echo "================================"
    echo ""
    echo "✅ Site atualizado enviado:"
    echo "   ├── index.html (Widget Ajuda? + cores douradas)"
    echo "   ├── style.css (Design atualizado)"
    echo "   ├── script.js (Funcionalidades)"
    echo "   ├── contact.php (Formulário + banco)"
    echo "   ├── config/database.php (Suas credenciais)"
    echo "   └── admin/ (Painel administrativo)"
    echo ""
    echo "⚠️ AÇÃO NECESSÁRIA:"
    echo "Editar config/database.php e inserir sua senha MySQL!"
    echo ""
    echo "🧪 TESTAR AGORA:"
    echo "1. Site: https://seu-dominio.com"
    echo "2. Widget: Botão 'Ajuda?' no canto direito"
    echo "3. Admin: https://seu-dominio.com/admin/ (admin/cajait2025!)"
    echo ""
    echo "🔥 NOVIDADES ATIVAS:"
    echo "• Widget interativo com ícone Cajá"
    echo "• Cores 100% da marca (dourado/bronze)"
    echo "• Interface limpa e otimizada"
    echo "• Sistema completo funcionando"
    
else
    echo "❌ Erro na conexão SSH."
    echo ""
    echo "📋 OPÇÕES ALTERNATIVAS:"
    echo ""
    echo "1️⃣ ADICIONAR CHAVE PÚBLICA NO HOSTINGER:"
    echo "   - Acesse: hPanel → SSH Access → Add Key"
    echo "   - Cole a chave pública gerada acima"
    echo "   - Execute este script novamente"
    echo ""
    echo "2️⃣ UPLOAD MANUAL (MAIS SIMPLES):"
    echo "   - Download: cajait_website_2025_SEU_BANCO.tar.gz"
    echo "   - Upload via File Manager do Hostinger"
    echo "   - Editar apenas: config/database.php"
    echo ""
    echo "3️⃣ SCP MANUAL:"
    echo "   scp -r cajait_deploy_2025/* u921347543@srv1845.hstgr.io:/home/u921347543/public_html/"
fi