#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * API Diagnostic Script
 * Tests the Arawaney API endpoints to find the correct authentication endpoint
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.arawaney.com';

// Common authentication endpoints in API Platform/Symfony
const AUTH_ENDPOINTS = [
  '/api/login_check',
  '/api/login',
  '/api/auth/login',
  '/api/authentication_token',
  '/api/token',
  '/login_check',
  '/login',
  '/auth/login',
];

// Test credentials (replace with your actual test credentials)
const TEST_CREDENTIALS = {
  username: 'test@example.com',
  password: 'test123',
  email: 'test@example.com',
};

console.log('🔍 API Diagnostics for Arawaney API');
console.log('===================================\n');
console.log(`🌐 API Base URL: ${API_URL}\n`);

// Test 1: Check if API is accessible
async function testApiAccess() {
  console.log('📡 Test 1: Checking API accessibility...');
  try {
    const response = await fetch(`${API_URL}/api`);
    const contentType = response.headers.get('content-type');

    if (response.ok) {
      console.log(`✅ API is accessible (Status: ${response.status})`);
      console.log(`   Content-Type: ${contentType}`);

      if (contentType?.includes('json')) {
        const data = await response.json();
        console.log(
          '   Response:',
          JSON.stringify(data, null, 2).substring(0, 200) + '...'
        );
      }
    } else {
      console.log(`⚠️  API returned status: ${response.status}`);
    }
  } catch (error) {
    console.error(`❌ Cannot reach API: ${error.message}`);
  }
  console.log('');
}

// Test 2: Find authentication endpoint
async function testAuthEndpoints() {
  console.log('🔐 Test 2: Testing authentication endpoints...');
  console.log('   (Testing with different credential formats)\n');

  for (const endpoint of AUTH_ENDPOINTS) {
    const fullUrl = `${API_URL}${endpoint}`;
    console.log(`   Testing: ${endpoint}`);

    // Try different credential formats
    const credentialFormats = [
      { email: TEST_CREDENTIALS.email, password: TEST_CREDENTIALS.password },
      {
        username: TEST_CREDENTIALS.username,
        password: TEST_CREDENTIALS.password,
      },
      {
        identifier: TEST_CREDENTIALS.email,
        password: TEST_CREDENTIALS.password,
      },
    ];

    for (const [index, creds] of credentialFormats.entries()) {
      try {
        const response = await fetch(fullUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(creds),
        });

        const status = response.status;
        const statusText = response.statusText;

        if (status === 404) {
          // Endpoint doesn't exist, skip quietly
          continue;
        }

        console.log(
          `      Format ${index + 1} (${Object.keys(creds)[0]}): ${status} ${statusText}`
        );

        if (status === 200 || status === 201) {
          console.log(`      ✅ FOUND! This endpoint works!`);
          const data = await response.json();
          console.log(`      Response keys: ${Object.keys(data).join(', ')}`);
        } else if (status === 401 || status === 403) {
          console.log(
            `      ⚠️  Endpoint exists but credentials failed (expected)`
          );
        } else if (status === 400) {
          await response.text(); // Consume the response body
          console.log(`      ℹ️  Bad request - might need different format`);
        }
      } catch (error) {
        // Silently catch network errors for non-existent endpoints
      }
    }
  }
  console.log('');
}

// Test 3: Check available endpoints from API documentation
async function testApiDocumentation() {
  console.log('📚 Test 3: Checking API documentation...');

  const docUrls = [
    '/api/docs',
    '/api/docs.json',
    '/api/docs.jsonld',
    '/docs',
    '/.well-known/openapi',
  ];

  for (const docUrl of docUrls) {
    try {
      const response = await fetch(`${API_URL}${docUrl}`);
      if (response.ok) {
        console.log(`   ✅ Found documentation at: ${docUrl}`);
        const contentType = response.headers.get('content-type');
        console.log(`      Content-Type: ${contentType}`);
      }
    } catch (error) {
      // Ignore
    }
  }
  console.log('');
}

// Run all tests
async function runDiagnostics() {
  await testApiAccess();
  await testAuthEndpoints();
  await testApiDocumentation();

  console.log('\n💡 Next Steps:');
  console.log('================');
  console.log('1. Check the console output above for any successful endpoints');
  console.log('2. If an endpoint was found, update src/config/api.config.ts');
  console.log('3. If no endpoint works, check the API documentation at:');
  console.log(`   ${API_URL}/api/docs`);
  console.log(
    '4. Contact the API administrator to confirm authentication setup'
  );
  console.log('\n📝 To test with your actual credentials, run:');
  console.log('   node scripts/test-api.js\n');
}

runDiagnostics().catch(console.error);
