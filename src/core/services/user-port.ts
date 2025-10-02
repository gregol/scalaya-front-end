import type { User } from '../domain';

/**
 * Port (interface) for user service
 * Infrastructure layer will implement this
 */
export interface UserPort {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  update(id: string, data: Partial<User>): Promise<User>;
}


