// ========================================
// Navigation - Scroll Spy and Mobile Menu
// ========================================

class NavbarManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        
        this.init();
    }
    
    init() {
        // Navbar scroll effect
        this.handleScroll();
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        
        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Scroll spy
        this.updateActiveLink();
        window.addEventListener('scroll', () => this.updateActiveLink(), { passive: true });
        
        // Smooth scroll for anchor links
        this.initSmoothScroll();
    }
    
    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
    }
    
    toggleMobileMenu() {
        this.hamburger?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.navMenu?.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    closeMobileMenu() {
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || !href) return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new NavbarManager();
});

