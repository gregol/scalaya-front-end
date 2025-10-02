'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LoginCredentials, LoginCredentialsSchema } from '@/core/domain';
import { Button, Alert } from '../atoms';
import { FormField, OAuthButtons } from '../molecules';
import { ROUTES } from '@/config/constants';

export function LoginForm() {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(LoginCredentialsSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else if (result?.ok) {
        router.push(ROUTES.DASHBOARD);
        router.refresh();
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
          <div className="flex items-center justify-between mb-2">
            <label className="block font-jost font-medium text-sm text-navy-900 dark:text-gray-300">
              Password
            </label>
            <a
              href="#"
              className="font-jost text-sm text-navy-900 hover:text-primary-500 dark:text-primary-400 transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <FormField
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            error={errors.password?.message}
            {...register('password')}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          isLoading={isLoading}
        >
          Sign In
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white dark:bg-gray-950 font-jost text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <OAuthButtons />
    </div>
  );
}


