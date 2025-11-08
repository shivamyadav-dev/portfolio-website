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
            // Check if EmailJS is fully configured
            const emailjsConfig = window.portfolioConfig?.emailjs;
            const isEmailJSConfigured = 
                emailjsConfig?.serviceId && 
                emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' &&
                emailjsConfig?.templateId && 
                emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
                emailjsConfig?.publicKey && 
                emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY' &&
                typeof emailjs !== 'undefined';
            
            if (isEmailJSConfigured) {
                await this.sendViaEmailJS(formData);
            } else {
                // Fallback to mailto when EmailJS is not fully configured
                this.sendViaMailto(formData);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Provide more helpful error messages
            let errorMessage = 'Error sending message. Please try again or use the email link above.';
            
            if (error?.text) {
                // EmailJS specific error
                errorMessage = `Email service error: ${error.text}. Please use the email link above.`;
            } else if (error?.message) {
                // General error with message
                errorMessage = `Error: ${error.message}. Please use the email link above.`;
            }
            
            this.showFormMessage(errorMessage, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
    
    async sendViaEmailJS(formData) {
        const config = window.portfolioConfig.emailjs;
        
        // Validate EmailJS configuration
        if (!config.serviceId || !config.templateId || !config.publicKey) {
            throw new Error('EmailJS configuration is incomplete');
        }
        
        // Initialize EmailJS
        try {
            emailjs.init(config.publicKey);
        } catch (initError) {
            console.error('EmailJS initialization error:', initError);
            throw new Error('Failed to initialize email service');
        }
        
        // Send email via EmailJS
        try {
            const response = await emailjs.send(
                config.serviceId,
                config.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: window.portfolioConfig.email,
                    reply_to: formData.email
                }
            );
            
            // Check if send was successful
            if (response.status === 200) {
                this.showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.form.reset();
            } else {
                throw new Error(`Email service returned status: ${response.status}`);
            }
        } catch (sendError) {
            console.error('EmailJS send error:', sendError);
            // Re-throw with more context
            throw new Error(sendError.text || sendError.message || 'Failed to send email');
        }
    }
    
    sendViaMailto(formData) {
        try {
            const subject = `Portfolio Contact from ${formData.name}`;
            const body = `${formData.message}\n\nFrom: ${formData.email}`;
            const mailtoLink = `mailto:${window.portfolioConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Try to open mailto link
            window.location.href = mailtoLink;
            
            // Show success message
            this.showFormMessage('Opening your email client... If it doesn\'t open, please email me directly at ' + window.portfolioConfig.email, 'success');
            
            // Reset form after a delay
            setTimeout(() => {
                this.form.reset();
            }, 1000);
        } catch (error) {
            console.error('Mailto error:', error);
            // Fallback: show email address
            this.showFormMessage(`Please email me directly at: ${window.portfolioConfig.email}`, 'error');
        }
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

