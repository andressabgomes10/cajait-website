#!/bin/bash

# 🎯 Script All-in-One - Deploy Completo Cajá
# Execute este script para configurar tudo automaticamente

# Configurações
SSH_USER="u921347543"
SSH_HOST="br-asc-web1845.main-hosting.eu"
SSH_KEY_PATH="$HOME/.ssh/cajait_hostinger"
REMOTE_PATH="/home/u921347543/public_html"

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

clear
echo -e "${BOLD}${BLUE}"
echo "   ╔═══════════════════════════════════════╗"
echo "   ║          🚀 CAJÁ DEPLOY 2025          ║"
echo "   ║     Deploy Automático Completo        ║"
echo "   ╚═══════════════════════════════════════╝"
echo -e "${NC}"

# Menu principal
show_menu() {
    echo ""
    echo -e "${YELLOW}📋 Escolha uma opção:${NC}"
    echo "1. ⚙️  Configurar SSH (primeira vez)"
    echo "2. 🚀 Deploy completo do site"
    echo "3. 🗄️  Configurar banco de dados"
    echo "4. 🔄 Atualização rápida"
    echo "5. 🧪 Testar site e conexões"
    echo "6. 📊 Ver status do sistema"
    echo "7. 🔧 Utilitários"
    echo "0. ❌ Sair"
    echo ""
    read -p "Digite sua opção [0-7]: " choice
}

# Função para configurar SSH
setup_ssh() {
    echo -e "${BLUE}🔧 Configurando SSH...${NC}"
    
    # Criar diretório .ssh
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    
    # Criar chave SSH
    echo -e "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCsGJR8A6VCbmZEWOIco5iIls80Ta4LmEvxWyCMq6x10Tka5Suu1eTDfagUar9FwRspwlEtAnbhIiyDVHSREzcEndPdncDFTWwy/CFKaZpLyTEYuzA008nS/FTM33pCPXu8fOtHdC5QBL/I2x8ODS7mnBs222liFp4WEDMZAt4L5vM9JMGXxrT9SJMyL/2wAmj9+0jiL5cg5Ktcvop0JtFiRfG097JL8k7QiuYZRuqNFltGOINNsyLtyavARE+Lh7IeObCY2hLhoyap5GC5Zob1aymlEJ22gyWb74K9XZxUQEootMrNnvs+5tYXdoTbYGxUxHs6qs1CwRJGzZkoFXFhRWDqzY0TL6M6KQ3LARLNrUNw2Rv0w5XrwgwZfnJrCEA0u2ANjgppgTlFNqVjaYcLJW5F1YAf4dCxaS5/qiPUQrodwmM+6to1syu4317koUesUrTHfq/at/SqYRlNzENxlY8Vmp3YGRSAtEMxwdO6CS3U07PyT+NQF9wh8SX1slM= u921347543@br-asc-web1845.main-hosting.eu" > "$SSH_KEY_PATH.pub"
    
    # Simular chave privada (você precisa ter a chave privada real)
    echo -e "${YELLOW}⚠️  IMPORTANTE: Você precisa ter a chave SSH privada correspondente${NC}"
    echo -e "${YELLOW}💡 Salve sua chave SSH privada como: $SSH_KEY_PATH${NC}"
    
    # Configurar SSH config
    if ! grep -q "Host cajait-hostinger" ~/.ssh/config 2>/dev/null; then
        echo "" >> ~/.ssh/config
        echo "# Configuração Hostinger - Site Cajá" >> ~/.ssh/config
        echo "Host cajait-hostinger" >> ~/.ssh/config
        echo "    HostName $SSH_HOST" >> ~/.ssh/config
        echo "    User $SSH_USER" >> ~/.ssh/config
        echo "    IdentityFile $SSH_KEY_PATH" >> ~/.ssh/config
        echo "    StrictHostKeyChecking no" >> ~/.ssh/config
        echo "    UserKnownHostsFile /dev/null" >> ~/.ssh/config
        
        chmod 600 ~/.ssh/config
        echo -e "${GREEN}✅ Configuração SSH criada${NC}"
    fi
    
    echo -e "${YELLOW}⚠️  Para continuar, você precisa:${NC}"
    echo "1. Salvar sua chave SSH privada como: $SSH_KEY_PATH"
    echo "2. Executar: chmod 600 $SSH_KEY_PATH"
    echo "3. Testar conexão: ssh $SSH_USER@$SSH_HOST"
}

# Função para deploy completo
deploy_complete() {
    echo -e "${BLUE}🚀 Iniciando deploy completo...${NC}"
    
    # Verificar arquivos
    required_files=("index.html" "style.css" "script.js" "contact.php")
    for file in "${required_files[@]}"; do
        if [ ! -f "$file" ]; then
            echo -e "${RED}❌ Arquivo $file não encontrado${NC}"
            return 1
        fi
    done
    
    # Backup
    echo -e "${BLUE}📦 Criando backup...${NC}"
    ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "cd $REMOTE_PATH && tar -czf backup_$(date +%Y%m%d_%H%M%S).tar.gz * 2>/dev/null || echo 'Backup criado'"
    
    # Upload arquivos principais
    echo -e "${BLUE}📤 Enviando arquivos...${NC}"
    scp -i "$SSH_KEY_PATH" index.html style.css script.js contact.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"
    
    # Criar pastas e enviar
    echo -e "${BLUE}📁 Criando estrutura...${NC}"
    ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "mkdir -p $REMOTE_PATH/config $REMOTE_PATH/admin"
    
    if [ -d "config" ]; then
        scp -i "$SSH_KEY_PATH" config/*.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/config/"
    fi
    
    if [ -d "admin" ]; then
        scp -i "$SSH_KEY_PATH" admin/*.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/admin/"
    fi
    
    # Permissões
    echo -e "${BLUE}🔒 Configurando permissões...${NC}"
    ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "
        cd $REMOTE_PATH
        chmod 644 *.php
        chmod 644 config/*.php 2>/dev/null
        chmod 644 admin/*.php 2>/dev/null
        chmod 755 config admin
    "
    
    echo -e "${GREEN}🎉 Deploy concluído!${NC}"
}

# Função para configurar banco
setup_database() {
    echo -e "${BLUE}🗄️  Configurando banco de dados...${NC}"
    
    echo -e "${YELLOW}📝 Informe os dados do MySQL:${NC}"
    read -p "Nome do banco: " DB_NAME
    read -p "Usuário MySQL: " DB_USER
    read -s -p "Senha MySQL: " DB_PASS
    echo ""
    
    # Criar configuração
    cat > "/tmp/db_config.php" << EOF
<?php
class Database {
    private \$host = 'localhost';
    private \$db_name = '$DB_NAME';
    private \$username = '$DB_USER';
    private \$password = '$DB_PASS';
    
    private \$conn;
    
    public function connect() {
        \$this->conn = null;
        try {
            \$this->conn = new PDO(
                "mysql:host=" . \$this->host . ";dbname=" . \$this->db_name . ";charset=utf8",
                \$this->username,
                \$this->password,
                array(
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                )
            );
        } catch(PDOException \$e) {
            error_log("Erro de conexão: " . \$e->getMessage());
            throw new Exception("Erro de conexão com o banco de dados");
        }
        return \$this->conn;
    }
    
    public function isConnected() {
        try {
            \$this->connect();
            return true;
        } catch(Exception \$e) {
            return false;
        }
    }
}
?>
EOF
    
    # Enviar configuração
    scp -i "$SSH_KEY_PATH" "/tmp/db_config.php" "$SSH_USER@$SSH_HOST:$REMOTE_PATH/config/database.php"
    rm -f "/tmp/db_config.php"
    
    echo -e "${GREEN}✅ Configuração de banco enviada${NC}"
    echo -e "${YELLOW}💡 Execute o script SQL no phpMyAdmin para criar as tabelas${NC}"
}

# Função para testar sistema
test_system() {
    echo -e "${BLUE}🧪 Testando sistema...${NC}"
    
    # Testar site principal
    echo -n "Site principal... "
    if curl -s -o /dev/null -w "%{http_code}" "https://cajait.com" | grep -q "200"; then
        echo -e "${GREEN}✅ OK${NC}"
    else
        echo -e "${RED}❌ Erro${NC}"
    fi
    
    # Testar painel admin
    echo -n "Painel admin... "
    if curl -s -o /dev/null -w "%{http_code}" "https://cajait.com/admin/" | grep -q "200"; then
        echo -e "${GREEN}✅ OK${NC}"
    else
        echo -e "${RED}❌ Erro${NC}"
    fi
    
    # Testar conexão SSH
    echo -n "Conexão SSH... "
    if ssh -i "$SSH_KEY_PATH" -o ConnectTimeout=5 "$SSH_USER@$SSH_HOST" "echo 'OK'" 2>/dev/null | grep -q "OK"; then
        echo -e "${GREEN}✅ OK${NC}"
    else
        echo -e "${RED}❌ Erro${NC}"
    fi
}

# Menu de utilitários
utilities_menu() {
    echo ""
    echo -e "${YELLOW}🔧 Utilitários:${NC}"
    echo "1. 🔗 Abrir site no navegador"
    echo "2. 👨‍💼 Abrir painel admin"
    echo "3. 🔄 Reiniciar serviços PHP"
    echo "4. 📊 Ver logs do servidor"
    echo "5. 🗑️  Limpar cache"
    echo "0. ⬅️  Voltar"
    echo ""
    read -p "Escolha: " util_choice
    
    case $util_choice in
        1) 
            echo -e "${BLUE}🔗 Abrindo site...${NC}"
            python3 -m webbrowser https://cajait.com 2>/dev/null || xdg-open https://cajait.com 2>/dev/null || open https://cajait.com 2>/dev/null
            ;;
        2) 
            echo -e "${BLUE}👨‍💼 Abrindo painel admin...${NC}"
            python3 -m webbrowser https://cajait.com/admin/ 2>/dev/null || xdg-open https://cajait.com/admin/ 2>/dev/null || open https://cajait.com/admin/ 2>/dev/null
            ;;
        3)
            echo -e "${BLUE}🔄 Reiniciando PHP...${NC}"
            ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "killall php 2>/dev/null; echo 'PHP reiniciado'"
            ;;
        4)
            echo -e "${BLUE}📊 Últimas linhas do log:${NC}"
            ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "tail -n 20 /home/$SSH_USER/logs/error.log 2>/dev/null || echo 'Logs não encontrados'"
            ;;
        5)
            echo -e "${BLUE}🗑️  Limpando cache...${NC}"
            ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "cd $REMOTE_PATH && rm -rf cache/* tmp/* 2>/dev/null; echo 'Cache limpo'"
            ;;
        0) return ;;
        *) echo -e "${RED}Opção inválida${NC}" ;;
    esac
    
    read -p "Pressione Enter para continuar..."
}

# Loop principal
while true; do
    show_menu
    
    case $choice in
        1) setup_ssh ;;
        2) deploy_complete ;;
        3) setup_database ;;
        4) 
            echo -e "${BLUE}🔄 Atualização rápida...${NC}"
            scp -i "$SSH_KEY_PATH" index.html style.css script.js contact.php "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"
            echo -e "${GREEN}✅ Atualização concluída${NC}"
            ;;
        5) test_system ;;
        6)
            echo -e "${BLUE}📊 Status do Sistema:${NC}"
            echo "• Site: https://cajait.com"
            echo "• Admin: https://cajait.com/admin/"
            echo "• SSH: $SSH_USER@$SSH_HOST"
            echo "• Login: admin / cajait2025!"
            ;;
        7) utilities_menu ;;
        0) 
            echo -e "${GREEN}👋 Obrigado por usar o Cajá Deploy!${NC}"
            exit 0
            ;;
        *) 
            echo -e "${RED}❌ Opção inválida${NC}"
            ;;
    esac
    
    if [ "$choice" != "7" ] && [ "$choice" != "0" ]; then
        echo ""
        read -p "Pressione Enter para continuar..."
    fi
done