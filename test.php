<?php
// Teste simples do PHP
echo json_encode([
    'status' => 'OK',
    'php_version' => phpversion(),
    'server_time' => date('Y-m-d H:i:s'),
    'post_max_size' => ini_get('post_max_size'),
    'mail_function' => function_exists('mail') ? 'Available' : 'Not Available'
]);
?>