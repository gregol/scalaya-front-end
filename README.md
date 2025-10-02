# ScalaYa Frontend

A production-ready Next.js application built with Clean Architecture, TypeScript, and modern best practices.

## 🚀 Features

- ✅ **Next.js 14** with App Router and Server Components
- ✅ **TypeScript** in strict mode
- ✅ **TailwindCSS** for styling
- ✅ **NextAuth.js** for authentication (Credentials + Google OAuth)
- ✅ **Jotai** for state management
- ✅ **Zod** + **React Hook Form** for validation
- ✅ **Clean Architecture** with clear separation of concerns
- ✅ **Atomic Design** UI system
- ✅ **Vitest** + **Testing Library** for unit tests
- ✅ **Playwright** for e2e tests
- ✅ **ESLint** + **Prettier** for code quality
- ✅ **Husky** + **lint-staged** for pre-commit hooks
- ✅ **Conventional Commits** with commitlint

## 📁 Project Structure

```
scalaya-front/
├── src/
│   ├── app/                    # Next.js App Router (RSC)
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Protected dashboard route
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── providers.tsx      # Client providers
│   │
│   ├── core/                  # Application core (Clean Architecture)
│   │   ├── domain/            # Entities & value objects (Zod schemas)
│   │   │   ├── user.ts        # User schemas
│   │   │   └── session.ts     # Session schemas
│   │   ├── usecases/          # Business logic (pure functions)
│   │   │   ├── authenticate-user.ts
│   │   │   ├── register-user.ts
│   │   │   └── get-current-user.ts
│   │   └── services/          # Ports/interfaces
│   │       ├── auth-port.ts
│   │       └── user-port.ts
│   │
│   ├── infra/                 # Infrastructure adapters
│   │   ├── auth/              # NextAuth configuration
│   │   │   ├── auth.config.ts
│   │   │   └── mock-auth-adapter.ts
│   │   ├── api/               # API implementations
│   │   └── data/              # Mock database
│   │
│   ├── ui/                    # Atomic Design UI system
│   │   ├── atoms/             # Basic building blocks
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   ├── molecules/         # Composed atoms
│   │   │   ├── FormField.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ...
│   │   ├── organisms/         # Complex components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── ...
│   │   ├── templates/         # Page layouts
│   │   │   ├── AuthTemplate.tsx
│   │   │   └── DashboardTemplate.tsx
│   │   └── pages/             # Full page compositions
│   │       ├── HomePage.tsx
│   │       ├── LoginPage.tsx
│   │       └── ...
│   │
│   ├── state/                 # Jotai atoms & state management
│   │   ├── theme-atom.ts      # Theme state (persisted)
│   │   ├── ui-atoms.ts        # UI state
│   │   └── session-atom.ts    # Session state
│   │
│   ├── utils/                 # Helper functions
│   ├── styles/                # Global styles
│   ├── config/                # App configuration
│   └── types/                 # TypeScript type definitions
│
├── tests/                     # Test files
│   ├── unit/                  # Unit tests (Vitest)
│   ├── e2e/                   # E2E tests (Playwright)
│   └── setup.ts               # Test configuration
│
└── [config files]
```

## 🏗️ Clean Architecture

This project follows Clean Architecture principles:

```
┌─────────────────────────────────────────────────┐
│              UI Layer (React/Next.js)           │
│  ┌──────────────────────────────────────────┐   │
│  │      Presentation (UI Components)        │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│         Application Layer (Use Cases)           │
│  ┌──────────────────────────────────────────┐   │
│  │  authenticateUser, registerUser, etc.    │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│           Domain Layer (Core Logic)             │
│  ┌──────────────────────────────────────────┐   │
│  │    Entities, Value Objects, Schemas      │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│       Infrastructure Layer (Adapters)           │
│  ┌──────────────────────────────────────────┐   │
│  │  NextAuth, API Routes, Mock Database     │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

### Key Principles

1. **Dependency Inversion**: Core business logic doesn't depend on frameworks
2. **Separation of Concerns**: Each layer has a single, well-defined responsibility
3. **Testability**: Pure functions and dependency injection make testing easy
4. **Maintainability**: Changes in one layer don't ripple through the entire codebase

## 🚦 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
# At minimum, set NEXTAUTH_SECRET to a random string
```

### Environment Variables

Create a `.env.local` file:

```env
# Required
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:3000

# Optional: Google OAuth (leave blank to skip)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000
```

### Demo Credentials

For testing, use these credentials:
- **Email**: `demo@example.com`
- **Password**: `Demo1234`

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm format:check     # Check formatting
pnpm typecheck        # TypeScript type checking

# Testing
pnpm test             # Run unit tests
pnpm test:watch       # Run tests in watch mode
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:ui      # Run E2E tests with UI
```

## 🧪 Testing

### Unit Tests (Vitest)

```bash
# Run all unit tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test -- --coverage
```

Unit tests are located in `tests/unit/` and cover:
- Atoms (UI components)
- Use cases (business logic)
- State management (Jotai atoms)

### E2E Tests (Playwright)

```bash
# Run E2E tests
pnpm test:e2e

# Run with UI
pnpm test:e2e:ui
```

E2E tests cover:
- Authentication flows
- Protected route redirects
- Registration process
- Form validation

## 🎨 UI System (Atomic Design)

The UI follows Atomic Design methodology:

### Atoms
Basic building blocks (Button, Input, Card, etc.)

```tsx
import { Button } from '@/ui/atoms';

<Button variant="primary" size="lg">
  Click me
</Button>
```

### Molecules
Simple combinations of atoms (FormField, Navbar, etc.)

```tsx
import { FormField } from '@/ui/molecules';

<FormField
  label="Email"
  type="email"
  error={errors.email?.message}
  {...register('email')}
/>
```

### Organisms
Complex components (LoginForm, DashboardStats, etc.)

```tsx
import { LoginForm } from '@/ui/organisms';

<LoginForm />
```

### Templates
Page layouts (AuthTemplate, DashboardTemplate)

### Pages
Complete page compositions

## 🔐 Authentication

Authentication is handled by NextAuth.js with:

- **Credentials Provider**: Email/password authentication
- **Google OAuth**: Optional Google sign-in
- **JWT Strategy**: Stateless session management
- **Middleware Protection**: Automatic route guarding

### Protected Routes

The `/dashboard` route is protected by middleware. Unauthenticated users are redirected to `/login`.

```typescript
// src/middleware.ts
export const config = {
  matcher: ['/dashboard/:path*'],
};
```

## 📦 State Management

Global state is managed with Jotai atoms:

```tsx
import { useAtom } from 'jotai';
import { themeAtom } from '@/state';

function MyComponent() {
  const [theme, setTheme] = useAtom(themeAtom);
  // theme persists to localStorage automatically
}
```

## 🎯 How to Extend

### Adding a New Page

1. Create the page component in `src/ui/pages/`
2. Add the route in `src/app/[route]/page.tsx`
3. Update `src/config/constants.ts` with the route

### Adding a New Component

Follow Atomic Design:
1. **Atom**: Basic, reusable component
2. **Molecule**: Combination of atoms
3. **Organism**: Complex, feature-specific component

### Adding a New Use Case

1. Define domain schemas in `src/core/domain/`
2. Create use case function in `src/core/usecases/`
3. Implement adapter in `src/infra/`
4. Write unit tests in `tests/unit/usecases/`

### Adding a New API Route

1. Create route handler in `src/app/api/[route]/route.ts`
2. Use domain schemas for validation
3. Call use cases for business logic

## 🔧 Configuration

### ESLint

Extends `next/core-web-vitals` with TypeScript rules. Configuration in `.eslintrc.json`.

### Prettier

Opinionated formatting with Tailwind plugin. Configuration in `.prettierrc`.

### Husky

Pre-commit hooks:
- Lint and format staged files
- Conventional commit messages

Setup:
```bash
pnpm prepare
```

### Commitlint

Enforces Conventional Commits format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker

```dockerfile
# Coming soon
```

### Other Platforms

Works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Jotai](https://jotai.org/)
- [Zod](https://zod.dev/)

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please follow:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## 📧 Support

For issues or questions, please open a GitHub issue.

---

Built with ❤️ using Next.js and Clean Architecture principles.


