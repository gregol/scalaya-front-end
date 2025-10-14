# Environment Variables Setup

This document describes all environment variables needed for the ScalaYa frontend application.

## Quick Setup

Create a `.env.local` file in the root of your project with the following variables:

```bash
# ==============================================
# API Configuration (Arawaney API Platform)
# ==============================================
# Base URL for the Arawaney API Platform
# For customer registration: ${NEXT_PUBLIC_API_BASE_URL}/api/customer/register
# For seller registration: ${NEXT_PUBLIC_API_BASE_URL}/api/supplier/register
# For authentication: ${NEXT_PUBLIC_API_BASE_URL}/api/login_check
NEXT_PUBLIC_API_BASE_URL=https://api.arawaney.com

# Optional: Override the default login endpoint if needed
# Default is: /api/login_check
# NEXT_PUBLIC_API_LOGIN_ENDPOINT=/api/login_check

# ==============================================
# NextAuth Configuration
# ==============================================
# Generate a secret with: openssl rand -base64 32
NEXTAUTH_SECRET=your-nextauth-secret-here

# The canonical URL of your application
# For local dev: http://localhost:3000
# For production: https://your-domain.com
NEXTAUTH_URL=http://localhost:3000

# ==============================================
# Application Settings
# ==============================================
# Application environment (development, staging, production)
NODE_ENV=development
```

## Required Variables

### NEXT_PUBLIC_API_BASE_URL

**Required for:** Customer and Seller Registration

- **Description**: Base URL for the Arawaney API Platform
- **Example**: `https://api.arawaney.com`
- **Used for**:
  - Customer registration: `POST ${NEXT_PUBLIC_API_BASE_URL}/api/customer/register`
  - Seller registration: `POST ${NEXT_PUBLIC_API_BASE_URL}/api/supplier/register`
  - Authentication: `POST ${NEXT_PUBLIC_API_BASE_URL}/api/login_check`

### NEXTAUTH_SECRET

**Required for:** Authentication and Session Management

- **Description**: Secret key used to encrypt session tokens
- **How to generate**: Run `openssl rand -base64 32` in your terminal
- **Example**: `abc123def456...`

### NEXTAUTH_URL

**Required for:** NextAuth.js OAuth and callbacks

- **Description**: The canonical URL of your application
- **Local development**: `http://localhost:3000`
- **Production**: `https://your-domain.com`

## Optional Variables

### NEXT_PUBLIC_API_LOGIN_ENDPOINT

- **Default**: `/api/login_check`
- **Override** this if your API uses a different login endpoint

## Bun Note

Bun automatically loads `.env`, `.env.local`, and `.env.production` files. You don't need to use the `dotenv` package.

## For Development

1. Copy this template to `.env.local`
2. Replace `your-nextauth-secret-here` with a real secret (use `openssl rand -base64 32`)
3. Update `NEXT_PUBLIC_API_BASE_URL` to point to your API
4. Run `bun dev` to start the development server

## For Production

1. Set all environment variables in your hosting platform's environment settings
2. Ensure `NEXTAUTH_URL` matches your production domain
3. Use strong, unique secrets for `NEXTAUTH_SECRET`
4. Consider using different API base URLs for staging and production

## Troubleshooting

### "API configuration error" message on registration

- Check that `NEXT_PUBLIC_API_BASE_URL` is set correctly in `.env.local`
- Restart the dev server after adding/changing environment variables
- Verify the variable name starts with `NEXT_PUBLIC_` (required for client-side access)

### Registration not working

- Verify the API is running at the URL specified in `NEXT_PUBLIC_API_BASE_URL`
- Check browser console for CORS errors
- Ensure the API endpoints match: `/api/customer/register` and `/api/supplier/register`

### Session issues

- Ensure `NEXTAUTH_SECRET` is set
- Verify `NEXTAUTH_URL` matches your current domain
- Clear browser cookies and try again
