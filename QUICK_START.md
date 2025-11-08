# Quick Start Guide

Get your portfolio website up and running in minutes!

## 1. Open the Website

Simply open `index.html` in your web browser. That's it! The website works locally without any server setup.

## 2. Customize Your Content

Edit `js/config.js` to personalize your portfolio:

- **Personal Info**: Update name, email, social links
- **Hero Section**: Modify job titles and tagline
- **About Section**: Update description and statistics
- **Skills**: Add or modify skill categories
- **Projects**: Update project details and links
- **Certifications**: Update certification names and PDF paths

## 3. Add Your Assets

Make sure all PDF files are in the `assets/` folder:
- `Resume.pdf` - Your resume
- Certification PDFs (as specified in config.js)

## 4. (Optional) Set Up EmailJS

If you want the contact form to send emails automatically:

1. Follow the instructions in `EMAILJS_SETUP.md`
2. Get your Service ID, Template ID, and Public Key
3. Update the `emailjs` object in `js/config.js`

**Note**: The form will work without EmailJS - it will just open your default email client instead.

## 5. Deploy (Optional)

You can deploy this website to:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Easy deployment with Git integration
- **Any static hosting service**: Just upload the folder

## Customization Tips

### Change Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
    --color-cyan: #38bdf8;    /* Primary accent */
    --color-purple: #9333ea;  /* Secondary accent */
    --bg-primary: #0b0f19;    /* Background */
}
```

### Change Fonts

1. Update the Google Fonts link in `index.html`
2. Modify font-family variables in `css/styles.css`

### Modify Animations

All animations are in `css/styles.css`. Adjust:
- Animation durations
- Easing functions
- Keyframe values

## Browser Support

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Need Help?

- Check `README.md` for detailed documentation
- Review `EMAILJS_SETUP.md` for email setup
- Check browser console for any errors

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── config.js       # Your content
│   └── main.js         # Functionality
├── assets/             # PDF files
└── README.md           # Full documentation
```

---

Happy coding! 🚀


