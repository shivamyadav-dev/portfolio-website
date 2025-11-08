// ========================================
// Certificate Modal Viewer
// ========================================

class CertificateModal {
    constructor() {
        this.modal = document.getElementById('certModal');
        this.modalOverlay = this.modal?.querySelector('.modal-overlay');
        this.modalClose = this.modal?.querySelector('.modal-close');
        this.certViewer = document.getElementById('certViewer');
        
        this.init();
    }
    
    init() {
        // Close modal events
        this.modalClose?.addEventListener('click', () => this.close());
        this.modalOverlay?.addEventListener('click', () => this.close());
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.close();
            }
        });
        
        // Initialize certificate card clicks
        this.initCertClicks();
    }
    
    initCertClicks() {
        // Use event delegation for dynamically loaded certificates
        document.addEventListener('click', (e) => {
            const certCard = e.target.closest('.cert-card');
            if (!certCard) return;
            
            const certName = certCard.querySelector('.cert-name')?.textContent?.trim();
            if (!certName) return;
            
            const certConfig = this.findCertConfig(certName);
            if (certConfig && certConfig.pdfUrl) {
                this.open(certConfig.pdfUrl);
            }
        });
    }
    
    findCertConfig(certName) {
        if (!window.portfolioConfig || !window.portfolioConfig.certifications) {
            return null;
        }
        
        return window.portfolioConfig.certifications.find(
            cert => cert.name === certName
        );
    }
    
    open(pdfUrl) {
        if (!this.modal || !this.certViewer) return;
        
        this.certViewer.src = pdfUrl;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        if (!this.modal) return;
        
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear iframe source after animation
        setTimeout(() => {
            if (this.certViewer) {
                this.certViewer.src = '';
            }
        }, 300);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.certificateModal = new CertificateModal();
});

