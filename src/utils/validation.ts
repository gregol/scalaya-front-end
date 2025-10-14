/**
 * Validation Helpers for Customer & Seller Registration
 *
 * These validators mirror the backend DTO validation to provide
 * client-side feedback before making API calls.
 */

// =========================
// Customer Registration
// =========================

export interface CustomerRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validates email: required, valid format, max 180 chars
 */
export function validateEmail(email: string): string | null {
  if (!email || email.trim() === '') {
    return 'Email is required';
  }
  if (email.length > 180) {
    return 'Email must not exceed 180 characters';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
}

/**
 * Validates password: required, min 8 chars, must include at least one number,
 * one uppercase and one lowercase letter
 */
export function validatePassword(password: string): string | null {
  if (!password || password.trim() === '') {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must include at least one number';
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must include at least one lowercase letter';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must include at least one uppercase letter';
  }
  return null;
}

/**
 * Validates first name: required, max 100 chars,
 * regex /^[a-zA-Z\s-'.]+$/ (only letters, spaces, hyphen, apostrophe, period)
 */
export function validateFirstName(firstName: string): string | null {
  if (!firstName || firstName.trim() === '') {
    return 'First name is required';
  }
  if (firstName.length > 100) {
    return 'First name must not exceed 100 characters';
  }
  const nameRegex = /^[a-zA-Z\s\-'.]+$/;
  if (!nameRegex.test(firstName)) {
    return 'First name can only contain letters, spaces, hyphens, apostrophes, and periods';
  }
  return null;
}

/**
 * Validates last name: required, max 100 chars,
 * regex /^[a-zA-Z\s-'.]+$/ (only letters, spaces, hyphen, apostrophe, period)
 */
export function validateLastName(lastName: string): string | null {
  if (!lastName || lastName.trim() === '') {
    return 'Last name is required';
  }
  if (lastName.length > 100) {
    return 'Last name must not exceed 100 characters';
  }
  const nameRegex = /^[a-zA-Z\s\-'.]+$/;
  if (!nameRegex.test(lastName)) {
    return 'Last name can only contain letters, spaces, hyphens, apostrophes, and periods';
  }
  return null;
}

/**
 * Validates phone: optional, if present validate regex /^[+]?[1-9][\d]{0,15}$/ and max 20 chars
 */
export function validatePhone(phone: string): string | null {
  // Phone is optional
  if (!phone || phone.trim() === '') {
    return null;
  }
  if (phone.length > 20) {
    return 'Phone number must not exceed 20 characters';
  }
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone)) {
    return 'Please enter a valid phone number (e.g., +1234567890)';
  }
  return null;
}

/**
 * Validates all customer registration fields
 * Returns array of validation errors
 */
export function validateCustomerRegistration(
  data: CustomerRegistrationData
): ValidationError[] {
  const errors: ValidationError[] = [];

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.push({ field: 'email', message: emailError });
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.push({ field: 'password', message: passwordError });
  }

  const firstNameError = validateFirstName(data.firstName);
  if (firstNameError) {
    errors.push({ field: 'firstName', message: firstNameError });
  }

  const lastNameError = validateLastName(data.lastName);
  if (lastNameError) {
    errors.push({ field: 'lastName', message: lastNameError });
  }

  const phoneError = validatePhone(data.phone || '');
  if (phoneError) {
    errors.push({ field: 'phone', message: phoneError });
  }

  return errors;
}

// =========================
// Seller Registration
// =========================

export interface SellerRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  businessName: string;
  phone?: string;
}

/**
 * Validates business name: required, max 200 chars
 */
export function validateBusinessName(businessName: string): string | null {
  if (!businessName || businessName.trim() === '') {
    return 'Business name is required';
  }
  if (businessName.length > 200) {
    return 'Business name must not exceed 200 characters';
  }
  return null;
}

/**
 * Validates all seller registration fields
 * Returns array of validation errors
 */
export function validateSellerRegistration(
  data: SellerRegistrationData
): ValidationError[] {
  const errors: ValidationError[] = [];

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.push({ field: 'email', message: emailError });
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.push({ field: 'password', message: passwordError });
  }

  const firstNameError = validateFirstName(data.firstName);
  if (firstNameError) {
    errors.push({ field: 'firstName', message: firstNameError });
  }

  const lastNameError = validateLastName(data.lastName);
  if (lastNameError) {
    errors.push({ field: 'lastName', message: lastNameError });
  }

  const businessNameError = validateBusinessName(data.businessName);
  if (businessNameError) {
    errors.push({ field: 'businessName', message: businessNameError });
  }

  const phoneError = validatePhone(data.phone || '');
  if (phoneError) {
    errors.push({ field: 'phone', message: phoneError });
  }

  return errors;
}
