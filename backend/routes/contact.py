from fastapi import APIRouter, HTTPException, BackgroundTasks
from motor.motor_asyncio import AsyncIOMotorDatabase
import logging
from models.contact import ContactFormRequest, ContactFormResponse, ContactFormSubmission
from services.email_service import EmailService

logger = logging.getLogger(__name__)

def create_contact_router(db: AsyncIOMotorDatabase) -> APIRouter:
    router = APIRouter()
    email_service = EmailService()
    
    @router.post("/contact", response_model=ContactFormResponse)
    async def submit_contact_form(
        form_data: ContactFormRequest,
        background_tasks: BackgroundTasks
    ):
        """
        Handle contact form submission
        """
        try:
            # Create submission record
            submission = ContactFormSubmission(**form_data.dict())
            
            # Save to database first (for backup)
            try:
                await db.contact_submissions.insert_one(submission.dict())
                logger.info(f"Contact form submission saved to database: {submission.id}")
            except Exception as db_error:
                logger.error(f"Failed to save to database: {str(db_error)}")
                # Continue even if DB save fails
            
            # Send email in background
            email_sent = email_service.send_contact_form_email(form_data.dict())
            
            if email_sent:
                # Update database record
                try:
                    await db.contact_submissions.update_one(
                        {"id": submission.id},
                        {"$set": {"email_sent": True}}
                    )
                except Exception as update_error:
                    logger.error(f"Failed to update email_sent status: {str(update_error)}")
                
                return ContactFormResponse(
                    success=True,
                    message="Mensagem enviada com sucesso! Entraremos em contato em breve."
                )
            else:
                raise HTTPException(
                    status_code=500,
                    detail="Erro ao enviar email. Tente novamente ou entre em contato diretamente."
                )
                
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Contact form submission error: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail="Erro interno do servidor. Tente novamente."
            )
    
    @router.get("/contact/test")
    async def test_email_config():
        """
        Test email configuration (for development)
        """
        try:
            connection_ok = email_service.test_connection()
            return {
                "smtp_configured": bool(email_service.smtp_username and email_service.smtp_password),
                "connection_test": connection_ok,
                "recipient": email_service.recipient_email
            }
        except Exception as e:
            logger.error(f"Email config test error: {str(e)}")
            return {
                "smtp_configured": False,
                "connection_test": False,
                "error": str(e)
            }
    
    return router