'use client';

import { MainHeader } from '../organisms';

export function HeaderShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Showcase */}
      <MainHeader cartCount={2} cartTotal="$200.99" isLoggedIn={false} />

      {/* Content Area for Testing */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-navy-900">
            ScalaYa Main Header
          </h1>
          <p className="text-lg text-gray-600">
            Complete navigation header with search, cart, wishlist, and account features
          </p>

          {/* Specifications */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm text-left">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Design Specifications
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Colors</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Background: #443297 (Purple)</li>
                    <li>• Accent: #F5C34B (Primary Yellow)</li>
                    <li>• Text: #FFFFFF (White)</li>
                    <li>• Input Text: #041E42 (Navy)</li>
                    <li>• Placeholder: #626974 (Gray)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Typography</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Logo: Poppins Bold 24px (Desktop) / 20px (Mobile)</li>
                    <li>• Navigation: Jost Medium 16px</li>
                    <li>• Search: Jost Regular 15px</li>
                    <li>• Actions: Inter Bold 14px</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Desktop Components</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Logo and branding area</li>
                  <li>• Full-width search bar with category dropdown</li>
                  <li>• Wishlist button with icon</li>
                  <li>• Account/Sign In button</li>
                  <li>• Shopping cart with count badge and total</li>
                  <li>• Browse Categories menu with hamburger icon</li>
                  <li>• Primary navigation (Home, Shop, Pages, Blog)</li>
                  <li>• Secondary navigation (Deals, Hot Deals, Best Sellers, New Arrivals)</li>
                  <li>• Yellow accent line indicator</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Mobile Components</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Hamburger menu button (opens side drawer)</li>
                  <li>• ✅ Centered logo</li>
                  <li>• ✅ Search icon (toggles search bar)</li>
                  <li>• ✅ Cart icon with badge</li>
                  <li>• ✅ Collapsible search bar</li>
                  <li>• ✅ Full-screen navigation drawer</li>
                  <li>• ✅ Backdrop overlay</li>
                  <li>• ✅ All navigation links in drawer</li>
                  <li>• ✅ Wishlist and Account actions in drawer</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Responsive Breakpoints</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Mobile:</strong> &lt; 1024px (lg breakpoint)</li>
                  <li>• <strong>Desktop:</strong> ≥ 1024px</li>
                  <li>• <strong>Large Desktop:</strong> ≥ 1280px (xl breakpoint)</li>
                </ul>
              </div>

              <div className="pt-4 border-t bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-navy-900 mb-2">💡 Mobile-First Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Touch-optimized buttons (min 44x44px)</li>
                  <li>• Smooth drawer animations</li>
                  <li>• Backdrop prevents interaction with content behind</li>
                  <li>• Collapsible search to save space</li>
                  <li>• All functionality accessible on small screens</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing Instructions */}
          <div className="mt-8 bg-primary-50 p-6 rounded-lg">
            <h3 className="font-semibold text-navy-900 mb-3">
              📱 Testing Instructions
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              To test the mobile version:
            </p>
            <ol className="text-sm text-gray-700 space-y-1 ml-4">
              <li>1. Resize your browser window to less than 1024px width</li>
              <li>2. Or use Chrome DevTools responsive mode (Cmd+Opt+I, then Cmd+Shift+M)</li>
              <li>3. Click the hamburger menu to open the navigation drawer</li>
              <li>4. Click the search icon to toggle the search bar</li>
              <li>5. Try interacting with all the mobile-optimized elements</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

