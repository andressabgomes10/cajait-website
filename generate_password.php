<?php
// Script para gerar senha criptografada para o usuário admin
// Execute este arquivo uma vez para gerar a senha

$senha = 'cajait2025!';
$senha_criptografada = password_hash($senha, PASSWORD_DEFAULT);

echo "Senha original: " . $senha . "\n";
echo "Senha criptografada: " . $senha_criptografada . "\n\n";

echo "Execute este SQL no seu banco de dados:\n\n";
echo "UPDATE usuarios_admin SET password = '$senha_criptografada' WHERE username = 'admin';\n\n";

echo "Ou use este INSERT completo:\n\n";
echo "INSERT INTO usuarios_admin (username, password, nome_completo, email) VALUES \n";
echo "('admin', '$senha_criptografada', 'Administrador Cajá', 'andressa@cajait.com')\n";
echo "ON DUPLICATE KEY UPDATE password = VALUES(password);\n";
?>