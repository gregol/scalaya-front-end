Role

You are a senior Frontend Architect. Think deeply before coding. Propose the plan, then implement. Follow Clean Code and Clean Architecture principles.

Goal

Create a production-ready Next.js (latest, App Router) frontend with TypeScript, TailwindCSS, Jotai for state, NextAuth for auth, and Atomic Design for the UI system. Ship four routes: a public landing page, /login, /register, and an authenticated /dashboard. Use modern Next features (Server Actions, Route Handlers, Metadata API).

Tech constraints

Next.js (App Router, server components by default, client where needed)

TypeScript strict

TailwindCSS (no extra UI libs)

Jotai for client state (atoms/selectors, persistence where useful)

NextAuth (Credentials + Google provider; session via JWT)

Zod + React Hook Form for form validation

ESLint + Prettier + simple commit hooks (Husky + lint-staged)

Vitest + Testing Library (unit), Playwright (e2e smoke)

Conventional Commits in commitlint config

Env handling with .env.local

No server DB—simulate API via in-memory mock + route handlers for now

Clean Architecture (frontend)

Organize code into layers to keep domain logic decoupled from framework/UI:

src/
app/ # Next.js routes (RSC)
core/ # application-agnostic code
domain/ # entities/value-objects (Zod schemas), types
usecases/ # pure functions (e.g., authenticateUser, registerUser)
services/ # ports/interfaces (AuthPort, UserPort)
infra/ # adapters bound to web platform/Next
auth/ # NextAuth config & adapters implementing AuthPort
api/ # route handlers that call usecases
ui/ # Atomic Design system
atoms/
molecules/
organisms/
templates/
pages/ # thin compositions for route-level UIs
state/ # Jotai atoms/selectors
utils/ # helpers (fetchers, cookies, formatting)
styles/ # globals.css, tailwind utilities
config/ # app constants, feature flags
test/

Domain: Zod schemas for User, Session, AuthCredentials, etc.

Use cases: authenticateUser, registerUser, getCurrentUser.

Services (ports) define interfaces; infra implements them (NextAuth adapter, mock API).

UI follows Atomic Design; templates compose organisms; pages compose templates for routes.

State (Jotai) holds lightweight client state only (theme, UI flags, derived session info).

Pages & Routes (App Router)

/ (public landing): hero, features, CTA to login/register.

/login: form (email/password), “Continue with Google”, link to register.

/register: form (name/email/password/confirm), checkbox ToS, submit.

/dashboard: protected. Show user greeting, session info, and a sample widget.

Auth

NextAuth with:

Credentials: validate with Zod, call authenticateUser use case.

Google OAuth: provider enabled, example env keys.

JWT strategy. Expose GET /api/auth/session via NextAuth.

middleware.ts protects /dashboard (redirect to /login if no session).

On login/register success, redirect to /dashboard.

State (Jotai)

sessionAtom: derives from useSession client-side, memoized selector atom.

themeAtom: light/dark with localStorage persistence.

uiAtoms.ts: e.g., isSidebarOpenAtom, toastAtom.

Keep atoms small and composable; avoid over-globalization.

UI (Atomic + Tailwind)

Atoms: Button, Input, Label, Card, Spinner, Alert, Avatar, Badge, ToggleTheme.

Molecules: AuthForm (email/password + submit), OAuthButtons, Navbar, Sidebar.

Organisms: Header (Navbar + user menu), DashboardShell (Sidebar + content).

Templates: AuthTemplate, DashboardTemplate.

Pages: thin compositions in ui/pages consumed by app/\*/page.tsx.

Responsive, accessible (labels/aria, keyboard focus), prefers-color-scheme support.

Validation & Forms

Zod schemas in domain.

React Hook Form + zodResolver.

Display client and server errors cleanly.

Testing

Vitest + Testing Library for atoms/molecules/usecases.

Playwright e2e: login flow (credentials + mock), protected route redirect, register flow.

Tooling & Quality

ESLint (next/core-web-vitals), Prettier.

Husky + lint-staged (format + lint on commit).

Commitlint (conventional), basic CI script suggestions.

Simple pnpm or yarn monorepo-like scripts (choose one and stick to it).

Performance & Accessibility

Image optimization with next/image.

Proper <Link prefetch> defaults.

Metadata via Next Metadata API.

Lighthouse goal ≥ 90 for Performance/Best Practices/SEO/Accessibility on landing.

Deliverables

Plan first: a short checklist of steps you will follow.

File tree with key files (no placeholders; show realistic content).

Complete code for:

app/layout.tsx, app/page.tsx, app/login/page.tsx, app/register/page.tsx, app/dashboard/page.tsx

middleware.ts

infra/auth/auth.config.ts (NextAuth), [...nextauth]/route.ts

infra/api/auth/register/route.ts, infra/api/auth/login/route.ts (mock)

core/domain/_ (zod schemas), core/usecases/_, core/services/\*

state/\* (atoms)

ui/\* atoms/molecules/organisms/templates/pages

styles/globals.css, tailwind.config.ts, postcss.config.js

eslint, prettier, vitest.config.ts, playwright.config.ts

package.json scripts

.env.example

README.md with:

Setup (env vars, Google OAuth instructions)

Commands (dev, test:unit, test:e2e, lint, format, typecheck, build)

Architectural overview (diagram or bullet points)

How to add a new page/component/use case

Tests:

Unit tests for one atom, one molecule, one use case.

E2E: login redirect protection and happy path.

Behavior details

On /login submit (Credentials): call server action or route handler → NextAuth signIn('credentials') → success ⇒ /dashboard, failure ⇒ inline error.

On /register: create mock user in memory (route handler), then auto-sign in; show errors if email exists.

OAuth button: signIn('google', { callbackUrl: '/dashboard' }).

Dashboard page shows user name/email from session, plus a dummy “Quick Stats” card.

NEXTAUTH_SECRET=change_me
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
NODE_ENV=development

Example scripts (package.json)

dev: next dev

build: next build

start: next start

lint: eslint .

format: prettier --write .

typecheck: tsc --noEmit

test: vitest run

test:e2e: playwright test

Acceptance criteria

All four routes implemented; /dashboard guarded by middleware.

Credentials + Google sign-in both work (Google behind flags if keys missing).

Jotai manages theme and at least one UI state; persists theme.

Forms validated with Zod; error messages accessible.

CI-green: typecheck, lint, unit tests pass; e2e smoke runs locally.

README explains architecture and how to extend.

Now:

Output the plan.

Show the directory tree.

Provide the full code and configs.

Include README.md and minimal tests.
Avoid placeholders—write runnable code.
