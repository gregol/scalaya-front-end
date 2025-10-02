import { describe, it, expect, vi } from 'vitest';
import { authenticateUser } from '@/core/usecases';
import type { AuthPort } from '@/core/services';
import type { User } from '@/core/domain';

describe('authenticateUser', () => {
  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    image: null,
  };

  const mockAuthService: AuthPort = {
    authenticate: vi.fn(),
    register: vi.fn(),
    findUserByEmail: vi.fn(),
  };

  it('returns user when credentials are valid', async () => {
    vi.mocked(mockAuthService.authenticate).mockResolvedValue(mockUser);

    const result = await authenticateUser(
      { email: 'test@example.com', password: 'Password123' },
      mockAuthService
    );

    expect(result).toEqual(mockUser);
    expect(mockAuthService.authenticate).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'Password123',
    });
  });

  it('returns null when credentials are invalid', async () => {
    vi.mocked(mockAuthService.authenticate).mockResolvedValue(null);

    const result = await authenticateUser(
      { email: 'test@example.com', password: 'wrong' },
      mockAuthService
    );

    expect(result).toBeNull();
  });

  it('throws error when email is invalid', async () => {
    await expect(
      authenticateUser(
        { email: 'invalid-email', password: 'Password123' },
        mockAuthService
      )
    ).rejects.toThrow();
  });

  it('throws error when password is empty', async () => {
    await expect(
      authenticateUser(
        { email: 'test@example.com', password: '' },
        mockAuthService
      )
    ).rejects.toThrow();
  });
});


