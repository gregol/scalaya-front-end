# Quick Start Guide

Get up and running in 5 minutes!

## 📦 Installation

```bash
# 1. Install dependencies
pnpm install
# or: npm install / yarn install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Generate a secret for NextAuth
# On Mac/Linux:
openssl rand -base64 32
# Then paste the output into .env.local as NEXTAUTH_SECRET

# 4. Start development server
pnpm dev
```

## 🎯 What You Get

Your app is now running at **http://localhost:3000**

### Available Routes

- `/` - Landing page with features
- `/login` - Sign in page
- `/register` - Create account page
- `/dashboard` - Protected dashboard (requires authentication)

### Demo Credentials

Test the login flow with:
- **Email**: `demo@example.com`
- **Password**: `Demo1234`

## 🚀 Try It Out

1. **Visit the home page**: See the landing page
2. **Register a new account**: Click "Get Started"
3. **Auto-login**: After registration, you're automatically signed in
4. **View dashboard**: See your personalized dashboard
5. **Toggle theme**: Click the moon/sun icon to switch between light/dark mode
6. **Sign out**: Click the logout icon in the navbar

## 🧪 Run Tests

```bash
# Unit tests
pnpm test

# E2E tests (requires dev server running)
pnpm test:e2e
```

## 📖 Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Explore the project structure
- Add your own features
- Customize the styling
- Connect to a real database

## 🔧 Common Tasks

### Add Google OAuth

1. Get credentials from [Google Cloud Console](https://console.cloud.google.com/)
2. Add to `.env.local`:
   ```
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   NEXT_PUBLIC_HAS_GOOGLE_OAUTH=true
   ```
3. Restart dev server

### Change the App Name

Edit `src/config/constants.ts`:
```typescript
export const APP_NAME = 'Your App Name';
```

### Add a New Page

1. Create component in `src/ui/pages/NewPage.tsx`
2. Create route: `src/app/new-page/page.tsx`
3. Add route to `src/config/constants.ts`

## 💡 Tips

- **TypeScript strict mode** is enabled for better type safety
- **Hot reload** works for all file changes
- **Dark mode** is automatically persisted to localStorage
- **Forms** are validated with Zod schemas
- **Protected routes** automatically redirect to login

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 pnpm dev
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
```

### Tests failing
```bash
# Ensure dev server is NOT running when running unit tests
# For E2E tests, the dev server should be running automatically
```

## 📚 Learn More

- [Project Architecture](./README.md#-project-structure)
- [Testing Guide](./README.md#-testing)
- [How to Extend](./README.md#-how-to-extend)

---

Happy coding! 🎉


