# ScalaYa Documentation

Welcome to the ScalaYa frontend documentation! This directory contains comprehensive guides, technical documentation, and references for the project.

## 📂 Documentation Structure

```
docs/
├── getting-started/        # 🚀 Quick setup and onboarding
├── architecture/           # 🏗️ System design and structure
├── features/               # ✨ Feature-specific documentation
│   ├── registration/       # Customer & Seller registration
│   ├── authentication/     # Auth implementation
│   └── ui/                 # UI components & patterns
├── api/                    # 🔌 API integration guides
├── design/                 # 🎨 Design system & guidelines
└── troubleshooting/        # 🔧 Help and problem solving
```

---

## 🚀 Getting Started

**New to the project? Start here!**

| Document                                                               | Description                     |
| ---------------------------------------------------------------------- | ------------------------------- |
| **[Quick Start Guide](./getting-started/QUICK_START.md)**              | Get up and running in 5 minutes |
| **[Environment Setup](./getting-started/ENV_SETUP.md)**                | Configure environment variables |
| **[Initial Requirements](./getting-started/initial_requirenments.md)** | Original project requirements   |

---

## 🏗️ Architecture

**Understand the system design and code organization**

| Document                                                 | Description                            |
| -------------------------------------------------------- | -------------------------------------- |
| **[Architecture Guide](./architecture/ARCHITECTURE.md)** | Clean Architecture patterns and layers |
| **[Project Summary](./architecture/PROJECT_SUMMARY.md)** | High-level overview of the project     |

---

## ✨ Features

### Registration System

**Customer & Seller registration with Arawaney API**

| Document                                                                                  | Description                      |
| ----------------------------------------------------------------------------------------- | -------------------------------- |
| **[Registration Summary](./features/registration/REGISTRATION_SUMMARY.md)**               | Quick overview and usage guide   |
| **[Registration Implementation](./features/registration/REGISTRATION_IMPLEMENTATION.md)** | Complete technical documentation |

**Key Highlights:**

- ✅ Role-based registration (Customer/Seller)
- ✅ Full spec compliance with backend API
- ✅ Field-level validation and error mapping
- ✅ Accessibility (WCAG 2.1 AA)

### Authentication

**User authentication and session management**

| Document                                                                                        | Description                  |
| ----------------------------------------------------------------------------------------------- | ---------------------------- |
| **[Authentication Issue Resolved](./features/authentication/AUTHENTICATION_ISSUE_RESOLVED.md)** | Auth troubleshooting history |

### UI Components

**Navigation and responsive design patterns**

| Document                                                                    | Description                         |
| --------------------------------------------------------------------------- | ----------------------------------- |
| **[Mega Menu Documentation](./features/ui/MEGA_MENU_DOCUMENTATION.md)**     | Navigation mega menu implementation |
| **[Mobile Responsive Summary](./features/ui/MOBILE_RESPONSIVE_SUMMARY.md)** | Responsive design implementation    |

---

## 🔌 API Integration

**Connect with the Arawaney API Platform**

| Document                                              | Description                              |
| ----------------------------------------------------- | ---------------------------------------- |
| **[API Integration Guide](./api/API_INTEGRATION.md)** | Complete integration guide with examples |
| **[API Status](./api/API_STATUS.md)**                 | Current integration status and endpoints |

**Integration Features:**

- ✅ JWT Authentication
- ✅ Hydra/JSON-LD format support
- ✅ Automatic token management
- ✅ Clean Architecture adapters
- ✅ Mock mode for development

---

## 🎨 Design

**UI components and design guidelines**

| Document                                       | Description                             |
| ---------------------------------------------- | --------------------------------------- |
| **[Design System](./design/DESIGN_SYSTEM.md)** | Component library and design guidelines |

**Atomic Design Pattern:**

- Atoms → Molecules → Organisms → Templates → Pages

---

## 🔧 Troubleshooting

**Common issues and solutions**

| Document                                                          | Description                   |
| ----------------------------------------------------------------- | ----------------------------- |
| **[Troubleshooting Guide](./troubleshooting/TROUBLESHOOTING.md)** | Common problems and solutions |

---

## 🎯 Quick Links by Task

### I want to...

**Set up the project**

1. [Quick Start Guide](./getting-started/QUICK_START.md)
2. [Environment Setup](./getting-started/ENV_SETUP.md)

**Implement registration**

1. [Registration Summary](./features/registration/REGISTRATION_SUMMARY.md)
2. [Registration Implementation](./features/registration/REGISTRATION_IMPLEMENTATION.md)

**Integrate with API**

1. [API Integration Guide](./api/API_INTEGRATION.md)
2. [API Status](./api/API_STATUS.md)

**Understand architecture**

1. [Architecture Guide](./architecture/ARCHITECTURE.md)
2. [Project Summary](./architecture/PROJECT_SUMMARY.md)

**Build UI components**

1. [Design System](./design/DESIGN_SYSTEM.md)
2. [Mega Menu Documentation](./features/ui/MEGA_MENU_DOCUMENTATION.md)

**Fix an issue**

1. [Troubleshooting Guide](./troubleshooting/TROUBLESHOOTING.md)

---

## 📖 Documentation by Role

### 👨‍💻 For Developers

**Start Here:**

1. [Quick Start Guide](./getting-started/QUICK_START.md)
2. [Environment Setup](./getting-started/ENV_SETUP.md)
3. [Architecture Guide](./architecture/ARCHITECTURE.md)

**Deep Dive:**

- [API Integration](./api/API_INTEGRATION.md) - Backend integration
- [Registration System](./features/registration/REGISTRATION_IMPLEMENTATION.md) - Feature implementation
- [Troubleshooting](./troubleshooting/TROUBLESHOOTING.md) - Problem solving

### 🎨 For Designers

**Start Here:**

1. [Design System](./design/DESIGN_SYSTEM.md)
2. [Project Summary](./architecture/PROJECT_SUMMARY.md)

**Components:**

- [Mega Menu](./features/ui/MEGA_MENU_DOCUMENTATION.md) - Navigation patterns
- [Mobile Responsive](./features/ui/MOBILE_RESPONSIVE_SUMMARY.md) - Responsive design

### 📊 For Project Managers

**Overview:**

1. [Project Summary](./architecture/PROJECT_SUMMARY.md)
2. [Initial Requirements](./getting-started/initial_requirenments.md)

**Status:**

- [API Status](./api/API_STATUS.md) - Integration progress
- [Registration Summary](./features/registration/REGISTRATION_SUMMARY.md) - Feature status

---

## 📝 Contributing to Documentation

### Adding New Documentation

1. **Choose the right folder:**
   - `getting-started/` - Onboarding and setup guides
   - `architecture/` - System design documents
   - `features/` - Feature-specific docs (create subfolders as needed)
   - `api/` - API integration and endpoints
   - `design/` - UI/UX and design guidelines
   - `troubleshooting/` - Help and problem-solving

2. **Create your .md file** in the appropriate subfolder

3. **Update this README.md** to include a link to your document

4. **Follow the style guide** (see below)

### Documentation Style Guide

✅ **Do:**

- Use clear, concise language
- Include code examples with syntax highlighting
- Add table of contents for longer docs (100+ lines)
- Link to related documentation
- Include screenshots or diagrams when helpful
- Add dates for time-sensitive information
- Use emojis sparingly for visual hierarchy

❌ **Don't:**

- Use jargon without explanation
- Write extremely long documents (split into multiple files)
- Forget to update links in README.md
- Include sensitive information (keys, passwords, etc.)

### Example Documentation Structure

```markdown
# Document Title

Brief description of what this document covers.

## Prerequisites

What you need before starting.

## Overview

High-level explanation.

## Step-by-Step Guide

1. First step
2. Second step
   ...

## Troubleshooting

Common issues.

## Related Documentation

- [Link to related doc](./path/to/doc.md)
```

---

## 🔗 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Bun Documentation](https://bun.sh/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Jotai Documentation](https://jotai.org)

---

## 📧 Need Help?

Can't find what you're looking for?

1. ✅ Check the [Troubleshooting Guide](./troubleshooting/TROUBLESHOOTING.md)
2. 🔍 Search through existing documentation
3. 📖 Review the [API Integration Guide](./api/API_INTEGRATION.md)
4. 💬 Contact the development team

---

## 🔄 Document Status

| Category        | Status     | Last Updated |
| --------------- | ---------- | ------------ |
| Getting Started | ✅ Current | Oct 2025     |
| Architecture    | ✅ Current | Oct 2025     |
| Registration    | ✅ Current | Oct 2025     |
| API Integration | ✅ Current | Oct 2025     |
| Design System   | ✅ Current | Oct 2025     |
| Troubleshooting | ✅ Current | Oct 2025     |

---

**Last Updated:** October 14, 2025  
**Project:** ScalaYa Frontend  
**Version:** 1.0  
**Maintainer:** Development Team
