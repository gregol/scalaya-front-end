/* eslint-disable no-console */
/**
 * API Usage Examples
 *
 * This file demonstrates how to use the Arawaney API client
 * in your React components.
 *
 * NOTE: This is an example file for reference only.
 * It is not imported or used in the application.
 */

'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { apiClient, ApiClientError } from '@/infra/api';
import {
  API_ENDPOINTS,
  type ApiCustomer,
  type ApiPlatformCollection,
} from '@/config/api.config';

/**
 * Example 1: Fetch current user data
 */
export function CurrentUserExample() {
  const { data: session } = useSession();
  const [user, setUser] = useState<ApiCustomer | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      if (!session?.user?.email || !session?.accessToken) return;

      setLoading(true);
      setError(null);

      try {
        // Set the API token from the session
        apiClient.setToken(session.accessToken);

        // Fetch user data
        const response = await apiClient.get<
          ApiPlatformCollection<ApiCustomer>
        >(
          `${API_ENDPOINTS.CUSTOMERS.COLLECTION}?email=${encodeURIComponent(session.user.email)}`
        );

        if (response['hydra:member'].length > 0) {
          setUser(response['hydra:member'][0]);
        }
      } catch (err) {
        if (err instanceof ApiClientError) {
          setError(err.message);
        } else {
          setError('Failed to fetch user data');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentUser();
  }, [session]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h2>Current User</h2>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <p>Active: {user.active ? 'Yes' : 'No'}</p>
    </div>
  );
}

/**
 * Example 2: Fetch all customers (admin feature)
 */
export function CustomerListExample() {
  const { data: session } = useSession();
  const [customers, setCustomers] = useState<ApiCustomer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function fetchCustomers() {
      if (!session?.accessToken) return;

      setLoading(true);
      setError(null);

      try {
        apiClient.setToken(session.accessToken);

        const response = await apiClient.get<
          ApiPlatformCollection<ApiCustomer>
        >(`${API_ENDPOINTS.CUSTOMERS.COLLECTION}?page=${page}`);

        setCustomers(response['hydra:member']);
        setTotalItems(response['hydra:totalItems']);
      } catch (err) {
        if (err instanceof ApiClientError) {
          setError(err.message);
        } else {
          setError('Failed to fetch customers');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, [session, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Customers ({totalItems})</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer['@id']}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={customers.length === 0}
      >
        Next
      </button>
    </div>
  );
}

/**
 * Example 3: Update user profile
 */
export function UpdateProfileExample() {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user?.id || !session?.accessToken) {
      setError('Not authenticated');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      apiClient.setToken(session.accessToken);

      // Use PATCH to partially update
      await apiClient.patch<ApiCustomer>(
        API_ENDPOINTS.CUSTOMERS.ITEM(session.user.id),
        { name }
      );

      setSuccess(true);
    } catch (err) {
      if (err instanceof ApiClientError) {
        // Handle validation errors
        if (err.response?.violations) {
          const messages = err.response.violations
            .map((v) => v.message)
            .join(', ');
          setError(messages);
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to update profile');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Profile</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && (
        <div style={{ color: 'green' }}>Profile updated successfully!</div>
      )}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update Name'}
      </button>
    </form>
  );
}

/**
 * Example 4: Server-side data fetching (Server Component)
 */
export async function fetchCustomersServerSide() {
  'use server';

  // In a real server component, you'd get the token from the session
  // using getServerSession() from next-auth

  try {
    // Note: Server-side fetch doesn't need to set token via apiClient
    // Instead, pass it directly to the request
    // Replace 'your-token-here' with actual token from session
    const token = 'your-token-here'; // TODO: Get from session
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.CUSTOMERS.COLLECTION}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/ld+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }

    const data: ApiPlatformCollection<ApiCustomer> = await response.json();
    return data['hydra:member'];
  } catch (error) {
    console.error('Server-side fetch error:', error);
    return [];
  }
}

/**
 * Example 5: Error handling with try-catch
 */
export function ErrorHandlingExample() {
  const { data: session } = useSession();

  const handleApiCall = async () => {
    if (!session?.accessToken) return;

    try {
      apiClient.setToken(session.accessToken);

      const result = await apiClient.get<ApiCustomer>(
        API_ENDPOINTS.CUSTOMERS.ITEM('123')
      );

      console.log('Success:', result);
    } catch (error) {
      if (error instanceof ApiClientError) {
        // Handle specific HTTP status codes
        switch (error.status) {
          case 401:
            console.error('Unauthorized - please login again');
            break;
          case 403:
            console.error('Forbidden - insufficient permissions');
            break;
          case 404:
            console.error('Resource not found');
            break;
          case 422:
            console.error('Validation error:', error.response?.violations);
            break;
          default:
            console.error('API error:', error.message);
        }
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <button onClick={handleApiCall}>Test API Call with Error Handling</button>
  );
}
