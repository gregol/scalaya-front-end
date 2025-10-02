import { z } from 'zod';

/**
 * User entity schema
 */
export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  image: z.string().url().optional().nullable(),
  createdAt: z.date().optional(),
});

export type User = z.infer<typeof UserSchema>;

/**
 * Registration credentials schema
 */
export const RegisterCredentialsSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain uppercase, lowercase, and number'
      ),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterCredentials = z.infer<typeof RegisterCredentialsSchema>;

/**
 * Login credentials schema
 */
export const LoginCredentialsSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginCredentials = z.infer<typeof LoginCredentialsSchema>;


