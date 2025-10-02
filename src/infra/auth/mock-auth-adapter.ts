import type {
  User,
  LoginCredentials,
  RegisterCredentials,
} from '@/core/domain';
import type { AuthPort, UserPort } from '@/core/services';
import { mockUserDb } from '../data/mock-users';

/**
 * Mock implementation of AuthPort and UserPort
 * Uses in-memory database for demo purposes
 */
export class MockAuthAdapter implements AuthPort, UserPort {
  async authenticate(credentials: LoginCredentials): Promise<User | null> {
    const isValid = await mockUserDb.validatePassword(
      credentials.email,
      credentials.password
    );

    if (!isValid) {
      return null;
    }

    return await mockUserDb.findByEmail(credentials.email);
  }

  async register(credentials: RegisterCredentials): Promise<User> {
    const { confirmPassword: _, acceptTerms: __, ...userData } = credentials;

    return await mockUserDb.create({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: null,
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await mockUserDb.findByEmail(email);
  }

  async findById(id: string): Promise<User | null> {
    return await mockUserDb.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await mockUserDb.findByEmail(email);
  }

  async create(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    return await mockUserDb.create({
      ...user,
      password: '',
    });
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const user = await mockUserDb.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return { ...user, ...data };
  }
}

export const mockAuthAdapter = new MockAuthAdapter();


