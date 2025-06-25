# Contact Form Setup Guide

## Overview
This guide explains how to set up the contact form with secure email functionality using SMTP.

## Security Notice ⚠️
**NEVER commit your `.env.local` file to git!** It contains sensitive credentials.

## Setup Steps

### Step 1: Install Dependencies
The required dependencies are already installed:
- `nodemailer` - for sending emails via SMTP

### Step 2: Environment Configuration
1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your actual credentials:
   ```env
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=your-actual-email@td-consult.info
   SMTP_PASS=your-actual-app-password
   CONTACT_EMAIL=info@td-consult.info
   ```

### Step 3: Microsoft 365 App Password Setup
1. Go to Microsoft 365 Security settings
2. Enable 2-factor authentication if not already enabled
3. Generate an "App Password" (not your regular password)
4. Use this app password in `SMTP_PASS`

### Step 4: Test the Setup
The contact form should now send emails successfully.

## Security Best Practices
- ✅ `.env.local` is in `.gitignore`
- ✅ Use app passwords, not regular passwords
- ✅ Environment variables are used for all sensitive data
- ✅ No credentials are hardcoded in the source code

## Deployment Notes
When deploying to production:
1. Set environment variables in your hosting platform
2. Never commit `.env.local` to version control
3. Use secure secret management for production credentials 