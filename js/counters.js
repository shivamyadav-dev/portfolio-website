// ========================================
// Animated Counter Statistics with '+' Sign Animation
// ========================================

class CounterAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    this.animateCounter(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Observe all stat values
        document.querySelectorAll('.stat-value').forEach(stat => {
            this.observer.observe(stat);
        });
    }
    
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        if (isNaN(target)) return;
        
        // Find the container (stat-value-container) and check for plus sign
        const container = element.parentElement;
        let plusSign = container.querySelector('.stat-plus');
        
        // Create plus sign if it doesn't exist
        if (!plusSign) {
            plusSign = document.createElement('span');
            plusSign.className = 'stat-plus';
            plusSign.textContent = '+';
            container.appendChild(plusSign);
        }
        
        // Reset plus sign to hidden state
        plusSign.style.opacity = '0';
        plusSign.style.transform = 'scale(0) translateY(-10px)';
        plusSign.classList.remove('animate-in');
        
        const duration = 2000; // 2 seconds for count-up
        const steps = 60; // 60-step increment for smoother animation
        
        // Use easing function for more natural animation
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        
        let current = 0;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            
            current = Math.floor(target * easedProgress);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Animation complete - ensure final value
                element.textContent = target;
                
                // Animate '+' sign appearance with delay for smooth effect
                setTimeout(() => {
                    this.animatePlusSign(plusSign);
                }, 250); // Small delay after number completes for better UX
            }
        };
        
        animate();
    }
    
    animatePlusSign(plusElement) {
        // Trigger animation with requestAnimationFrame for smooth rendering
        requestAnimationFrame(() => {
            // Add animation class to trigger CSS transition
            plusElement.classList.add('animate-in');
            
            // Force a reflow to ensure the transition is applied
            plusElement.offsetHeight;
            
            // Apply final state
            plusElement.style.opacity = '1';
            plusElement.style.transform = 'scale(1) translateY(0)';
            
            // Add a subtle pulse effect after the initial animation
            setTimeout(() => {
                plusElement.style.animation = 'pulseGlow 1s ease-in-out';
            }, 500);
        });
    }
    
    // Method to observe new counters dynamically added
    observeNewCounter(element) {
        this.observer.observe(element);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.counterAnimations = new CounterAnimations();
});
