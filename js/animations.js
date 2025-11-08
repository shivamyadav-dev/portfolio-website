// ========================================
// Scroll Animations - Intersection Observer
// ========================================

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.fadeUpOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        // Fade-up animation observer
        this.fadeUpObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger delay: 0.1-0.15s per item
                    const delay = index % 10 * 0.1;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay * 1000);
                    
                    // Unobserve after animation
                    this.fadeUpObserver.unobserve(entry.target);
                }
            });
        }, this.fadeUpOptions);
        
        // Observe all fade-in elements
        this.observeElements();
        
        // Hero section fade in on load
        this.initHeroAnimation();
        
        // Hero title rotation
        this.initHeroTitleRotation();
    }
    
    observeElements() {
        // Observe sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('fade-in');
            this.fadeUpObserver.observe(section);
        });
        
        // Observe cards and other animated elements
        document.querySelectorAll('.skill-card, .project-card, .cert-card, .stat-card').forEach(card => {
            card.classList.add('fade-in');
            this.fadeUpObserver.observe(card);
        });
    }
    
    initHeroAnimation() {
        window.addEventListener('load', () => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                setTimeout(() => {
                    heroSection.style.opacity = '1';
                    heroSection.style.transform = 'translateY(0)';
                }, 200);
            }
        });
    }
    
    initHeroTitleRotation() {
        const heroTitle = document.getElementById('heroTitle');
        if (!heroTitle || !window.portfolioConfig) return;
        
        const titles = window.portfolioConfig.hero.titles;
        if (!titles || titles.length === 0) return;
        
        let currentTitleIndex = 0;
        heroTitle.textContent = titles[0];
        
        setInterval(() => {
            heroTitle.classList.add('fade-out');
            
            setTimeout(() => {
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;
                heroTitle.textContent = titles[currentTitleIndex];
                heroTitle.classList.remove('fade-out');
            }, 500);
        }, 3500);
    }
    
    // Method to observe new elements dynamically added
    observeNewElement(element) {
        element.classList.add('fade-in');
        this.fadeUpObserver.observe(element);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations();
});

