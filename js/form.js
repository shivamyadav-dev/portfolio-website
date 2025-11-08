// ========================================
// Contact Form Validation and EmailJS
// ========================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.formMessage = document.getElementById('formMessage');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.nameError = document.getElementById('nameError');
        this.emailError = document.getElementById('emailError');
        this.messageError = document.getElementById('messageError');
        
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        this.nameInput?.addEventListener('blur', () => this.validateName());
        this.emailInput?.addEventListener('blur', () => this.validateEmail());
        this.messageInput?.addEventListener('blur', () => this.validateMessage());
        
        // Clear errors on input
        this.nameInput?.addEventListener('input', () => this.clearError(this.nameError));
        this.emailInput?.addEventListener('input', () => this.clearError(this.emailError));
        this.messageInput?.addEventListener('input', () => this.clearError(this.messageError));
    }
    
    validateName() {
        const name = this.nameInput?.value.trim();
        if (!name || name.length < 2) {
            this.showError(this.nameError, 'Name must be at least 2 characters');
            return false;
        }
        this.clearError(this.nameError);
        return true;
    }
    
    validateEmail() {
        const email = this.emailInput?.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email || !emailRegex.test(email)) {
            this.showError(this.emailError, 'Please enter a valid email address');
            return false;
        }
        this.clearError(this.emailError);
        return true;
    }
    
    validateMessage() {
        const message = this.messageInput?.value.trim();
        if (!message || message.length < 10) {
            this.showError(this.messageError, 'Message must be at least 10 characters');
            return false;
        }
        this.clearError(this.messageError);
        return true;
    }
    
    validateForm() {
        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();
        const isMessageValid = this.validateMessage();
        
        return isNameValid && isEmailValid && isMessageValid;
    }
    
    showError(errorElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
    
    clearError(errorElement) {
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';
        
        const formData = {
            name: this.nameInput.value,
            email: this.emailInput.value,
            message: this.messageInput.value
        };
        
        try {
            // Check if EmailJS is configured
            if (window.portfolioConfig?.emailjs?.serviceId && 
                window.portfolioConfig.emailjs.serviceId !== 'YOUR_SERVICE_ID' &&
                typeof emailjs !== 'undefined') {
                
                await this.sendViaEmailJS(formData);
            } else {
                // Fallback to mailto
                this.sendViaMailto(formData);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            this.showFormMessage('Error sending message. Please try again or use the email link above.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
    
    async sendViaEmailJS(formData) {
        const config = window.portfolioConfig.emailjs;
        
        emailjs.init(config.publicKey);
        
        await emailjs.send(
            config.serviceId,
            config.templateId,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: window.portfolioConfig.email
            }
        );
        
        this.showFormMessage('Message sent successfully!', 'success');
        this.form.reset();
    }
    
    sendViaMailto(formData) {
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        const mailtoLink = `mailto:${window.portfolioConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        this.showFormMessage('Opening your email client...', 'success');
    }
    
    showFormMessage(message, type) {
        if (!this.formMessage) return;
        
        this.formMessage.textContent = message;
        this.formMessage.className = `form-message ${type}`;
        
        setTimeout(() => {
            this.formMessage.textContent = '';
            this.formMessage.className = 'form-message';
        }, 5000);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});

