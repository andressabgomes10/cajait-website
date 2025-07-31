#!/bin/bash

# 🚀 PREPARAÇÃO FINAL PARA DEPLOY HOSTINGER
echo "🎯 PREPARANDO DEPLOY FINAL - CAJÁ WEBSITE 2025"
echo "=============================================="

# Criar estrutura final organizada
echo "📁 Organizando arquivos para upload..."
rm -rf deploy_hostinger_final
mkdir -p deploy_hostinger_final

# Copiar todos os arquivos necessários
echo "📋 Copiando site atualizado..."
cp cajait_deploy_2025/index.html deploy_hostinger_final/
cp cajait_deploy_2025/style.css deploy_hostinger_final/
cp cajait_deploy_2025/script.js deploy_hostinger_final/
cp cajait_deploy_2025/contact.php deploy_hostinger_final/

# Copiar configurações
echo "⚙️ Copiando configurações..."
mkdir -p deploy_hostinger_final/config
cp cajait_deploy_2025/config/database.php deploy_hostinger_final/config/

# Copiar painel admin
echo "👨‍💼 Copiando painel administrativo..."
mkdir -p deploy_hostinger_final/admin
cp cajait_deploy_2025/admin/*.php deploy_hostinger_final/admin/

# Criar arquivo de instruções ultra-simples
cat > deploy_hostinger_final/INSTRUCOES_DEPLOY.txt << 'EOF'
🚀 DEPLOY CAJÁ - INSTRUÇÕES SIMPLES

📋 PASSOS:
1. Fazer upload de TODOS os arquivos para public_html/
2. Editar config/database.php - linha 10 - colocar sua senha MySQL
3. Testar: seu-dominio.com

🔑 LOGIN ADMIN:
- URL: seu-dominio.com/admin/
- Usuário: admin
- Senha: cajait2025!

📞 WHATSAPP: +55 85 99217-6713
📧 EMAIL: andressa@cajait.com

✨ NOVIDADES:
- Widget "Ajuda?" com ícone Cajá
- Cores douradas 100% consistentes
- Sistema completo funcionando

⏱️ TEMPO: 5-10 minutos no ar!
EOF

# Criar estrutura visual para mostrar organização
echo ""
echo "📁 ESTRUTURA CRIADA PARA UPLOAD:"
echo "================================"
echo "deploy_hostinger_final/"
echo "├── index.html                 ← Site principal (widget + cores)"
echo "├── style.css                  ← Design atualizado"
echo "├── script.js                  ← Funcionalidades"
echo "├── contact.php                ← Formulário + banco"
echo "├── config/"
echo "│   └── database.php           ← ⚠️ EDITAR SENHA AQUI"
echo "├── admin/"
echo "│   ├── index.php              ← Dashboard"
echo "│   ├── login.php              ← Login"
echo "│   ├── logout.php             ← Logout" 
echo "│   └── view_contact.php       ← Detalhes"
echo "└── INSTRUCOES_DEPLOY.txt      ← Guia rápido"

# Criar arquivo ZIP final
echo ""
echo "📦 Criando arquivo final..."
tar -czf cajait_deploy_FINAL_HOSTINGER.tar.gz deploy_hostinger_final/

echo ""
echo "✅ DEPLOY FINAL PREPARADO!"
echo "========================="
echo ""
echo "📦 Arquivo: cajait_deploy_FINAL_HOSTINGER.tar.gz"
echo "📁 Pasta: deploy_hostinger_final/"
echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "1. Baixar arquivo cajait_deploy_FINAL_HOSTINGER.tar.gz"
echo "2. Extrair no seu computador"
echo "3. Upload via Hostinger File Manager para public_html/"
echo "4. Editar config/database.php - inserir sua senha MySQL"
echo "5. Testar: https://seu-dominio.com"
echo ""
echo "🔥 RESULTADO:"
echo "• Widget 'Ajuda?' com ícone Cajá funcionando"
echo "• Cores douradas 100% da marca"
echo "• Sistema completo com admin panel"
echo "• Formulário salvando no seu banco"
echo "• Design responsivo e otimizado"
echo ""
echo "⏱️ TEMPO ESTIMADO: 10 MINUTOS NO AR!"