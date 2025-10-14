/* eslint-disable no-console */
/**
 * API Auth Adapter - Real implementation for Arawaney API Platform
 * Implements AuthPort and UserPort using the API Platform REST API
 */

import type {
  User,
  LoginCredentials,
  RegisterCredentials,
} from '@/core/domain';
import type { AuthPort, UserPort } from '@/core/services';
import { ApiClient, ApiClientError } from '../api/api-client';
import {
  API_ENDPOINTS,
  type JwtTokenResponse,
  type ApiCustomer,
  type ApiPlatformCollection,
} from '@/config/api.config';

/**
 * Maps API Platform Customer to our User domain entity
 */
function mapApiCustomerToUser(customer: ApiCustomer): User {
  return {
    id: customer.id?.toString() || customer['@id'],
    name: customer.name || customer.email.split('@')[0], // Fallback to email username
    email: customer.email,
    image: null, // API doesn't provide image yet
    createdAt: customer.createdAt ? new Date(customer.createdAt) : new Date(),
  };
}

/**
 * API Auth Adapter - Production implementation
 */
export class ApiAuthAdapter implements AuthPort, UserPort {
  private apiClient: ApiClient;
  private jwtToken: string | null = null;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || new ApiClient();
  }

  /**
   * Set JWT token for authenticated requests
   */
  setToken(token: string | null): void {
    this.jwtToken = token;
    this.apiClient.setToken(token);
  }

  /**
   * Get current JWT token
   */
  getToken(): string | null {
    return this.jwtToken;
  }

  /**
   * Authenticate user with credentials
   * Calls API Platform JWT login endpoint
   */
  async authenticate(credentials: LoginCredentials): Promise<User | null> {
    try {
      const loginEndpoint = API_ENDPOINTS.AUTH.LOGIN;
      console.log('🔐 Attempting authentication...');
      console.log('📍 Login endpoint:', loginEndpoint);
      console.log(
        '🌐 Full URL:',
        `${process.env.NEXT_PUBLIC_API_URL || 'https://api.arawaney.com'}${loginEndpoint}`
      );
      console.log('👤 Email:', credentials.email);

      // Step 1: Get JWT token from API Platform
      const tokenResponse = await this.apiClient.post<JwtTokenResponse>(
        loginEndpoint,
        {
          email: credentials.email,
          password: credentials.password,
        }
      );

      console.log('✅ Authentication successful, token received');

      if (!tokenResponse.token) {
        console.log('⚠️ No token in response');
        return null;
      }

      // Store token for subsequent requests
      this.setToken(tokenResponse.token);

      // Step 2: Fetch user details using the token
      const user = await this.findByEmail(credentials.email);

      return user;
    } catch (error) {
      console.error('❌ Authentication error:', error);

      if (error instanceof ApiClientError) {
        console.error('🔍 Error details:', {
          status: error.status,
          message: error.message,
          response: error.response,
        });

        // Handle specific error cases
        if (error.status === 401) {
          return null; // Invalid credentials
        }

        if (error.status === 404) {
          console.error('❗ Login endpoint not found. Please check:');
          console.error('   1. Is the API URL correct?');
          console.error(
            '   2. Does the API have JWT authentication configured?'
          );
          console.error(
            '   3. Try testing with: curl -X POST https://api.arawaney.com/api/login_check'
          );
          return null;
        }
      }

      throw error;
    }
  }

  /**
   * Register new user
   * Creates a new Customer in API Platform
   */
  async register(credentials: RegisterCredentials): Promise<User> {
    try {
      const customerData = {
        email: credentials.email,
        name: credentials.name,
        plainPassword: credentials.password, // API Platform typically uses plainPassword field
      };

      const newCustomer = await this.apiClient.post<ApiCustomer>(
        API_ENDPOINTS.CUSTOMERS.REGISTER,
        customerData
      );

      return mapApiCustomerToUser(newCustomer);
    } catch (error) {
      console.error('Registration error:', error);

      if (error instanceof ApiClientError) {
        // Handle validation errors
        if (error.response?.violations) {
          const messages = error.response.violations
            .map((v) => v.message)
            .join(', ');
          throw new Error(`Validation failed: ${messages}`);
        }

        if (error.status === 422) {
          throw new Error('Invalid registration data');
        }

        if (error.status === 409) {
          throw new Error('Email already exists');
        }
      }

      throw new Error('Registration failed. Please try again.');
    }
  }

  /**
   * Find user by email
   * Queries API Platform Customer collection
   */
  async findUserByEmail(email: string): Promise<User | null> {
    return this.findByEmail(email);
  }

  /**
   * Find user by ID
   * Gets specific Customer from API Platform
   */
  async findById(id: string): Promise<User | null> {
    try {
      const customer = await this.apiClient.get<ApiCustomer>(
        API_ENDPOINTS.CUSTOMERS.ITEM(id),
        { token: this.jwtToken || undefined }
      );

      return mapApiCustomerToUser(customer);
    } catch (error) {
      console.error('Find by ID error:', error);

      if (error instanceof ApiClientError && error.status === 404) {
        return null;
      }

      return null;
    }
  }

  /**
   * Find user by email
   * Queries API Platform Customer collection with filter
   */
  async findByEmail(email: string): Promise<User | null> {
    try {
      // API Platform supports filtering via query parameters
      const response = await this.apiClient.get<
        ApiPlatformCollection<ApiCustomer>
      >(
        `${API_ENDPOINTS.CUSTOMERS.COLLECTION}?email=${encodeURIComponent(email)}`,
        { token: this.jwtToken || undefined }
      );

      if (
        response['hydra:totalItems'] === 0 ||
        response['hydra:member'].length === 0
      ) {
        return null;
      }

      const customer = response['hydra:member'][0];
      return mapApiCustomerToUser(customer);
    } catch (error) {
      console.error('Find by email error:', error);
      return null;
    }
  }

  /**
   * Create new user
   * Creates a new Customer in API Platform
   */
  async create(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    try {
      const customerData = {
        email: user.email,
        name: user.name,
        // Note: Creating a user without password might not be allowed
        // You might need to adjust based on your API requirements
      };

      const newCustomer = await this.apiClient.post<ApiCustomer>(
        API_ENDPOINTS.CUSTOMERS.COLLECTION,
        customerData,
        { token: this.jwtToken || undefined }
      );

      return mapApiCustomerToUser(newCustomer);
    } catch (error) {
      console.error('Create user error:', error);
      throw new Error('Failed to create user');
    }
  }

  /**
   * Update user
   * Updates a Customer in API Platform using PATCH
   */
  async update(id: string, data: Partial<User>): Promise<User> {
    try {
      const updateData: Partial<ApiCustomer> = {};

      if (data.name !== undefined) {
        updateData.name = data.name;
      }

      if (data.email !== undefined) {
        updateData.email = data.email;
      }

      const updatedCustomer = await this.apiClient.patch<ApiCustomer>(
        API_ENDPOINTS.CUSTOMERS.ITEM(id),
        updateData,
        { token: this.jwtToken || undefined }
      );

      return mapApiCustomerToUser(updatedCustomer);
    } catch (error) {
      console.error('Update user error:', error);
      throw new Error('Failed to update user');
    }
  }
}

/**
 * Default API auth adapter instance
 */
export const apiAuthAdapter = new ApiAuthAdapter();
