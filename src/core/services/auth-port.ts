import type { User, LoginCredentials, RegisterCredentials } from '../domain';

/**
 * Port (interface) for authentication service
 * Infrastructure layer will implement this
 */
export interface AuthPort {
  authenticate(credentials: LoginCredentials): Promise<User | null>;
  register(credentials: RegisterCredentials): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
}


