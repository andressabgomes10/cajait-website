# API Contracts - Cajá Website

## Backend Implementation Requirements

### Email Configuration
- **Recipient Email**: andressa@cajait.com
- **SMTP Configuration**: Will need SMTP credentials for email sending

### Contact Form API

#### Endpoint: POST /api/contact
**Purpose**: Receive contact form submissions and send emails

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "company": "string (optional)",
  "service": "string (optional)",
  "message": "string (required)"
}
```

**Response Success (200)**:
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

**Response Error (400/500)**:
```json
{
  "success": false,
  "message": "Erro ao enviar mensagem. Tente novamente."
}
```

### Email Template
**Subject**: "Nova mensagem do site - {name}"

**Body Template**:
```
Nova mensagem recebida pelo site da Cajá:

Nome: {name}
Email: {email}
Empresa: {company}
Serviço de interesse: {service}

Mensagem:
{message}

---
Enviado em: {timestamp}
```

### Frontend Integration
- Remove mock functionality from Contact.jsx
- Update handleSubmit to call real API endpoint
- Use axios to make POST request to /api/contact
- Handle real success/error responses

### Environment Variables Needed
- SMTP_HOST
- SMTP_PORT  
- SMTP_USERNAME
- SMTP_PASSWORD
- RECIPIENT_EMAIL=andressa@cajait.com

### Database Storage (Optional)
- Store contact form submissions in MongoDB for backup
- Collection: contact_submissions
- Fields: name, email, company, service, message, timestamp, email_sent

### Implementation Steps
1. Install email dependencies (smtplib is built-in)
2. Create contact form model
3. Implement email sending service
4. Create API endpoint
5. Update frontend to use real API
6. Test email delivery

### Error Handling
- Validate email format
- Handle SMTP connection errors
- Log failed email attempts
- Return appropriate error messages