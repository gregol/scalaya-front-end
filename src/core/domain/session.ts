import { z } from 'zod';
import { UserSchema } from './user';

/**
 * Session schema
 */
export const SessionSchema = z.object({
  user: UserSchema,
  expires: z.string(),
});

export type Session = z.infer<typeof SessionSchema>;

/**
 * Authentication result
 */
export const AuthResultSchema = z.object({
  success: z.boolean(),
  user: UserSchema.optional(),
  error: z.string().optional(),
});

export type AuthResult = z.infer<typeof AuthResultSchema>;


