from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

class ContactFormSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(default="", max_length=100)
    service: Optional[str] = Field(default="", max_length=50)
    message: str = Field(..., min_length=10, max_length=1000)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    email_sent: bool = Field(default=False)

class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(default="", max_length=100)
    service: Optional[str] = Field(default="", max_length=50)
    message: str = Field(..., min_length=10, max_length=1000)

class ContactFormResponse(BaseModel):
    success: bool
    message: str