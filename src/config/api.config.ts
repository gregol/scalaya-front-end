/**
 * API Configuration
 * Base URLs and endpoint definitions for Arawaney API Platform
 */

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.arawaney.com',
  TIMEOUT: 10000, // 10 seconds
} as const;

/**
 * API Endpoints for Arawaney API Platform
 * Following Hydra/JSON-LD and API Platform conventions
 */
export const API_ENDPOINTS = {
  // Authentication endpoints (API Platform with JWT)
  // Override via NEXT_PUBLIC_API_LOGIN_ENDPOINT if the default doesn't work
  AUTH: {
    LOGIN: process.env.NEXT_PUBLIC_API_LOGIN_ENDPOINT || '/api/login_check', // Standard API Platform JWT endpoint
    TOKEN_REFRESH: '/api/token/refresh',
    LOGOUT: '/api/logout',
  },

  // Customer endpoints (User entity in API Platform)
  CUSTOMERS: {
    COLLECTION: '/api/customers',
    ITEM: (id: string) => `/api/customers/${id}`,
    REGISTER: '/api/customers', // POST to create new customer
  },

  // Supplier endpoints
  SUPPLIERS: {
    COLLECTION: '/api/suppliers',
    ITEM: (id: string) => `/api/suppliers/${id}`,
  },

  // Entrypoint
  ENTRYPOINT: '/api',
} as const;

/**
 * HTTP Headers
 */
export const API_HEADERS = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
  ACCEPT: 'Accept',
} as const;

/**
 * Content Types
 */
export const CONTENT_TYPES = {
  JSON: 'application/json',
  JSON_LD: 'application/ld+json', // Hydra/JSON-LD format
  MERGE_PATCH: 'application/merge-patch+json',
} as const;

/**
 * API Platform Response Types
 */
export interface ApiPlatformCollection<T> {
  '@context': string;
  '@id': string;
  '@type': 'hydra:Collection';
  'hydra:member': T[];
  'hydra:totalItems': number;
  'hydra:view'?: {
    '@id': string;
    '@type': 'hydra:PartialCollectionView';
    'hydra:first'?: string;
    'hydra:last'?: string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  };
  'hydra:search'?: {
    '@type': 'hydra:IriTemplate';
    'hydra:template': string;
    'hydra:variableRepresentation': string;
    'hydra:mapping': Array<{
      '@type': 'IriTemplateMapping';
      variable: string;
      property: string;
      required: boolean;
    }>;
  };
}

/**
 * API Platform Item Response
 */
export interface ApiPlatformItem {
  '@context'?: string;
  '@id': string;
  '@type': string;
  [key: string]: unknown;
}

/**
 * JWT Token Response from API Platform
 */
export interface JwtTokenResponse {
  token: string;
  refresh_token?: string;
}

/**
 * API Error Response
 */
export interface ApiErrorResponse {
  '@context'?: string;
  '@type'?: string;
  'hydra:title'?: string;
  'hydra:description'?: string;
  message?: string;
  violations?: Array<{
    propertyPath: string;
    message: string;
  }>;
}

/**
 * Customer entity from API Platform
 */
export interface ApiCustomer extends ApiPlatformItem {
  '@type': 'Customer';
  id?: number;
  email: string;
  name?: string;
  plainPassword?: string; // Only for registration
  active?: boolean;
  blocked?: boolean;
  userIdentifier?: string;
  roles?: string[];
  createdAt?: string;
  updatedAt?: string;
}
