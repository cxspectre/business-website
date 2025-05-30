# TD Consult Website

A modern Next.js website for TD Consult with secure contact form functionality.

## 🔒 Security Notice

This project contains sensitive configuration that **MUST NOT** be committed to version control:

- **Never commit `.env.local`** - it contains email credentials
- **Use app passwords** for email authentication, not regular passwords
- **Environment variables** are used for all sensitive data

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tanja-drefke-consult
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual credentials (see `CONTACT_FORM_SETUP.md`)

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📧 Contact Form Setup

The contact form requires email configuration. See `CONTACT_FORM_SETUP.md` for detailed setup instructions.

## 📁 Project Structure

- `app/` - Next.js 13+ app directory with pages and API routes
- `components/` - Reusable React components
- `lib/` - Utility functions and configurations
- `public/` - Static assets

## 🛡️ Security Features

- ✅ Environment variables for sensitive data
- ✅ Secure SMTP configuration
- ✅ Input validation and sanitization
- ✅ Proper error handling without exposing internals

## 🚀 Deployment

When deploying to production:

1. Set environment variables in your hosting platform
2. Never commit `.env.local` to version control
3. Use secure secret management for production credentials

## 📝 License

This project is private and proprietary to TD Consult. 