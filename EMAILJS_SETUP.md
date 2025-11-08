# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in your portfolio website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the connection instructions
6. Note your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use the following template structure:

**Subject:**
```
Portfolio Contact: {{from_name}}
```

**Content:**
```
Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **Save**
5. Note your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in the left sidebar
2. Find your **Public Key**
3. Copy it (you'll need this later)

## Step 5: Update Configuration

1. Open `js/config.js` in your portfolio project
2. Find the `emailjs` object:
```javascript
emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
}
```

3. Replace the placeholders with your actual values:
   - `YOUR_SERVICE_ID`: Your EmailJS Service ID
   - `YOUR_TEMPLATE_ID`: Your EmailJS Template ID
   - `YOUR_PUBLIC_KEY`: Your EmailJS Public Key

## Step 6: Test the Form

1. Open your portfolio website in a browser
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## Troubleshooting

### Form not sending emails

1. Check browser console for error messages
2. Verify all three IDs in `config.js` are correct
3. Make sure your EmailJS service is connected and active
4. Check your EmailJS dashboard for any error logs

### EmailJS not initialized

- Make sure the EmailJS CDN is loaded in `index.html`
- Check that EmailJS is initialized before form submission
- Verify your Public Key is correct

### Fallback to mailto

If EmailJS is not configured, the form will automatically fall back to opening the default email client. This is a graceful fallback that ensures the form always works.

## Security Notes

- The Public Key is safe to use in client-side code
- Never share your Private Key (not needed for this setup)
- EmailJS handles rate limiting on the free tier
- Consider upgrading to a paid plan for production use with higher email volumes

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Examples](https://www.emailjs.com/docs/examples/)
- [EmailJS Support](https://www.emailjs.com/support/)


