#!/bin/bash

# 🗄️ Script de Configuração Automática do Banco - Cajá
# Conecta via SSH e configura o banco de dados automaticamente

# Configurações
SSH_USER="u921347543"
SSH_HOST="br-asc-web1845.main-hosting.eu"
SSH_KEY_PATH="~/.ssh/cajait_hostinger"
REMOTE_PATH="/home/u921347543/public_html"

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🗄️  Configuração Automática do Banco de Dados${NC}"
echo "============================================="

# Solicitar informações do banco
echo -e "${YELLOW}📝 Informe os dados do seu banco MySQL:${NC}"
read -p "Nome do banco de dados: " DB_NAME
read -p "Usuário MySQL: " DB_USER
read -s -p "Senha MySQL: " DB_PASS
echo ""

if [ -z "$DB_NAME" ] || [ -z "$DB_USER" ] || [ -z "$DB_PASS" ]; then
    echo -e "${RED}❌ Todos os campos são obrigatórios${NC}"
    exit 1
fi

# Criar arquivo de configuração temporário
echo -e "${BLUE}⚙️  Criando configuração do banco...${NC}"
cat > "/tmp/database_config.php" << EOF
<?php
// Configuração do Banco de Dados - Hostinger
// IMPORTANTE: Após criar o banco no Hostinger, atualize essas informações

class Database {
    // Configurações do banco - ALTERE APÓS CRIAR NO HOSTINGER
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

# Enviar arquivo de configuração
echo -e "${BLUE}📤 Enviando configuração para o servidor...${NC}"
scp -i "$SSH_KEY_PATH" "/tmp/database_config.php" "$SSH_USER@$SSH_HOST:$REMOTE_PATH/config/database.php"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Configuração enviada com sucesso${NC}"
else
    echo -e "${RED}❌ Erro ao enviar configuração${NC}"
    exit 1
fi

# Testar conexão com banco
echo -e "${BLUE}🧪 Testando conexão com o banco...${NC}"
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "
cd $REMOTE_PATH
php -r \"
require_once 'config/database.php';
try {
    \\\$db = new Database();
    \\\$conn = \\\$db->connect();
    echo 'Conexão com banco estabelecida com sucesso!';
} catch(Exception \\\$e) {
    echo 'Erro de conexão: ' . \\\$e->getMessage();
    exit(1);
}
\"
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Conexão com banco funcionando!${NC}"
else
    echo -e "${RED}❌ Erro na conexão com o banco${NC}"
    echo -e "${YELLOW}💡 Verifique se o banco foi criado no painel do Hostinger${NC}"
fi

# Criar script SQL para execução automática
echo -e "${BLUE}📋 Gerando script SQL...${NC}"
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" "
cd $REMOTE_PATH
cat > database_setup.sql << 'EOSQL'
-- Script de Criação das Tabelas - Site Cajá
-- Execute este script no phpMyAdmin do Hostinger após criar o banco

-- 1. Tabela para armazenar mensagens de contato
CREATE TABLE IF NOT EXISTS \`contatos\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`nome\` varchar(100) NOT NULL,
    \`email\` varchar(150) NOT NULL,
    \`empresa\` varchar(100) DEFAULT NULL,
    \`servico\` varchar(50) DEFAULT NULL,
    \`mensagem\` text NOT NULL,
    \`ip_address\` varchar(45) DEFAULT NULL,
    \`user_agent\` text DEFAULT NULL,
    \`status\` enum('novo','lido','respondido') DEFAULT 'novo',
    \`data_criacao\` timestamp DEFAULT CURRENT_TIMESTAMP,
    \`data_atualizacao\` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (\`id\`),
    KEY \`idx_email\` (\`email\`),
    KEY \`idx_status\` (\`status\`),
    KEY \`idx_data_criacao\` (\`data_criacao\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Tabela para usuários administrativos
CREATE TABLE IF NOT EXISTS \`usuarios_admin\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`username\` varchar(50) NOT NULL UNIQUE,
    \`password\` varchar(255) NOT NULL,
    \`nome_completo\` varchar(100) NOT NULL,
    \`email\` varchar(150) NOT NULL,
    \`ultimo_acesso\` timestamp NULL DEFAULT NULL,
    \`ativo\` tinyint(1) DEFAULT 1,
    \`data_criacao\` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`unique_username\` (\`username\`),
    UNIQUE KEY \`unique_email\` (\`email\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Inserir usuário administrativo padrão
INSERT INTO \`usuarios_admin\` (\`username\`, \`password\`, \`nome_completo\`, \`email\`) 
VALUES ('admin', '\$2y\$10\$dFVgrdQjG2tCJlFg7h6kd.RVoZFCwF3k/c216JVxwuB/TFaTFeB8q', 'Administrador Cajá', 'andressa@cajait.com')
ON DUPLICATE KEY UPDATE password = VALUES(password);

-- 4. Tabela para estatísticas e métricas
CREATE TABLE IF NOT EXISTS \`estatisticas\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`data_evento\` date NOT NULL,
    \`tipo_evento\` varchar(50) NOT NULL,
    \`valor\` int(11) DEFAULT 1,
    \`detalhes\` json DEFAULT NULL,
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`unique_data_tipo\` (\`data_evento\`, \`tipo_evento\`),
    KEY \`idx_data_evento\` (\`data_evento\`),
    KEY \`idx_tipo_evento\` (\`tipo_evento\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Tabela para configurações do sistema
CREATE TABLE IF NOT EXISTS \`configuracoes\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`chave\` varchar(100) NOT NULL UNIQUE,
    \`valor\` text NOT NULL,
    \`descricao\` varchar(255) DEFAULT NULL,
    \`data_atualizacao\` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`unique_chave\` (\`chave\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Inserir configurações padrão
INSERT INTO \`configuracoes\` (\`chave\`, \`valor\`, \`descricao\`) VALUES
('email_destinatario', 'andressa@cajait.com', 'Email principal para receber mensagens'),
('email_remetente', 'noreply@cajait.com', 'Email remetente do sistema'),
('site_titulo', 'Cajá - Tecnologia Artesanal', 'Título do site'),
('site_descricao', 'Transforme ideias em produtos digitais únicos', 'Descrição do site'),
('notificacoes_email', '1', 'Enviar notificações por email (1=sim, 0=não)')
ON DUPLICATE KEY UPDATE valor = VALUES(valor);

-- Verificar se as tabelas foram criadas
SHOW TABLES;
EOSQL
"

# Limpar arquivo temporário
rm -f "/tmp/database_config.php"

echo ""
echo -e "${GREEN}🎉 Configuração do banco concluída!${NC}"
echo "===================================="
echo -e "${BLUE}📋 Próximos passos:${NC}"
echo "1. Acesse phpMyAdmin no painel do Hostinger"
echo "2. Selecione o banco '$DB_NAME'"
echo "3. Execute o arquivo 'database_setup.sql' que foi criado no servidor"
echo "4. Teste o login no painel: https://cajait.com/admin/"
echo ""
echo -e "${YELLOW}🔑 Credenciais do painel admin:${NC}"
echo "• Usuário: admin"
echo "• Senha: cajait2025!"
echo ""
echo -e "${GREEN}✨ Sistema de banco configurado com sucesso!${NC}"