/**
 * Customer Registration Form
 *
 * Environment variable required:
 * NEXT_PUBLIC_API_BASE_URL - Base URL for Arawaney API (e.g., https://api.arawaney.com)
 *
 * On success: Shows success message and redirects to /login after 1 second
 *
 * Endpoint: POST ${NEXT_PUBLIC_API_BASE_URL}/api/customer/register
 * Request: { email, password, firstName, lastName, phone? }
 * Success response (201): { "message": string, "customer": { id, email, firstName, lastName, phone, status } }
 */

'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
  validateCustomerRegistration,
  type CustomerRegistrationData,
} from '@/utils/validation';
import { Button, Input, Label } from '../atoms';
import { ROUTES } from '@/config/constants';

// Server error response types (per spec)
interface ServerValidationError {
  error: {
    code: 'VALIDATION_ERROR';
    message: string;
    details: Array<{
      field: string;
      message: string;
      invalidValue?: unknown;
    }>;
  };
}

interface ServerGenericError {
  error: {
    code: string;
    message: string;
    details?: unknown[];
  };
}

interface SuccessResponse {
  message: string;
  customer: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    status: string;
  };
}

type FieldErrors = {
  [K in keyof CustomerRegistrationData]?: string;
};

export function CustomerRegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<CustomerRegistrationData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    field: keyof CustomerRegistrationData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error when user types
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Clear global error when user makes changes
    if (globalError) {
      setGlobalError('');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors({});
    setGlobalError('');
    setSuccessMessage('');

    // Client-side validation (don't call API if invalid)
    const validationErrors = validateCustomerRegistration(formData);
    if (validationErrors.length > 0) {
      const errors: FieldErrors = {};
      validationErrors.forEach(({ field, message }) => {
        errors[field as keyof CustomerRegistrationData] = message;
      });
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      // Build API URL from environment variable
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
      if (!apiBaseUrl) {
        setGlobalError('API configuration error. Please contact support.');
        setIsLoading(false);
        return;
      }

      const endpoint = `${apiBaseUrl}/api/customer/register`;

      // Prepare request body (exclude phone if empty)
      const requestBody: Record<string, string> = {
        email: formData.email.trim(),
        password: formData.password,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
      };

      if (formData.phone && formData.phone.trim() !== '') {
        requestBody.phone = formData.phone.trim();
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Try to parse JSON response (guard for non-JSON responses)
      let data: unknown;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch (parseError) {
          console.error('Failed to parse JSON response:', parseError);
          setGlobalError(
            'Registration failed — please try again or contact support.'
          );
          setIsLoading(false);
          return;
        }
      } else {
        // Non-JSON response
        console.error('Non-JSON response received');
        setGlobalError(
          'Registration failed — please try again or contact support.'
        );
        setIsLoading(false);
        return;
      }

      // Success case (HTTP 201)
      if (response.status === 201 && data) {
        const successData = data as SuccessResponse;
        setSuccessMessage(
          successData.message || 'Account created. Redirecting to login…'
        );

        // Redirect to login after 1 second
        setTimeout(() => {
          router.push(ROUTES.LOGIN);
        }, 1000);
        return;
      }

      // Error cases (400, 409, etc.)
      if (!response.ok && data) {
        // Check for VALIDATION_ERROR with field-level details
        const errorData = data as ServerValidationError | ServerGenericError;

        if (
          errorData.error?.code === 'VALIDATION_ERROR' &&
          'details' in errorData.error &&
          Array.isArray(errorData.error.details)
        ) {
          // Map server validation errors to field errors
          const validationError = errorData as ServerValidationError;
          const errors: FieldErrors = {};
          validationError.error.details.forEach((detail) => {
            errors[detail.field as keyof CustomerRegistrationData] =
              detail.message;
          });
          setFieldErrors(errors);
        } else if (errorData.error?.code === 'EMAIL_EXISTS') {
          // Specific error: email already exists
          setFieldErrors({ email: errorData.error.message });
        } else if (errorData.error?.message) {
          // Generic server error with message
          setGlobalError(errorData.error.message);
        } else {
          // Fallback for unexpected error shape
          setGlobalError(
            'Registration failed — please try again or contact support.'
          );
        }
      } else {
        // Unexpected response
        setGlobalError(
          'Registration failed — please try again or contact support.'
        );
      }
    } catch (error) {
      // Network error or other exception
      console.error('Registration error:', error);
      setGlobalError(
        'Registration failed — please try again or contact support.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Global success message with role="alert" for accessibility */}
      {successMessage && (
        <div
          role="alert"
          className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200"
        >
          {successMessage}
        </div>
      )}

      {/* Global error message with role="alert" for accessibility */}
      {globalError && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200"
        >
          {globalError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Email field */}
        <div>
          <Label
            htmlFor="email"
            className="mb-2 block font-jost text-sm font-medium text-navy-900 dark:text-gray-300"
          >
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            className={
              fieldErrors.email ? 'border-red-500 dark:border-red-500' : ''
            }
          />
          {fieldErrors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Password field */}
        <div>
          <Label
            htmlFor="password"
            className="mb-2 block font-jost text-sm font-medium text-navy-900 dark:text-gray-300"
          >
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.password}
            aria-describedby={
              fieldErrors.password ? 'password-error' : undefined
            }
            className={
              fieldErrors.password ? 'border-red-500 dark:border-red-500' : ''
            }
          />
          {fieldErrors.password && (
            <p
              id="password-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              {fieldErrors.password}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Must be at least 8 characters with uppercase, lowercase, and number
          </p>
        </div>

        {/* First name field */}
        <div>
          <Label
            htmlFor="firstName"
            className="mb-2 block font-jost text-sm font-medium text-navy-900 dark:text-gray-300"
          >
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.firstName}
            aria-describedby={
              fieldErrors.firstName ? 'firstName-error' : undefined
            }
            className={
              fieldErrors.firstName ? 'border-red-500 dark:border-red-500' : ''
            }
          />
          {fieldErrors.firstName && (
            <p
              id="firstName-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              {fieldErrors.firstName}
            </p>
          )}
        </div>

        {/* Last name field */}
        <div>
          <Label
            htmlFor="lastName"
            className="mb-2 block font-jost text-sm font-medium text-navy-900 dark:text-gray-300"
          >
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.lastName}
            aria-describedby={
              fieldErrors.lastName ? 'lastName-error' : undefined
            }
            className={
              fieldErrors.lastName ? 'border-red-500 dark:border-red-500' : ''
            }
          />
          {fieldErrors.lastName && (
            <p
              id="lastName-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              {fieldErrors.lastName}
            </p>
          )}
        </div>

        {/* Phone field (optional) */}
        <div>
          <Label
            htmlFor="phone"
            className="mb-2 block font-jost text-sm font-medium text-navy-900 dark:text-gray-300"
          >
            Phone Number <span className="text-gray-400">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1234567890"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
            className={
              fieldErrors.phone ? 'border-red-500 dark:border-red-500' : ''
            }
          />
          {fieldErrors.phone && (
            <p
              id="phone-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              {fieldErrors.phone}
            </p>
          )}
        </div>

        {/* Submit button - disabled while loading */}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isLoading || !!successMessage}
          isLoading={isLoading}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
