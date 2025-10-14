/**
 * API Client for Arawaney API Platform
 * Handles HTTP requests with JWT token management
 */

import {
  API_CONFIG,
  API_HEADERS,
  CONTENT_TYPES,
  type ApiErrorResponse,
} from '@/config/api.config';

/**
 * API Client Error
 */
export class ApiClientError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: ApiErrorResponse
  ) {
    super(message);
    this.name = 'ApiClientError';
  }
}

/**
 * Request options
 */
export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
  token?: string;
  contentType?: string;
}

/**
 * API Client class
 */
export class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private token: string | null = null;

  constructor(
    baseUrl: string = API_CONFIG.BASE_URL,
    timeout: number = API_CONFIG.TIMEOUT
  ) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  /**
   * Set JWT token for authenticated requests
   */
  setToken(token: string | null): void {
    this.token = token;
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return this.token;
  }

  /**
   * Build full URL
   */
  private buildUrl(endpoint: string): string {
    // If endpoint is already a full URL, use it as is
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      return endpoint;
    }

    // Remove leading slash if present in endpoint (baseUrl should not end with /)
    const cleanEndpoint = endpoint.startsWith('/')
      ? endpoint.slice(1)
      : endpoint;
    const cleanBaseUrl = this.baseUrl.endsWith('/')
      ? this.baseUrl.slice(0, -1)
      : this.baseUrl;

    return `${cleanBaseUrl}/${cleanEndpoint}`;
  }

  /**
   * Build headers for request
   */
  private buildHeaders(options: RequestOptions = {}): Record<string, string> {
    const headers: Record<string, string> = {
      [API_HEADERS.ACCEPT]: CONTENT_TYPES.JSON_LD,
      [API_HEADERS.CONTENT_TYPE]: options.contentType || CONTENT_TYPES.JSON,
      ...options.headers,
    };

    // Add authorization header if token is available
    const tokenToUse = options.token || this.token;
    if (tokenToUse) {
      headers[API_HEADERS.AUTHORIZATION] = `Bearer ${tokenToUse}`;
    }

    return headers;
  }

  /**
   * Make HTTP request
   */
  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = this.buildUrl(endpoint);
    const headers = this.buildHeaders(options);
    const method = options.method || 'GET';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const fetchOptions: RequestInit = {
        method,
        headers,
        signal: controller.signal,
      };

      if (options.body && method !== 'GET') {
        fetchOptions.body = JSON.stringify(options.body);
      }

      const response = await fetch(url, fetchOptions);

      clearTimeout(timeoutId);

      // Handle different status codes
      if (!response.ok) {
        await this.handleErrorResponse(response);
      }

      // Handle 204 No Content
      if (response.status === 204) {
        return {} as T;
      }

      // Parse JSON response
      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof ApiClientError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new ApiClientError('Request timeout', 408);
        }
        throw new ApiClientError(
          `Network error: ${error.message}`,
          undefined,
          undefined
        );
      }

      throw new ApiClientError('Unknown error occurred');
    }
  }

  /**
   * Handle error responses
   */
  private async handleErrorResponse(response: Response): Promise<never> {
    let errorData: ApiErrorResponse | undefined;

    try {
      errorData = await response.json();
    } catch {
      // If we can't parse the error response, use status text
      throw new ApiClientError(
        response.statusText || 'Request failed',
        response.status
      );
    }

    const message =
      errorData?.['hydra:description'] ||
      errorData?.message ||
      response.statusText ||
      'Request failed';

    throw new ApiClientError(message, response.status, errorData);
  }

  /**
   * GET request
   */
  async get<T>(
    endpoint: string,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, body, method: 'POST' });
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, body, method: 'PUT' });
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method'>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      body,
      method: 'PATCH',
      contentType: CONTENT_TYPES.MERGE_PATCH,
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(
    endpoint: string,
    options?: Omit<RequestOptions, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

/**
 * Default API client instance
 */
export const apiClient = new ApiClient();
