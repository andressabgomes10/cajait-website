import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_host = os.environ.get('SMTP_HOST', 'smtp.hostinger.com')
        self.smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        self.smtp_username = os.environ.get('SMTP_USERNAME', '')
        self.smtp_password = os.environ.get('SMTP_PASSWORD', '')
        self.recipient_email = os.environ.get('RECIPIENT_EMAIL', 'andressa@cajait.com')
        
    def send_contact_form_email(self, form_data: Dict[str, Any]) -> bool:
        """
        Send contact form email to Cajá team
        """
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.smtp_username
            msg['To'] = self.recipient_email
            msg['Subject'] = f"Nova mensagem do site - {form_data['name']}"
            
            # Create email body
            body = self._create_email_body(form_data)
            msg.attach(MIMEText(body, 'plain', 'utf-8'))
            
            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
                server.send_message(msg)
                
            logger.info(f"Contact form email sent successfully to {self.recipient_email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send contact form email: {str(e)}")
            return False
    
    def _create_email_body(self, form_data: Dict[str, Any]) -> str:
        """
        Create formatted email body from form data
        """
        service_mapping = {
            'mvp': 'MVP Rápido',
            'software': 'Software Personalizado',
            'gestao': 'Gestão de Produtos Digitais',
            'treinamento': 'Treinamentos Práticos',
            'consultoria': 'Consultoria'
        }
        
        service_display = service_mapping.get(form_data.get('service', ''), form_data.get('service', 'Não especificado'))
        company_display = form_data.get('company', 'Não informado')
        
        timestamp = datetime.now().strftime('%d/%m/%Y às %H:%M:%S')
        
        body = f"""Nova mensagem recebida pelo site da Cajá:

Nome: {form_data['name']}
Email: {form_data['email']}
Empresa: {company_display}
Serviço de interesse: {service_display}

Mensagem:
{form_data['message']}

---
Enviado em: {timestamp}
IP do visitante: (disponível nos logs do servidor)

Esta mensagem foi enviada através do formulário de contato do site cajait.com
"""
        return body
    
    def test_connection(self) -> bool:
        """
        Test SMTP connection
        """
        try:
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
            return True
        except Exception as e:
            logger.error(f"SMTP connection test failed: {str(e)}")
            return False