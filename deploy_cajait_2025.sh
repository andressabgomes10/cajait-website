#!/bin/bash

# 🚀 Script de Deploy Automatizado - Cajá Website 2025
# Este script prepara todos os arquivos para upload no Hostinger

echo "🚀 INICIANDO DEPLOY AUTOMATIZADO - CAJÁ WEBSITE 2025"
echo "=================================================="

# Criar diretório de deploy
echo "📁 Criando estrutura de deploy..."
mkdir -p cajait_deploy_2025/{config,admin}

# Copiar arquivos principais
echo "📋 Copiando arquivos principais..."
cp index.html cajait_deploy_2025/
cp style.css cajait_deploy_2025/
cp script.js cajait_deploy_2025/
cp contact.php cajait_deploy_2025/

# Copiar configurações
echo "⚙️  Copiando configurações..."
cp config/database.php cajait_deploy_2025/config/

# Copiar painel administrativo
echo "👨‍💼 Copiando painel administrativo..."
cp admin/*.php cajait_deploy_2025/admin/

# Copiar script de banco
echo "🗄️  Copiando script de banco de dados..."
cp database_setup.sql cajait_deploy_2025/

# Copiar documentação
echo "📚 Copiando documentação..."
cp DEPLOY_HOSTINGER_ATUALIZADO_2025.md cajait_deploy_2025/

# Criar arquivo de instruções rápidas
cat > cajait_deploy_2025/INSTRUCOES_RAPIDAS.txt << 'EOF'
🚀 DEPLOY RÁPIDO - CAJÁ WEBSITE 2025

📋 CHECKLIST:
1. [ ] Criar banco MySQL no Hostinger
2. [ ] Executar database_setup.sql no phpMyAdmin  
3. [ ] Editar config/database.php com suas credenciais
4. [ ] Upload todos os arquivos para public_html/
5. [ ] Testar: seu-dominio.com e seu-dominio.com/admin/

🔑 LOGIN PAINEL:
- Usuário: admin
- Senha: cajait2025!

📞 WHATSAPP:
- Número atual: +55 85 99217-6713
- Para alterar: editar index.html (3 localizações)

✨ NOVIDADES DESTA VERSÃO:
- Widget "Ajuda?" com ícone oficial da Cajá
- Cores 100% alinhadas (dourado/bronze)
- Acessibilidade aprimorada
- Interface limpa e otimizada

📖 DOCUMENTAÇÃO COMPLETA:
Ver arquivo: DEPLOY_HOSTINGER_ATUALIZADO_2025.md
EOF

# Criar arquivo ZIP para download
echo "📦 Criando arquivo ZIP..."
zip -r cajait_website_2025_completo.zip cajait_deploy_2025/

# Exibir informações finais
echo ""
echo "✅ DEPLOY PREPARADO COM SUCESSO!"
echo "================================"
echo ""
echo "📁 Pasta criada: cajait_deploy_2025/"
echo "📦 Arquivo ZIP: cajait_website_2025_completo.zip"
echo ""
echo "📋 PRÓXIMOS PASSOS:"
echo "1. Baixar o arquivo cajait_website_2025_completo.zip"
echo "2. Seguir instruções em DEPLOY_HOSTINGER_ATUALIZADO_2025.md"
echo "3. Upload no Hostinger via FTP ou Gerenciador de Arquivos"
echo ""
echo "🎯 ARQUIVOS INCLUSOS:"
echo "   ├── index.html (Site principal atualizado)"
echo "   ├── style.css (Com widget de ajuda)"
echo "   ├── script.js (Funcionalidades JavaScript)"
echo "   ├── contact.php (Formulário + banco)"
echo "   ├── config/database.php (Configuração MySQL)"
echo "   ├── admin/ (Painel administrativo completo)"
echo "   ├── database_setup.sql (Script das tabelas)"
echo "   └── DEPLOY_HOSTINGER_ATUALIZADO_2025.md (Documentação)"
echo ""
echo "🔥 O site está pronto para ser publicado no Hostinger!"
echo "✨ Inclui todas as melhorias: widget de ajuda, cores corretas, acessibilidade!"