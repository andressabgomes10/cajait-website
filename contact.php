<?php
// Configurações de SMTP para Hostinger
$smtp_host = 'smtp.hostinger.com';
$smtp_port = 587;
$smtp_username = 'andressa@cajait.com';
$smtp_password = 'Aa200200229*';
$recipient_email = 'andressa@cajait.com';

// Configurar cabeçalhos para JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

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

// Usar PHPMailer se disponível, senão usar mail() nativo
if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    // PHPMailer (recomendado)
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    try {
        $mail = new PHPMailer(true);
        
        // Configuração SMTP
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_username;
        $mail->Password = $smtp_password;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $smtp_port;
        $mail->CharSet = 'UTF-8';
        
        // Configurar remetente e destinatário
        $mail->setFrom($smtp_username, 'Site Cajá');
        $mail->addAddress($recipient_email, 'Andressa - Cajá');
        $mail->addReplyTo($email, $name);
        
        // Conteúdo do email
        $mail->isHTML(false);
        $mail->Subject = $email_subject;
        $mail->Body = $email_body;
        
        // Enviar email
        $mail->send();
        
        echo json_encode([
            'success' => true, 
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        ]);
        
    } catch (Exception $e) {
        error_log("Erro PHPMailer: " . $e->getMessage());
        echo json_encode([
            'success' => false, 
            'message' => 'Erro ao enviar email. Tente novamente ou entre em contato diretamente.'
        ]);
    }
} else {
    // Mail nativo do PHP (fallback)
    $headers = "From: Site Cajá <" . $smtp_username . ">\r\n";
    $headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    if (mail($recipient_email, $email_subject, $email_body, $headers)) {
        echo json_encode([
            'success' => true, 
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        ]);
    } else {
        error_log("Erro mail(): Falha ao enviar email");
        echo json_encode([
            'success' => false, 
            'message' => 'Erro ao enviar email. Tente novamente ou entre em contato diretamente.'
        ]);
    }
}

// Log da submissão (opcional)
$log_entry = date('Y-m-d H:i:s') . " - Contato de: " . $name . " (" . $email . ")\n";
file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
?>