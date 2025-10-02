import type { LoginCredentials, User } from '../domain';
import { LoginCredentialsSchema } from '../domain';
import type { AuthPort } from '../services';

/**
 * Use case: Authenticate a user with credentials
 */
export async function authenticateUser(
  credentials: LoginCredentials,
  authService: AuthPort
): Promise<User | null> {
  // Validate input
  const validated = LoginCredentialsSchema.parse(credentials);

  // Delegate to auth service
  const user = await authService.authenticate(validated);

  return user;
}


