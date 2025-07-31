<?php
// Configuração do Banco de Dados - Hostinger
// Configurado automaticamente para sitecaja

class Database {
    // Configurações do banco - Conectando com sitecaja
    private $host = 'localhost';
    private $db_name = 'sitecaja';
    private $username = 'andressa';
    private $password = '-Aa200200229*';
    
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