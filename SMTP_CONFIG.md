# SMTP Configuration Guide

This project is configured to send emails using Outlook SMTP with OAuth2/Modern Authentication.

## Configuration

### Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# SMTP Configuration for Outlook
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=Modac@2025
SMTP_PASSWORD=your_password_here

# Authentication Type: 'OAuth2' or 'login'
SMTP_AUTH_TYPE=OAuth2

# OAuth2 Configuration (Required if SMTP_AUTH_TYPE=OAuth2)
SMTP_CLIENT_ID=your_azure_client_id
SMTP_CLIENT_SECRET=your_azure_client_secret
SMTP_REFRESH_TOKEN=your_refresh_token
SMTP_ACCESS_TOKEN=your_access_token
```

## Current Settings

- **SMTP Server**: smtp-mail.outlook.com
- **SMTP Port**: 587
- **Encryption**: STARTTLS
- **Authentication Method**: OAuth2/Modern Auth
- **Username**: Modac@2025

## OAuth2 Setup for Outlook

To use OAuth2/Modern Authentication with Outlook, you need to:

1. **Register your application in Azure AD**:
   - Go to [Azure Portal](https://portal.azure.com)
   - Navigate to Azure Active Directory > App registrations
   - Create a new registration
   - Note your Client ID and Client Secret

2. **Grant Mail.Send permission**:
   - In your app registration, go to API permissions
   - Add Microsoft Graph > Mail.Send permission
   - Grant admin consent

3. **Generate OAuth2 tokens**:
   - Use Azure AD authentication flow to get access and refresh tokens
   - Update the environment variables with these tokens

## Usage

The email functionality is available through the API route:

```
POST /api/send-email
```

Request body:
```json
{
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "text": "Plain text content",
  "html": "<p>HTML content</p>",
  "from": "sender@example.com",
  "replyTo": "reply@example.com"
}
```

## Files

- `src/utils/smtp.ts` - SMTP configuration and email sending utilities
- `src/app/api/send-email/route.ts` - Next.js API route for sending emails
- `src/utils/config.ts` - Configuration exports

