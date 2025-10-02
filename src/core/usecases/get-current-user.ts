import type { User } from '../domain';
import type { UserPort } from '../services';

/**
 * Use case: Get current authenticated user
 */
export async function getCurrentUser(
  userId: string,
  userService: UserPort
): Promise<User | null> {
  if (!userId) {
    return null;
  }

  return await userService.findById(userId);
}


