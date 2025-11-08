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
            // Prefer Web3Forms if configured
            const web3formsConfig = window.portfolioConfig?.web3forms;
            const hasWeb3Forms = web3formsConfig?.accessKey && web3formsConfig.accessKey !== 'YOUR_ACCESS_KEY';

            if (hasWeb3Forms) {
                await this.sendViaWeb3Forms(formData);
            } else {
                // Check if EmailJS is configured
                const emailjsConfig = window.portfolioConfig?.emailjs;
                const isEmailJSConfigured = 
                    emailjsConfig?.serviceId && 
                    emailjsConfig?.templateId && 
                    emailjsConfig?.publicKey && 
                    typeof emailjs !== 'undefined';
                
                if (isEmailJSConfigured) {
                    await this.sendViaEmailJS(formData);
                } else {
                    // Fallback to mailto when neither Web3Forms nor EmailJS is configured
                    this.sendViaMailto(formData);
                }
            }
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Provide more helpful error messages
            let errorMessage = 'Error sending message. ';
            
            if (error?.text) {
                // EmailJS specific error
                errorMessage += `EmailJS Error: ${error.text}. `;
            } else if (error?.message) {
                // General error with message
                errorMessage += `Error: ${error.message} `;
            }
            
            errorMessage += `Please check your EmailJS template configuration in the dashboard, or email me directly at ${window.portfolioConfig.email}`;
            
            this.showFormMessage(errorMessage, 'error');
            
            // Also log to console for debugging
            console.error('Full error object:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
    
    async sendViaEmailJS(formData) {
        const config = window.portfolioConfig.emailjs;
        const recipientEmail = window.portfolioConfig.email;
        
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
        
        // Prepare template parameters - these must match your EmailJS template variables
        const templateParams = {
            to_name: window.portfolioConfig.name, // Your name
            to_email: recipientEmail, // Your email address
            from_name: formData.name, // Sender's name
            from_email: formData.email, // Sender's email
            message: formData.message, // Message content
            reply_to: formData.email, // Reply-to email
            subject: `Portfolio Contact: Message from ${formData.name}`, // Email subject
            user_email: formData.email, // Alternative variable name
            user_name: formData.name, // Alternative variable name
            user_message: formData.message // Alternative variable name
        };
        
        // Log for debugging
        console.log('Sending email via EmailJS:', {
            serviceId: config.serviceId,
            templateId: config.templateId,
            recipient: recipientEmail,
            templateParams: templateParams
        });
        
        // Send email via EmailJS
        try {
            const response = await emailjs.send(
                config.serviceId,
                config.templateId,
                templateParams
            );
            
            // Check if send was successful
            if (response.status === 200 || response.status === 201) {
                console.log('Email sent successfully:', response);
                this.showFormMessage(
                    'Message sent successfully!', 
                    'success'
                );
                this.form.reset();
            } else {
                throw new Error(`Email service returned status: ${response.status}`);
            }
        } catch (sendError) {
            console.error('EmailJS send error details:', {
                error: sendError,
                status: sendError.status,
                text: sendError.text,
                message: sendError.message
            });
            
            // Provide more detailed error information
            let errorMessage = 'Failed to send email. ';
            if (sendError.text) {
                errorMessage += `Error: ${sendError.text}. `;
            }
            errorMessage += `Please check your EmailJS template configuration or email me directly at ${recipientEmail}`;
            
            throw new Error(errorMessage);
        }
    }
    
    async sendViaWeb3Forms(formData) {
        const accessKey = window.portfolioConfig?.web3forms?.accessKey;
        if (!accessKey || accessKey === 'YOUR_ACCESS_KEY') {
            throw new Error('Web3Forms access key is missing');
        }

        const payload = {
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact: Message from ${formData.name}`
        };

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (data.success) {
            this.showFormMessage('Message sent successfully!', 'success');
            this.form.reset();
        } else {
            throw new Error(data.message || 'Failed to send via Web3Forms');
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

