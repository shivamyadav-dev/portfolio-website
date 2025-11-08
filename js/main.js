// ========================================
// Main Initialization and Data Loading
// ========================================

// Make portfolioConfig globally available
window.portfolioConfig = portfolioConfig;

// ========================================
// Load Skills Dynamically
// ========================================

function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid || !window.portfolioConfig) return;
    
    window.portfolioConfig.skills.forEach((skillGroup, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        skillCard.style.transitionDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <h3 class="skill-category">${skillGroup.category}</h3>
            <div class="skill-items">
                ${skillGroup.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
        
        // Observe for animation
        if (window.scrollAnimations) {
            window.scrollAnimations.observeNewElement(skillCard);
        }
    });
}

// ========================================
// Load Projects Dynamically
// ========================================

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid || !window.portfolioConfig) return;
    
    const iconEmojis = ['⚡', '🤖', '🎨', '🚀', '💬', '👁️', '🌐', '🧠', '📊', '🔬'];
    
    window.portfolioConfig.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.transitionDelay = `${index * 0.1}s`;
        
        const icon = iconEmojis[index % iconEmojis.length];
        
        projectCard.innerHTML = `
            <div class="project-icon">${icon}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech ? project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('') : ''}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    Code
                </a>
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link secondary">
                    Demo
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        // Observe for animation
        if (window.scrollAnimations) {
            window.scrollAnimations.observeNewElement(projectCard);
        }
    });
}

// ========================================
// Load Certifications Dynamically
// ========================================

function loadCertifications() {
    const certsGrid = document.getElementById('certificationsGrid');
    if (!certsGrid || !window.portfolioConfig) return;
    
    window.portfolioConfig.certifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card fade-in';
        certCard.style.transitionDelay = `${index * 0.08}s`;
        
        const certName = typeof cert === 'string' ? cert : cert.name;
        
        certCard.innerHTML = `
            <div class="cert-icon">🏆</div>
            <div class="cert-name">${certName}</div>
            <div class="cert-view">View</div>
        `;
        
        // Click handler is handled via event delegation in modal.js
        
        certsGrid.appendChild(certCard);
        
        // Observe for animation
        if (window.scrollAnimations) {
            window.scrollAnimations.observeNewElement(certCard);
        }
    });
}

// ========================================
// Scroll to Top Button
// ========================================

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }, { passive: true });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Current Year in Footer
// ========================================

function setCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// ========================================
// Initialize Hero Tagline Animation
// ========================================

function initHeroTagline() {
    const taglineWords = document.querySelectorAll('.tagline-word');
    taglineWords.forEach((word, index) => {
        word.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
}

// ========================================
// Initialize Everything
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Load dynamic content
    loadSkills();
    loadProjects();
    loadCertifications();
    
    // Initialize utilities
    initScrollToTop();
    setCurrentYear();
    initHeroTagline();
});

// ========================================
// Performance: Debounce scroll events
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events if needed
window.addEventListener('scroll', debounce(() => {
    // Additional scroll handling if needed
}, 10), { passive: true });
