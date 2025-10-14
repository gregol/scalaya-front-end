# Architecture Overview

## Clean Architecture Layers

This application follows Clean Architecture principles with clear separation between layers:

```
┌──────────────────────────────────────────────────────┐
│                   UI Layer (Next.js)                 │
│  ┌────────────────────────────────────────────────┐  │
│  │  Pages → Templates → Organisms → Molecules    │  │
│  │                  → Atoms                       │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
                         ↓ ↑
┌──────────────────────────────────────────────────────┐
│              Application Layer (Use Cases)           │
│  ┌────────────────────────────────────────────────┐  │
│  │  • authenticateUser()                          │  │
│  │  • registerUser()                              │  │
│  │  • getCurrentUser()                            │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
                         ↓ ↑
┌──────────────────────────────────────────────────────┐
│            Domain Layer (Business Logic)             │
│  ┌────────────────────────────────────────────────┐  │
│  │  • User Schema (Zod)                           │  │
│  │  • Session Schema                              │  │
│  │  • Credentials Schemas                         │  │
│  │  • Service Ports (Interfaces)                  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
                         ↓ ↑
┌──────────────────────────────────────────────────────┐
│       Infrastructure Layer (External Services)       │
│  ┌────────────────────────────────────────────────┐  │
│  │  • NextAuth Adapter                            │  │
│  │  • API Routes                                  │  │
│  │  • Mock Database                               │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

## Data Flow

### Authentication Flow

```
User clicks "Sign In"
     ↓
LoginForm (organism) validates input with Zod
     ↓
Calls signIn() from next-auth/react
     ↓
NextAuth validates via Credentials Provider
     ↓
Provider calls authenticateUser() use case
     ↓
Use case calls AuthPort.authenticate()
     ↓
MockAuthAdapter validates credentials
     ↓
Returns User or null
     ↓
JWT token generated
     ↓
User redirected to /dashboard
```

### Protected Route Access

```
User navigates to /dashboard
     ↓
Middleware intercepts request
     ↓
Checks for valid session token
     ↓
If valid: Allow access
If invalid: Redirect to /login
```

### Registration Flow

```
User fills registration form
     ↓
RegisterForm validates with Zod + React Hook Form
     ↓
POST to /api/auth/register
     ↓
API route calls registerUser() use case
     ↓
Use case validates & creates user
     ↓
Returns new user
     ↓
Auto sign-in via NextAuth
     ↓
Redirect to /dashboard
```

## Atomic Design Structure

```
Pages (Route-level compositions)
  └── Templates (Page layouts)
       └── Organisms (Complex features)
            └── Molecules (Composite components)
                 └── Atoms (Basic elements)
```

### Example: Login Page

```
LoginPage (page)
  └── AuthTemplate (template)
       ├── Card (atom)
       └── LoginForm (organism)
            ├── Alert (atom)
            ├── FormField (molecule)
            │    ├── Label (atom)
            │    └── Input (atom)
            ├── Button (atom)
            └── OAuthButtons (molecule)
```

## State Management (Jotai)

```
┌─────────────────────────────────────────┐
│           Jotai Atom Store              │
├─────────────────────────────────────────┤
│  themeAtom (persisted)                  │
│  ├── isDarkModeAtom (derived)           │
│  └── toggleThemeAtom (action)           │
│                                         │
│  sessionAtom                            │
│  ├── currentUserAtom (derived)          │
│  └── isAuthenticatedAtom (derived)      │
│                                         │
│  uiAtoms                                │
│  ├── isSidebarOpenAtom                  │
│  ├── toastsAtom                         │
│  └── isLoadingAtom                      │
└─────────────────────────────────────────┘
```

## Dependency Rules

### ✅ Allowed Dependencies

- UI → Use Cases → Domain → Infrastructure ✅
- Use Cases → Domain ✅
- Infrastructure → Domain ✅
- Infrastructure implements Service Ports ✅

### ❌ Forbidden Dependencies

- Domain → Use Cases ❌
- Domain → UI ❌
- Use Cases → Infrastructure ❌
- Domain → Infrastructure ❌

## Key Design Decisions

### 1. Server Components by Default

- Most components are React Server Components
- Client components marked with `'use client'`
- Reduces bundle size and improves performance

### 2. Form Validation Strategy

```
User Input
    ↓
React Hook Form (client-side validation)
    ↓
Zod Schema validation
    ↓
Server-side API validation (same Zod schema)
    ↓
Use Case validation
```

### 3. Error Handling

- Domain layer: Throw typed errors
- Use cases: Validate input, throw on business rule violations
- API routes: Catch errors, return appropriate HTTP status
- UI: Display user-friendly error messages

### 4. Type Safety

```typescript
// Domain defines the source of truth
export const UserSchema = z.object({...});
export type User = z.infer<typeof UserSchema>;

// Use Cases accept domain types
export async function authenticateUser(
  credentials: LoginCredentials,
  authService: AuthPort
): Promise<User | null>

// Infrastructure implements domain interfaces
export class MockAuthAdapter implements AuthPort {
  async authenticate(credentials: LoginCredentials): Promise<User | null>
}
```

## Testing Strategy

### Unit Tests (Vitest)

- Test atoms in isolation
- Test use cases with mocked services
- Test state management atoms

### Integration Tests

- Test organisms with real atoms/molecules
- Test API routes with mocked database

### E2E Tests (Playwright)

- Test complete user flows
- Test authentication redirects
- Test form submissions

## Performance Optimizations

1. **Server Components**: Most components render on server
2. **Code Splitting**: Dynamic imports for heavy components
3. **Image Optimization**: next/image with proper sizing
4. **Font Optimization**: next/font for Google Fonts
5. **Metadata API**: Static metadata for SEO
6. **Lazy Loading**: Components loaded on demand

## Security Measures

1. **JWT Tokens**: Stateless authentication
2. **Middleware Protection**: Route-level guards
3. **CSRF Protection**: Built into NextAuth
4. **Input Validation**: Zod schemas on client and server
5. **Password Requirements**: Enforced via schema
6. **Environment Variables**: Secrets never exposed to client

## Scalability Considerations

### Current (MVP)

- In-memory database
- Single-server deployment
- No caching layer

### Production Ready

- Replace `MockUserDatabase` with real DB adapter
- Add Redis for session storage
- Implement proper password hashing (bcrypt)
- Add rate limiting
- Set up CDN for static assets
- Implement proper logging/monitoring

## Extension Points

### Adding a New Feature

1. Define domain models (Zod schemas)
2. Create use cases (pure functions)
3. Implement infrastructure adapters
4. Build UI components (atomic design)
5. Add routes (Next.js app router)
6. Write tests

### Example: Adding "Forgot Password"

```
1. Domain: ForgotPasswordSchema
2. Use Case: requestPasswordReset()
3. Infrastructure: Email service adapter
4. UI: ForgotPasswordForm organism
5. Route: /forgot-password/page.tsx
6. Tests: Unit + E2E
```

## Best Practices Enforced

- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ Conventional commits
- ✅ Pre-commit hooks
- ✅ Path aliases (@/)
- ✅ Consistent naming conventions
- ✅ Component documentation
- ✅ Separation of concerns

## Further Reading

- [Clean Architecture Book](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application)
- [Domain-Driven Design](https://www.domainlanguage.com/ddd/)
