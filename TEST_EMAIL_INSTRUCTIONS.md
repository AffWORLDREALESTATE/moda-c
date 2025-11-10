# Test Email Instructions

## Current Status

✅ SMTP configuration is set up
✅ API route created at `/api/send-email`
✅ Email utilities created

## To Complete the Test

### 1. Add SMTP Password to `.env` file

The `.env` file currently has:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=Modac@2025
SMTP_AUTH_TYPE=login
```

**You need to add:**
```env
SMTP_PASSWORD=your_app_password_here
```

**OR for OAuth2:**
```env
SMTP_AUTH_TYPE=OAuth2
SMTP_CLIENT_ID=your_azure_client_id
SMTP_CLIENT_SECRET=your_azure_client_secret
SMTP_REFRESH_TOKEN=your_refresh_token
SMTP_ACCESS_TOKEN=your_access_token
```

### 2. Restart the Dev Server

The API route might not be recognized until the dev server is restarted:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it:
npm run dev
```

### 3. Test the Email

Once the password is added and the server is restarted, you can test by:

**Option A: Using the test script**
```bash
node test-email-api.js
```

**Option B: Using curl**
```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "rahulsarswat57@gmail.com",
    "subject": "Test Email from Modac Properties",
    "text": "This is a test email.",
    "html": "<p>This is a test email.</p>"
  }'
```

**Option C: Using the browser console**
```javascript
fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'rahulsarswat57@gmail.com',
    subject: 'Test Email',
    text: 'Test email body',
    html: '<p>Test email body</p>'
  })
}).then(r => r.json()).then(console.log)
```

## Notes

- For Outlook with basic auth, you'll need an **App Password** (not your regular password)
- For OAuth2, you need to set up Azure AD app registration
- The email address "Modac@2025" might need to be the full email (e.g., "Modac@2025.com" or similar)

