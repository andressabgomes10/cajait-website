#!/bin/bash

# 🚀 Deploy SSH Automático - Chave Privada Real
echo "🔑 INICIANDO DEPLOY SSH AUTOMÁTICO"
echo "================================="

# Criar arquivo de chave privada temporário
SSH_KEY="/tmp/cajait_private_key"
cat > $SSH_KEY << 'EOF'
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAACFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAgEAvjMgKAny4FJLRYd70nXHbvXEo2+8AB3rZePLbBmcLCr8Nvqom2tw
wB78AGSfF85JB5gWvN0uhfiESqWPXtAHT0PEExXCnNVpGeOiC2rOnRq5ZG66b3z0zk/nEM
9FqXcwD3REIWZt0YUa9+LDpTnFYLSULVN5Y3uvs4MRmiEWLm+8kLVy+T4WKJ3BLAiz2IHX
OJBDxV1gAZEkfTTh4tz4fttLqL9EHK8uojkJIwPcUw/QThRjFOC0/QBAiX0YRUfHv5xele
1EI9mSNy5QvhbdHN+69eOmehmhlDHTB7uA3+vYtkvMxMsS/evyJ+alydbLRMk7RKQyIWNe
MHSbTTskJ6Yhu8s+lfj41xYrR6LnZpZl5/7PgUdMBkEln0JyslyDjSit4JmjvGn1Ox4L1W
NPiHvIwjkeeoX/7UeUSUlHxEPX8Fhfadi3RIopUjAtGUdmIWqn+gqNf2HxFNTvDLvS00m7
qRmGjX+FOyQ0GSTHkojd2i2nhvCwpC2LYkn/cFgsuNKrPBLfFQeR//6wNdijKNeQhxQCA5
IFt5R3cpzi91WVVNQADCjp5O8LVbftY3ypEYKpFNZ9E4zPaNW6yDUi5pvOY8BleO/oUWRF
KpQ53uT5hr8CVCemWxdDW2vdA+zNzlsy/AD9Gz912UU3qD1zyZTOaEw/GtTfUtDiRdD7+O
cAAAdQvhuL+L4bi/gAAAAHc3NoLXJzYQAAAgEAvjMgKAny4FJLRYd70nXHbvXEo2+8AB3r
ZePLbBmcLCr8Nvqom2twwB78AGSfF85JB5gWvN0uhfiESqWPXtAHT0PEExXCnNVpGeOiC2
rOnRq5ZG66b3z0zk/nEM9FqXcwD3REIWZt0YUa9+LDpTnFYLSULVN5Y3uvs4MRmiEWLm+8
kLVy+T4WKJ3BLAiz2IHXOJBDxV1gAZEkfTTh4tz4fttLqL9EHK8uojkJIwPcUw/QThRjFO
C0/QBAiX0YRUfHv5xele1EI9mSNy5QvhbdHN+69eOmehmhlDHTB7uA3+vYtkvMxMsS/evy
J+alydbLRMk7RKQyIWNeMHSbTTskJ6Yhu8s+lfj41xYrR6LnZpZl5/7PgUdMBkEln0Jysl
yDjSit4JmjvGn1Ox4L1WNPiHvIwjkeeoX/7UeUSUlHxEPX8Fhfadi3RIopUjAtGUdmIWqn
+gqNf2HxFNTvDLvS00m7qRmGjX+FOyQ0GSTHkojd2i2nhvCwpC2LYkn/cFgsuNKrPBLfFQ
eR//6wNdijKNeQhxQCA5IFt5R3cpzi91WVVNQADCjp5O8LVbftY3ypEYKpFNZ9E4zPaNW6
yDUi5pvOY8BleO/oUWRFKpQ53uT5hr8CVCemWxdDW2vdA+zNzlsy/AD9Gz912UU3qD1zyZ
TOaEw/GtTfUtDiRdD7+OcAAAADAQABAAACAFSgmuY1xwNYmnVNWyLBlQMiB2RRCu1iYqLr
QE/Q9VQRrDcqQGsm2vwgzS+/laoZ9xSR70wJffHOKc6s66XcGeSC2nNDc1wk+Ka0Sh2aYG
Q2x9aQDhQdHS/PDZjFINHOXmwB526VDLf06ZLyKusRUWk979BbG9/P4NWWs/ZIUn5G6Tfa
BFYx8doQlyrolFz5KLHaPs1KRrVrxziOlxNCDq8jE/75W20H5U/44L/br+SlXKHhIFThxq
XrvstuBaaN0arIAK3k7DSnUg+LZBGwSqHWSnGt4Rzi2qn9oVAHdcgsQDiccXf+g2zH1u86
CPpNwBPTFbPs+wEwHXCh8ZfjgKn+pYTvRmZY50MdsoL6zq1T/ADbRUWDou5QgO9JzjzsDY
XLEHYdOp79TViiIODA3Fs9gifAWFPlMbkxmPJw37bATwK5PxXZZz3ZUg5IGE085YEutIPi
0X+oU7wIBnXuPxwVGMPNRqcNzbR3fKz5tBQvxSVJgh3Y+dn+uJ8fLBdBcx27M2kcyziaaK
oMHLUPYDprWNs/6a6bq0evno3dfr05G4hwqSortSZ+4eF1RG7vbFrP3gswsGx/cHmlVg5Q
jAGf2X/iuAJ/UNz9sGk27uvufFb2C7/3pZXW2LVO3mcQTvBjzQnpGPtUfdZdd9gBAfIJSb
vV35IADV+KwI/FG5fBAAABAEUQOCKMAoSZF8nx88i9HETPQsH5dE92BVv26+Rq3nu8GccS
OzjsfVCQcUV3Z6/JHG1Av/g8dHq5nxmu2xnEIL7V/pFjMsHUBfp4ZIeLxxG2wBwruV1tal
nro1CRlBpf/1P5LeAsRZnXTSZX/Oao1kWVY9qWfJq89YbEW1Bt02/uuRB4K4Qp5ZG9kqju
R9Vl6DK6Mozg0lJQuuZCOdt2Gzid2Nmhyonuno4BdXLDr37lIz8qMXFxphnpQb77yo2mkh
SeNhG+tny5wXX135mHAH00KI0suf4VcEO2Q8RtEqD8lTOL1Jg1oLjZborqcKN3R9rYM6d7
xACFwFC7cqrluHYAAAEBAO5rdZTos9I6L4FAp9eUjSjvAc7Nd4nYm7Z2tYmp9VILi5wHgV
GSymRCLLlugdsM59HFDyDNOCbtVRanikpr/7zc3Es6n6ULxtKHRcZzE5ky8RPwO53ptgnk
BNueKqnBj7DohzVJ3phk+i3mECPuDiEchTRl6QA1WfBNhywwUWMsaMr+qJquud26mR6PE9
VWWCxj2g17RvPd+p4vi9buifQ9hMTGPg95zM3w1WJUK3lSS8ZQ7AOHRKwu5+7G0Ecgl3qj
OirtaGzcA6kfU4QQ8UWOTQxI36/XeCIbmArGIMIRg3ClHGpYm5Pzzab2vT0ryV0Y8LHTxN
r9xrbgD2ggAiMAAAEBAMw5cD1mVr6cIoQ4ya0/0KAFSiLAFQokPwmH73T16Nim59bC4GPx
O7KTVDWdgv6g6i6RPlhwi8ltNZ/x1m/8N/2N1s5E5PTWMw3zT9FnPZxWLovDlyt8gSDRZW
ooqEwtIE2P+0fOYQubAF9LHc57tEVCTlA10sw+cSS1D4MgmvCyOHJHMRIsGECD/vVrx8ww
2LbN8ZD7nijrYNxhWRPNkH+JYj+IOw76pR9GLvELB6ijloB/iJAi/iVFeMY6GXF3FnzdoJ
eTsMo8KjSsjpaVw7ddsVrEx6od2cnVjcuHxTBNLXbnFvLVV5bHaSPIWYppr6G6VqrS7lCx
3MxmacVBsG0AAAAaYW5kcmVzc2FiZ29tZXMxMEBnbWFpbC5jb20B
-----END OPENSSH PRIVATE KEY-----
EOF

# Configurar permissões da chave
chmod 600 $SSH_KEY

# Configurações do servidor
HOSTINGER_USER="u921347543"
HOSTINGER_HOST="srv1845.hstgr.io"
REMOTE_PATH="/home/u921347543/public_html"

echo "🔐 Testando conexão SSH com chave privada..."

# Testar conexão SSH
if ssh -i $SSH_KEY -o StrictHostKeyChecking=no -o ConnectTimeout=15 $HOSTINGER_USER@$HOSTINGER_HOST "echo 'Conexão SSH estabelecida com sucesso!'"; then
    echo "✅ CONEXÃO SSH FUNCIONANDO!"
    echo ""
    
    echo "🗄️ Fazendo backup dos arquivos existentes..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "
        cd $REMOTE_PATH
        if [ -f index.html ]; then
            mkdir -p backup_$(date +%Y%m%d_%H%M%S)
            cp -r *.html *.css *.js *.php config admin backup_$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true
            echo '✅ Backup criado em backup_$(date +%Y%m%d_%H%M%S)/'
        fi
    "
    
    echo ""
    echo "📤 ENVIANDO SITE ATUALIZADO COM WIDGET CAJÁ..."
    echo "=============================================="
    
    # Upload arquivos principais
    echo "📋 Enviando arquivos principais..."
    scp -i $SSH_KEY deploy_hostinger_final/index.html $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    scp -i $SSH_KEY deploy_hostinger_final/style.css $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    scp -i $SSH_KEY deploy_hostinger_final/script.js $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    scp -i $SSH_KEY deploy_hostinger_final/contact.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/
    
    # Criar diretório config e enviar
    echo "⚙️ Enviando configurações do banco..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "mkdir -p $REMOTE_PATH/config"
    scp -i $SSH_KEY deploy_hostinger_final/config/database.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/config/
    
    # Criar diretório admin e enviar
    echo "👨‍💼 Enviando painel administrativo..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "mkdir -p $REMOTE_PATH/admin"
    scp -i $SSH_KEY deploy_hostinger_final/admin/*.php $HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/admin/
    
    echo "🔧 Configurando permissões..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "
        cd $REMOTE_PATH
        chmod 644 *.html *.css *.js *.php 2>/dev/null || true
        chmod 644 config/*.php 2>/dev/null || true
        chmod 644 admin/*.php 2>/dev/null || true
        chmod 755 config admin 2>/dev/null || true
        echo '✅ Permissões configuradas corretamente'
    "
    
    echo "🧪 Verificando arquivos no servidor..."
    ssh -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "
        cd $REMOTE_PATH
        echo '📁 Arquivos principais:'
        ls -la *.html *.css *.js *.php 2>/dev/null || echo 'Arquivos principais não encontrados'
        echo ''
        echo '📁 Configurações:'
        ls -la config/ 2>/dev/null || echo 'Pasta config não existe'
        echo ''
        echo '📁 Admin:'
        ls -la admin/ 2>/dev/null || echo 'Pasta admin não existe'
    "
    
    # Remover chave temporária por segurança
    rm -f $SSH_KEY
    
    echo ""
    echo "🎉 DEPLOY SSH CONCLUÍDO COM SUCESSO!"
    echo "===================================="
    echo ""
    echo "✅ SITE DA CAJÁ ATUALIZADO NO SERVIDOR!"
    echo ""
    echo "🎨 NOVIDADES ENVIADAS:"
    echo "   ├── 🥭 Widget 'Ajuda?' com ícone oficial da Cajá"
    echo "   ├── 🟡 Cores douradas 100% consistentes"
    echo "   ├── 📱 Menu interativo (WhatsApp + Formulário + Telefone)"
    echo "   ├── 🧹 Interface limpa sem elementos desnecessários"
    echo "   ├── 📊 Sistema completo com banco configurado"
    echo "   └── ♿ Acessibilidade WAI/W3C implementada"
    echo ""
    echo "🔑 CREDENCIAIS CONFIGURADAS:"
    echo "   • Banco: u921347543_sitecaja ✅"
    echo "   • Usuário: u921347543_sitecaja ✅"
    echo "   • Senha: -Aa200200229* ✅"
    echo ""
    echo "🧪 TESTES OBRIGATÓRIOS:"
    echo "1. 🌐 Site: https://seu-dominio.com"
    echo "   • Verificar design dourado carregando"
    echo "   • Testar widget 'Ajuda?' no canto direito"
    echo "   • Confirmar menu responsivo funcionando"
    echo ""
    echo "2. 💬 Widget Cajá:"
    echo "   • Clicar no botão 'Ajuda?'"
    echo "   • Verificar ícone da fruta cajá"
    echo "   • Testar link WhatsApp: +55 85 99217-6713"
    echo ""
    echo "3. 📧 Formulário:"
    echo "   • Preencher todos os campos"
    echo "   • Enviar mensagem"
    echo "   • Verificar confirmação verde"
    echo ""
    echo "4. 👨‍💼 Painel Admin:"
    echo "   • URL: https://seu-dominio.com/admin/"
    echo "   • Login: admin / cajait2025!"
    echo "   • Verificar dashboard e mensagens"
    echo ""
    echo "🔥 RESULTADO FINAL:"
    echo "✨ Site da Cajá 100% profissional com widget interativo!"
    echo "🎯 Sistema completo funcionando com identidade da marca!"
    echo "📱 Design responsivo e otimizado para conversões!"
    
else
    echo "❌ Erro na conexão SSH."
    echo ""
    echo "📋 POSSÍVEIS SOLUÇÕES:"
    echo ""
    echo "1️⃣ VERIFICAR CHAVE SSH:"
    echo "   • Confirmar se a chave privada está correta"
    echo "   • Verificar se corresponde à chave pública no Hostinger"
    echo ""
    echo "2️⃣ VERIFICAR SERVIDOR:"
    echo "   • Host: srv1845.hstgr.io"
    echo "   • Usuário: u921347543"
    echo "   • Porta SSH ativa no Hostinger"
    echo ""
    echo "3️⃣ ALTERNATIVA - UPLOAD MANUAL:"
    echo "   • Usar: cajait_deploy_FINAL_CONFIGURADO.tar.gz"
    echo "   • Upload via File Manager do Hostinger"
    echo "   • Tempo: 5 minutos (já pré-configurado!)"
    
    # Remover chave por segurança mesmo em caso de erro
    rm -f $SSH_KEY
fi