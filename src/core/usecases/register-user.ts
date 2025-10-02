import type { RegisterCredentials, User } from '../domain';
import { RegisterCredentialsSchema } from '../domain';
import type { AuthPort } from '../services';

/**
 * Use case: Register a new user
 */
export async function registerUser(
  credentials: RegisterCredentials,
  authService: AuthPort
): Promise<User> {
  // Validate input
  const validated = RegisterCredentialsSchema.parse(credentials);

  // Check if user exists
  const existingUser = await authService.findUserByEmail(validated.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Register user
  const user = await authService.register(validated);

  return user;
}


