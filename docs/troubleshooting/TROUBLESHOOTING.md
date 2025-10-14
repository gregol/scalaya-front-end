# Troubleshooting Guide

## Authentication Error: "Not Found" (404)

### Problem

You're seeing this error when trying to login:

```
ApiClientError: Not Found
status: 404
```

This means the login endpoint `/api/login_check` doesn't exist on the API server.

### Quick Diagnosis

**Run the diagnostic script:**

```bash
node scripts/test-api.js
```

This will automatically test common authentication endpoints and tell you which one works.

### Manual Testing

**Test 1: Check if API is accessible**

```bash
curl -v https://api.arawaney.com/api
```

**Test 2: Test the default login endpoint**

```bash
curl -X POST https://api.arawaney.com/api/login_check \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}'
```

**Test 3: Try alternative login endpoints**

```bash
# Try /login_check (without /api prefix)
curl -X POST https://api.arawaney.com/login_check \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}'

# Try /api/login
curl -X POST https://api.arawaney.com/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}'

# Try /api/auth/login
curl -X POST https://api.arawaney.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}'

# Try /api/authentication_token
curl -X POST https://api.arawaney.com/api/authentication_token \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}'
```

**Test 4: Try different credential formats**

```bash
# Some APIs use "username" instead of "email"
curl -X POST https://api.arawaney.com/api/login_check \
  -H "Content-Type: application/json" \
  -d '{"username":"your-email@example.com","password":"your-password"}'

# Some APIs use "identifier"
curl -X POST https://api.arawaney.com/api/login_check \
  -H "Content-Type: application/json" \
  -d '{"identifier":"your-email@example.com","password":"your-password"}'
```

### Solutions

#### Solution 1: Update the Login Endpoint

Once you find the correct endpoint, set it in your `.env.local`:

```env
# If the correct endpoint is /login_check (without /api)
NEXT_PUBLIC_API_LOGIN_ENDPOINT=/login_check

# Or if it's /api/authentication_token
NEXT_PUBLIC_API_LOGIN_ENDPOINT=/api/authentication_token

# Or any other endpoint that works
NEXT_PUBLIC_API_LOGIN_ENDPOINT=/your/working/endpoint
```

Then restart your development server:

```bash
# Kill the current server (Ctrl+C) and restart
bun dev
# or: pnpm dev / npm run dev
```

#### Solution 2: Check API Documentation

Visit the API documentation to find the correct authentication endpoint:

```bash
# Open in browser
open https://api.arawaney.com/api/docs

# Or check with curl
curl https://api.arawaney.com/api/docs.json
```

Look for endpoints related to:

- `login`
- `authentication`
- `token`
- `auth`

#### Solution 3: Use Mock Mode (Temporary)

While you figure out the correct endpoint, use mock mode to continue development:

```env
# In .env.local
NEXT_PUBLIC_USE_MOCK_API=true
```

This will use the in-memory mock database with these credentials:

- Email: `demo@example.com`
- Password: `Demo1234`

#### Solution 4: Check with API Administrator

If none of the endpoints work, the API might not have JWT authentication configured. Contact the API administrator and ask:

1. **Is JWT authentication enabled?**
   - They need to install LexikJWTAuthenticationBundle in Symfony
2. **What is the login endpoint?**
   - Ask for the exact URL and HTTP method
3. **What credential format is required?**
   - Do they use `email`/`password` or `username`/`password`?
4. **Is CORS configured?**
   - Your frontend domain needs to be allowed

### Common Causes

1. **JWT Bundle Not Installed**
   - The API needs LexikJWTAuthenticationBundle
   - See: https://github.com/lexik/LexikJWTAuthenticationBundle

2. **Different Endpoint Configuration**
   - Some APIs use custom routes for authentication
   - Check the API's `config/routes.yaml` or security configuration

3. **Wrong API URL**
   - Verify `NEXT_PUBLIC_API_URL` in your `.env.local`
   - Make sure it doesn't have a trailing slash

4. **CORS Issues**
   - The API might be blocking requests from your domain
   - Check browser console for CORS errors

5. **API Not Running**
   - Verify the API is accessible
   - Try: `curl https://api.arawaney.com/api`

## Other Common Issues

### Issue: CORS Error

**Problem:** Browser console shows CORS policy error

**Solution:**
The API needs to configure CORS to allow your frontend domain. The API administrator needs to:

```php
// config/packages/nelmio_cors.yaml
nelmio_cors:
    defaults:
        origin_regex: true
        allow_origin: ['http://localhost:3000']
        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']
        allow_headers: ['Content-Type', 'Authorization']
        expose_headers: ['Link']
        max_age: 3600
```

### Issue: Invalid Credentials (401)

**Problem:** Getting 401 even with correct credentials

**Possible causes:**

1. Password is incorrect
2. User account doesn't exist
3. User account is blocked/inactive
4. Wrong credential field names

**Solution:**

```bash
# Test with the demo account or register a new one first
curl -X POST https://api.arawaney.com/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "name":"Test User",
    "plainPassword":"TestPass123"
  }'
```

### Issue: Token Expired

**Problem:** Requests fail after some time

**Solution:**
Implement token refresh in `src/infra/auth/api-auth-adapter.ts`:

```typescript
async refreshToken(refreshToken: string): Promise<string> {
  const response = await this.apiClient.post(
    API_ENDPOINTS.AUTH.TOKEN_REFRESH,
    { refresh_token: refreshToken }
  );
  return response.token;
}
```

### Issue: Network Timeout

**Problem:** Requests timeout

**Solution:**
Increase timeout in `.env.local`:

```env
NEXT_PUBLIC_API_TIMEOUT=30000
```

And update `src/config/api.config.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.arawaney.com',
  TIMEOUT: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
} as const;
```

## Getting Help

1. **Check the logs:**
   - Look at the browser console (F12)
   - Check the server console where you ran `bun dev`

2. **Enable detailed logging:**
   - The `ApiAuthAdapter` now logs detailed information
   - Look for 🔐, 📍, and ❌ emoji in the console

3. **Test with curl:**
   - Always test endpoints with curl first
   - This eliminates frontend/CORS issues

4. **Check API Platform documentation:**
   - https://api-platform.com/docs/
   - https://github.com/lexik/LexikJWTAuthenticationBundle

5. **Open an issue:**
   - Include the full error message
   - Include the curl commands you tried
   - Include your environment variables (without secrets!)

## Quick Reference

### Environment Variables

```env
# Required
NEXT_PUBLIC_API_URL=https://api.arawaney.com
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Optional overrides
NEXT_PUBLIC_API_LOGIN_ENDPOINT=/api/login_check
NEXT_PUBLIC_API_TIMEOUT=10000
NEXT_PUBLIC_USE_MOCK_API=false
```

### Test Commands

```bash
# Run diagnostics
node scripts/test-api.js

# Test API connectivity
curl https://api.arawaney.com/api

# Test login
curl -X POST https://api.arawaney.com/api/login_check \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email","password":"your-password"}'

# Check if endpoint exists (should NOT return 404)
curl -I https://api.arawaney.com/api/login_check
```

### Restart Development Server

```bash
# Stop current server: Ctrl+C or Cmd+C

# Clear Next.js cache (optional)
rm -rf .next

# Restart
bun dev
# or: pnpm dev / npm run dev
```
