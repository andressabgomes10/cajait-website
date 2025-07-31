<?php
// Configurações de email para Hostinger
$recipient_email = 'andressa@cajait.com';

// Configurar cabeçalhos para JSON
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Log de debug
error_log("Contact form accessed. Method: " . $_SERVER['REQUEST_METHOD']);

// Verificar se é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Função para sanitizar dados
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Validar e sanitizar dados
$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$company = isset($_POST['company']) ? sanitize_input($_POST['company']) : '';
$service = isset($_POST['service']) ? sanitize_input($_POST['service']) : '';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Log dos dados recebidos
error_log("Form data received: name=$name, email=$email");

// Validações
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Nome é obrigatório e deve ter pelo menos 2 caracteres';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email válido é obrigatório';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Mensagem é obrigatória e deve ter pelo menos 10 caracteres';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Mapear serviços
$service_names = [
    'mvp' => 'MVP Rápido',
    'software' => 'Software Personalizado',
    'gestao' => 'Gestão de Produtos Digitais',
    'treinamento' => 'Treinamentos Práticos',
    'consultoria' => 'Consultoria'
];

$service_display = isset($service_names[$service]) ? $service_names[$service] : ($service ?: 'Não especificado');
$company_display = $company ?: 'Não informado';

// Criar corpo do email
$email_subject = "Nova mensagem do site - " . $name;
$email_body = "Nova mensagem recebida pelo site da Cajá:\n\n";
$email_body .= "Nome: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Empresa: " . $company_display . "\n";
$email_body .= "Serviço de interesse: " . $service_display . "\n\n";
$email_body .= "Mensagem:\n" . $message . "\n\n";
$email_body .= "---\n";
$email_body .= "Enviado em: " . date('d/m/Y \à\s H:i:s') . "\n";
$email_body .= "IP do visitante: " . $_SERVER['REMOTE_ADDR'] . "\n\n";
$email_body .= "Esta mensagem foi enviada através do formulário de contato do site cajait.com";

// Configurar headers do email
$headers = "From: Site Cajá <noreply@cajait.com>\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Tentar enviar email
$email_sent = false;
try {
    $email_sent = mail($recipient_email, $email_subject, $email_body, $headers);
    error_log("Email send attempt: " . ($email_sent ? 'SUCCESS' : 'FAILED'));
} catch (Exception $e) {
    error_log("Email error: " . $e->getMessage());
}

if ($email_sent) {
    // Log da submissão (opcional)
    $log_entry = date('Y-m-d H:i:s') . " - Contato de: " . $name . " (" . $email . ") - EMAIL ENVIADO\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    ]);
} else {
    // Log do erro
    $log_entry = date('Y-m-d H:i:s') . " - Contato de: " . $name . " (" . $email . ") - ERRO NO ENVIO\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => false, 
        'message' => 'Erro ao enviar email. Sua mensagem foi registrada, entraremos em contato em breve.'
    ]);
}
?>