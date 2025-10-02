import type { User } from '@/core/domain';

/**
 * In-memory mock user database
 * In production, this would be replaced with a real database
 */
export class MockUserDatabase {
  private users: Map<string, User & { password?: string }>;

  constructor() {
    this.users = new Map();
    // Seed with a demo user
    this.users.set('demo@example.com', {
      id: '1',
      name: 'Demo User',
      email: 'demo@example.com',
      password: 'Demo1234', // In production, this would be hashed
      image: null,
      createdAt: new Date(),
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.get(email);
    if (!user) return null;

    // Don't return password in user object
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findById(id: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.id === id) {
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    }
    return null;
  }

  async create(
    userData: Omit<User, 'id' | 'createdAt'> & { password: string }
  ): Promise<User> {
    const id = crypto.randomUUID();
    const user = {
      ...userData,
      id,
      createdAt: new Date(),
    };

    this.users.set(userData.email, user);

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async validatePassword(email: string, password: string): Promise<boolean> {
    const user = this.users.get(email);
    if (!user || !user.password) return false;

    // In production, use bcrypt.compare or similar
    return user.password === password;
  }
}

// Singleton instance
export const mockUserDb = new MockUserDatabase();


