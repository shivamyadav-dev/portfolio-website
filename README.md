# Modern Portfolio Website

A futuristic, modern portfolio website for Data Scientists and AI Engineers built with pure HTML, CSS, and vanilla JavaScript.

## Features

- 🎨 **Modern Design**: Dark theme with cyan and purple accent colors
- ✨ **Glassmorphism Effects**: Beautiful backdrop blur effects throughout
- 🎭 **Animated Canvas Background**: Neural network nodes, data streams, and floating mathematical symbols
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🎯 **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- 📧 **Contact Form**: Integrated with EmailJS for form submissions
- 🔄 **Dynamic Content**: All content loaded from configuration file
- ⚡ **Performance**: Lightweight, no frameworks, pure vanilla JavaScript

## Design Principles

- **Color Scheme**: Dark background (#0b0f19) with cyan (#38bdf8) and purple (#9333ea) accents
- **Typography**: Orbitron for headings, JetBrains Mono for body text
- **Effects**: Glassmorphism with backdrop-filter blur
- **Animations**: Smooth parallax, fade-in, and hover effects

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and animations
├── js/
│   ├── config.js       # Portfolio configuration
│   └── main.js         # Main JavaScript functionality
├── assets/             # PDF files (resume, certifications)
└── README.md           # This file
```

## Setup Instructions

### 1. Basic Setup

1. Clone or download this repository
2. Navigate to the `portfolio-website` directory
3. Open `index.html` in a web browser

That's it! The website should work locally.

### 2. EmailJS Configuration (Optional)

To enable the contact form email functionality:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Open `js/config.js`
5. Replace the placeholder values in the `emailjs` object:

```javascript
emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
}
```

**Note**: If EmailJS is not configured, the form will fall back to opening the default email client.

### 3. Add Your Assets

1. Place your resume PDF in the `assets/` folder as `Resume.pdf`
2. Place your certification PDFs in the `assets/` folder with the names specified in `js/config.js`

### 4. Customize Content

Edit `js/config.js` to customize:
- Personal information (name, email, social links)
- Hero section titles
- About section description and stats
- Skills and categories
- Projects
- Certifications

## Sections

1. **Hero Section**: Large name display with rotating job titles and CTA buttons
2. **About Section**: Description with animated counter statistics
3. **Skills Section**: Categorized skill cards with hover effects
4. **Projects Section**: Grid of project cards with tech stack badges
5. **Certifications Section**: Grid layout with certificate names and view buttons
6. **Resume Section**: Download button with glow effect
7. **Contact Section**: Form with validation and social links
8. **Footer**: Copyright and navigation links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies (except Google Fonts and EmailJS CDN)
- Optimized animations using requestAnimationFrame
- Lazy loading with Intersection Observer
- Minimal CSS and JavaScript footprint

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --bg-primary: #0b0f19;
    --color-cyan: #38bdf8;
    --color-purple: #9333ea;
    /* ... */
}
```

### Fonts

The website uses Google Fonts. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Update the font-family variables in `css/styles.css`

### Animations

All animations are defined in `css/styles.css`. You can modify:
- Animation durations
- Easing functions
- Keyframe animations

## License

This project is open source and available for personal and commercial use.

## Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: Custom SVG icons
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## Support

For issues or questions, please open an issue on the repository.

---

Built with ❤️ using HTML, CSS, and JavaScript


