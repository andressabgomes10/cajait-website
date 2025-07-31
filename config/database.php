<?php
// Configuração do Banco de Dados - Hostinger
// IMPORTANTE: Após criar o banco no Hostinger, atualize essas informações

class Database {
    // Configurações do banco - ALTERE APÓS CRIAR NO HOSTINGER
    private $host = 'localhost';
    private $db_name = 'u921347543_cajait_db';  // Substitua pelo nome do seu banco
    private $username = 'u921347543_cajait';     // Substitua pelo seu usuário MySQL
    private $password = 'SuaSenhaAqui123!';      // Substitua pela sua senha MySQL
    
    private $conn;
    
    public function connect() {
        $this->conn = null;
        
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8",
                $this->username,
                $this->password,
                array(
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                )
            );
        } catch(PDOException $e) {
            error_log("Erro de conexão: " . $e->getMessage());
            throw new Exception("Erro de conexão com o banco de dados");
        }
        
        return $this->conn;
    }
    
    public function isConnected() {
        try {
            $this->connect();
            return true;
        } catch(Exception $e) {
            return false;
        }
    }
}
?>