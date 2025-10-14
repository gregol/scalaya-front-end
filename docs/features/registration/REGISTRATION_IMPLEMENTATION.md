# Registration Implementation Documentation

## Overview

This document describes the complete role-based registration system implementation for ScalaYa, which allows users to register as either **Customers** (shoppers) or **Sellers** (vendors).

The implementation follows the exact specifications provided and integrates with the Arawaney API Platform.

---

## Architecture

### File Structure

```
src/
├── app/
│   └── register/
│       ├── page.tsx                    # Role selection landing page
│       ├── customer/
│       │   └── page.tsx                # Customer registration page
│       └── seller/
│           └── page.tsx                # Seller registration page
├── ui/
│   └── organisms/
│       ├── CustomerRegisterForm.tsx    # Customer registration form component
│       ├── SellerRegisterForm.tsx      # Seller registration form component
│       └── RoleSelectionCard.tsx       # Role selection card component
└── utils/
    └── validation.ts                   # Validation helpers for both roles
```

---

## Routes

### 1. `/register` - Role Selection Landing Page

- Presents two options: "I want to Shop" and "I want to Sell"
- Beautiful card-based UI with feature highlights
- Links to role-specific registration pages

### 2. `/register/customer` - Customer Registration

- Fields: Email, Password, First Name, Last Name, Phone (optional)
- Validates against customer-specific rules
- Calls: `POST ${NEXT_PUBLIC_API_BASE_URL}/api/customer/register`
- On success: Redirects to `/login` after 1 second

### 3. `/register/seller` - Seller Registration

- Fields: Business Name, Email, Password, First Name, Last Name, Phone (optional)
- Validates against seller-specific rules
- Calls: `POST ${NEXT_PUBLIC_API_BASE_URL}/api/supplier/register`
- On success: Redirects to `/login` after 1 second

---

## API Integration

### Customer Registration Endpoint

**Endpoint:** `POST ${NEXT_PUBLIC_API_BASE_URL}/api/customer/register`

**Request Body:**

```json
{
  "email": "customer@example.com",
  "password": "SecurePass123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890" // optional
}
```

**Success Response (201):**

```json
{
  "message": "Customer registered successfully",
  "customer": {
    "id": 123,
    "email": "customer@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "status": "active"
  }
}
```

**Error Response (400 - Validation Error):**

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required",
        "invalidValue": ""
      }
    ]
  }
}
```

**Error Response (409 - Email Exists):**

```json
{
  "error": {
    "code": "EMAIL_EXISTS",
    "message": "An account with this email address already exists",
    "details": []
  }
}
```

### Seller Registration Endpoint

**Endpoint:** `POST ${NEXT_PUBLIC_API_BASE_URL}/api/supplier/register`

**Request Body:**

```json
{
  "email": "seller@example.com",
  "password": "SecurePass123",
  "firstName": "Jane",
  "lastName": "Smith",
  "businessName": "Jane's Store",
  "phone": "+1234567890" // optional
}
```

**Response formats are similar to customer registration.**

---

## Validation Rules

All validation is implemented in `src/utils/validation.ts` and follows these exact specifications:

### Email

- **Required**: Yes
- **Max length**: 180 characters
- **Format**: Valid email address (user@domain.com)

### Password

- **Required**: Yes
- **Min length**: 8 characters
- **Must contain**:
  - At least one uppercase letter (A-Z)
  - At least one lowercase letter (a-z)
  - At least one number (0-9)

### First Name & Last Name

- **Required**: Yes
- **Max length**: 100 characters
- **Allowed characters**: Letters, spaces, hyphens, apostrophes, periods
- **Regex**: `/^[a-zA-Z\s\-'.]+$/`

### Phone

- **Required**: No (optional)
- **Max length**: 20 characters
- **Format**: Must start with optional `+`, followed by 1-9, then 0-15 digits
- **Regex**: `/^[+]?[1-9][\d]{0,15}$/`
- **Examples**: `+1234567890`, `1234567890`

### Business Name (Seller only)

- **Required**: Yes
- **Max length**: 200 characters

---

## Client-Side Validation

Client-side validation happens **before** the API call:

1. User fills out the form
2. On submit, validation functions check all fields
3. If validation fails:
   - Field-level errors are displayed inline
   - API call is **NOT** made
   - Submit button remains enabled for retry
4. If validation passes:
   - Submit button is disabled
   - API call is made
   - Loading state is shown

### Validation Functions

```typescript
// From src/utils/validation.ts
validateEmail(email: string): string | null
validatePassword(password: string): string | null
validateFirstName(firstName: string): string | null
validateLastName(lastName: string): string | null
validatePhone(phone: string): string | null
validateBusinessName(businessName: string): string | null

// Composite validators
validateCustomerRegistration(data: CustomerRegistrationData): ValidationError[]
validateSellerRegistration(data: SellerRegistrationData): ValidationError[]
```

---

## Server Error Handling

The implementation handles three types of server errors:

### 1. Validation Errors (400)

Server returns field-level validation details:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "details": [{ "field": "email", "message": "Invalid email format" }]
  }
}
```

**Behavior:**

- Each field error is mapped to the corresponding input
- Errors are displayed inline below the field
- User can correct and resubmit

### 2. Specific Errors (409, etc.)

Known error codes like `EMAIL_EXISTS`:

```json
{
  "error": {
    "code": "EMAIL_EXISTS",
    "message": "An account with this email address already exists"
  }
}
```

**Behavior:**

- If field can be inferred (e.g., email for EMAIL_EXISTS), show inline
- Otherwise, show as global error message

### 3. Unexpected Errors

Network errors, 500s, or malformed responses:

**Behavior:**

- Show friendly global message: "Registration failed — please try again or contact support."
- Error details logged to console for debugging

---

## Accessibility Features

Both registration forms implement WCAG 2.1 Level AA compliance:

### Labels & Fields

- All inputs have associated `<label>` elements with `htmlFor` attribute
- Required fields are marked with asterisk and explained
- Optional fields are clearly labeled

### Error Handling

- Invalid fields have `aria-invalid="true"` attribute
- Error messages have unique IDs referenced by `aria-describedby`
- Global error/success messages have `role="alert"` for screen reader announcements

### Keyboard Navigation

- All form elements are keyboard accessible
- Tab order follows visual flow
- Submit button disabled during loading to prevent double submission

### Color Contrast

- Error text: Red 600/400 (dark mode) meets 4.5:1 contrast ratio
- Success text: Green 800/200 (dark mode) meets 4.5:1 contrast ratio
- Help text: Gray 500/400 (dark mode) meets 4.5:1 contrast ratio

---

## Success Flow

1. User submits valid form
2. Submit button is disabled and shows loading state
3. API call is made to the appropriate endpoint
4. On success (HTTP 201):
   - Success message is displayed: "Account created. Redirecting to login…"
   - After 1000ms (1 second), user is redirected to `/login`
5. Form remains in success state (button disabled) during redirect

---

## Environment Variables

### Required

#### `NEXT_PUBLIC_API_BASE_URL`

- **Purpose**: Base URL for the Arawaney API Platform
- **Example**: `https://api.arawaney.com`
- **Used for**: All registration API calls
- **Note**: Must start with `NEXT_PUBLIC_` to be accessible in client-side code

### Setup

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_BASE_URL=https://api.arawaney.com
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

See `ENV_SETUP.md` for complete environment variable documentation.

---

## Component API

### CustomerRegisterForm

```tsx
import { CustomerRegisterForm } from '@/ui/organisms';

<CustomerRegisterForm />;
```

**Props:** None  
**Behavior:** Self-contained form with validation, API integration, and error handling

### SellerRegisterForm

```tsx
import { SellerRegisterForm } from '@/ui/organisms';

<SellerRegisterForm />;
```

**Props:** None  
**Behavior:** Self-contained form with validation, API integration, and error handling

### RoleSelectionCard

```tsx
import { RoleSelectionCard } from '@/ui/organisms';

<RoleSelectionCard
  title="I want to Shop"
  description="Browse and purchase products"
  href="/register/customer"
  icon={<ShoppingBagIcon />}
  features={['Feature 1', 'Feature 2', 'Feature 3']}
/>;
```

**Props:**

- `title`: Card heading
- `description`: Short description text
- `href`: Link destination
- `icon`: React node (SVG icon)
- `features`: Array of feature strings to display with checkmarks

---

## Testing

### Manual Testing Checklist

#### Customer Registration

- [ ] Navigate to `/register` and click "I want to Shop"
- [ ] Try submitting empty form → Should show inline validation errors
- [ ] Enter invalid email → Should show email format error
- [ ] Enter weak password (e.g., "test") → Should show password requirements error
- [ ] Enter invalid first/last name (e.g., "John123") → Should show character restriction error
- [ ] Enter invalid phone (e.g., "abc") → Should show phone format error
- [ ] Enter valid data → Should call API and show success message
- [ ] Wait 1 second → Should redirect to `/login`

#### Seller Registration

- [ ] Navigate to `/register` and click "I want to Sell"
- [ ] Follow similar test cases as customer registration
- [ ] Verify business name is required and validated

#### Error Handling

- [ ] Test with API returning 400 validation errors → Should map to fields
- [ ] Test with API returning 409 email exists → Should show on email field
- [ ] Test with API offline → Should show friendly error message

#### Accessibility

- [ ] Navigate entire form using only keyboard (Tab, Enter)
- [ ] Use screen reader to verify labels and error announcements
- [ ] Verify error fields have `aria-invalid` and `aria-describedby`

### Automated Testing

To add unit tests (using Bun test):

```typescript
// src/utils/validation.test.ts
import { test, expect } from 'bun:test';
import { validateEmail, validatePassword } from './validation';

test('validateEmail - valid email', () => {
  expect(validateEmail('test@example.com')).toBeNull();
});

test('validateEmail - invalid email', () => {
  expect(validateEmail('invalid')).toBeTruthy();
});

test('validatePassword - meets requirements', () => {
  expect(validatePassword('Test1234')).toBeNull();
});

test('validatePassword - too short', () => {
  expect(validatePassword('Test1')).toBeTruthy();
});
```

Run tests:

```bash
bun test
```

---

## Troubleshooting

### "API configuration error" message

**Cause:** `NEXT_PUBLIC_API_BASE_URL` is not set  
**Solution:**

1. Create `.env.local` with the variable
2. Restart dev server: `bun dev`

### Form submits but no API call is made

**Cause:** Client-side validation is failing  
**Solution:** Check browser console for validation errors

### CORS errors in browser console

**Cause:** API doesn't allow requests from your domain  
**Solution:**

1. Configure CORS on the API to allow your domain
2. For local dev, add `http://localhost:3000` to allowed origins

### Network errors

**Cause:** API is unreachable or URL is incorrect  
**Solution:**

1. Verify `NEXT_PUBLIC_API_BASE_URL` is correct
2. Test API manually: `curl ${NEXT_PUBLIC_API_BASE_URL}/api/customer/register`
3. Check firewall/network settings

### Validation errors not showing inline

**Cause:** Error field names from server don't match form field names  
**Solution:** Verify server returns field names matching: `email`, `password`, `firstName`, `lastName`, `phone`, `businessName`

---

## Differences from Original Implementation

The previous implementation (`RegisterForm.tsx`) is still available but uses a different approach:

| Feature            | Old Implementation                 | New Implementation                          |
| ------------------ | ---------------------------------- | ------------------------------------------- |
| **Endpoint**       | Internal Next.js API route         | External Arawaney API                       |
| **Fields**         | name, confirmPassword, acceptTerms | firstName, lastName, phone (spec-compliant) |
| **Validation**     | react-hook-form + Zod              | Custom validation functions                 |
| **Error Handling** | Generic errors                     | Detailed field-level mapping                |
| **Success Flow**   | Auto-login attempt                 | Redirect to login                           |
| **Roles**          | Single registration                | Separate customer/seller flows              |
| **Accessibility**  | Basic                              | Full WCAG 2.1 AA compliance                 |

Both implementations coexist peacefully. The old one can be used for mock/dev purposes, while the new one integrates with the real API.

---

## Future Enhancements

Possible improvements for future iterations:

1. **Email Verification**: Send confirmation email with verification link
2. **Password Strength Meter**: Visual indicator of password strength
3. **reCAPTCHA**: Add bot protection
4. **Social Registration**: OAuth with Google, Facebook, etc.
5. **Terms & Conditions**: Checkbox to accept T&Cs before submission
6. **Multi-step Form**: Split into multiple pages for better UX
7. **Phone Verification**: SMS code verification for phone numbers
8. **Business Verification**: Document upload for seller verification

---

## Support

For issues or questions:

1. Check `TROUBLESHOOTING.md` in the project root
2. Review `ENV_SETUP.md` for environment configuration
3. Check `API_INTEGRATION.md` for API-specific documentation
4. Contact the development team

---

## Compliance Checklist

✅ **All requirements met:**

- [x] Endpoint: POST `${NEXT_PUBLIC_API_BASE_URL}/api/customer/register`
- [x] Request body: `{ email, password, firstName, lastName, phone? }`
- [x] Success response (201) with proper shape
- [x] Error responses (400, 409) properly handled
- [x] Environment variable `NEXT_PUBLIC_API_BASE_URL` used
- [x] Fields: Email, Password, First name, Last name, Phone (optional)
- [x] Submit button text: "Register"
- [x] Inline field-level errors displayed
- [x] Global error area for server errors
- [x] Disabled submit during request
- [x] Success message shown
- [x] Redirect to `/login` after 1 second
- [x] Client validation (exact specs)
- [x] Server error mapping to fields
- [x] Accessibility (aria-invalid, role="alert")
- [x] TypeScript implementation
- [x] Fetch API used (no axios)
- [x] try/catch for network errors
- [x] Non-JSON response handling
- [x] Validation helper functions created
