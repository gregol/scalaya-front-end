'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  RegisterCredentials,
  RegisterCredentialsSchema,
} from '@/core/domain';
import { Button, Alert } from '../atoms';
import { FormField, Checkbox } from '../molecules';
import { API_ROUTES, ROUTES } from '@/config/constants';

export function RegisterForm() {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: zodResolver(RegisterCredentialsSchema),
  });

  const onSubmit = async (data: RegisterCredentials) => {
    setIsLoading(true);
    setError('');

    try {
      // Call registration API
      const response = await fetch(API_ROUTES.AUTH.REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        setError(result.error || 'Registration failed');
        return;
      }

      // Auto sign in after registration
      const signInResult = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResult?.ok) {
        router.push(ROUTES.DASHBOARD);
        router.refresh();
      } else {
        // Registration succeeded but auto-login failed, redirect to login
        router.push(ROUTES.LOGIN);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block font-jost font-medium text-sm text-navy-900 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <FormField
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
            error={errors.name?.message}
            {...register('name')}
          />
        </div>

        <div>
          <label className="block font-jost font-medium text-sm text-navy-900 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <FormField
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <div>
          <label className="block font-jost font-medium text-sm text-navy-900 dark:text-gray-300 mb-2">
            Password
          </label>
          <FormField
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
            error={errors.password?.message}
            {...register('password')}
          />
        </div>

        <div>
          <label className="block font-jost font-medium text-sm text-navy-900 dark:text-gray-300 mb-2">
            Confirm Password
          </label>
          <FormField
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
        </div>

        <div className="pt-2">
          <Checkbox
            variant="checkbox"
            label={
              <span className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-navy-900 hover:text-primary-500 dark:text-primary-400 underline">
                  Terms and Conditions
                </a>
              </span>
            }
            error={errors.acceptTerms?.message}
            {...register('acceptTerms')}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          isLoading={isLoading}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}


