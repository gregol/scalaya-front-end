'use client';

import { MainFooter } from '../organisms';

export function FooterShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Area for Testing */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-navy-900">
            ScalaYa Main Footer
          </h1>
          <p className="text-lg text-gray-600">
            Complete footer with newsletter, links, contact info, and social media
          </p>

          {/* Specifications */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm text-left">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Footer Specifications
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Colors</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Background: #041E42 (Navy-900)</li>
                    <li>• Bottom Bar: #030F21 (Navy-950)</li>
                    <li>• Text: #FFFFFF (White)</li>
                    <li>• Secondary Text: #D1D5DB (Gray-300)</li>
                    <li>• Accent: #F5C34B (Primary)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Typography</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Logo: Poppins Bold 24px</li>
                    <li>• Section Titles: Jost Medium 18px</li>
                    <li>• Links: Jost Regular 14px</li>
                    <li>• Newsletter Title: Poppins Bold 24px</li>
                    <li>• Copyright: Jost Regular 14px</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Sections</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">1. Newsletter (Top)</h4>
                    <ul className="space-y-1">
                      <li>• Subscription heading</li>
                      <li>• Email input field</li>
                      <li>• Subscribe button</li>
                      <li>• Responsive 2-column layout</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">2. Company Info</h4>
                    <ul className="space-y-1">
                      <li>• Zeomart logo</li>
                      <li>• Address with icon</li>
                      <li>• Phone with icon</li>
                      <li>• Email with icon</li>
                      <li>• Social media links (4 platforms)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">3. Quick Links</h4>
                    <ul className="space-y-1">
                      <li>• About Us</li>
                      <li>• Contact Us</li>
                      <li>• Track Order</li>
                      <li>• Store Locator</li>
                      <li>• FAQs</li>
                      <li>• Privacy Policy</li>
                      <li>• Terms & Conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">4. Categories</h4>
                    <ul className="space-y-1">
                      <li>• Electronics</li>
                      <li>• Fashion</li>
                      <li>• Home & Garden</li>
                      <li>• Sports & Outdoors</li>
                      <li>• Toys & Games</li>
                      <li>• Health & Beauty</li>
                      <li>• Books & Media</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">5. Customer Service</h4>
                    <ul className="space-y-1">
                      <li>• My Account</li>
                      <li>• Order History</li>
                      <li>• Shopping Cart</li>
                      <li>• Wishlist</li>
                      <li>• Returns & Exchanges</li>
                      <li>• Shipping Information</li>
                      <li>• Gift Cards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">6. Bottom Bar</h4>
                    <ul className="space-y-1">
                      <li>• Copyright notice</li>
                      <li>• Payment method badges</li>
                      <li>• Responsive flex layout</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Interactive Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Hover effects on all links (yellow accent)</li>
                  <li>• ✅ Social media buttons with hover states</li>
                  <li>• ✅ Newsletter email input validation</li>
                  <li>• ✅ Clickable contact information</li>
                  <li>• ✅ Payment method badges</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Responsive Breakpoints</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Mobile:</strong> 1 column layout</li>
                  <li>• <strong>Tablet (sm):</strong> 2 columns</li>
                  <li>• <strong>Desktop (lg):</strong> 4 columns</li>
                  <li>• <strong>XL:</strong> Max container width with padding</li>
                </ul>
              </div>

              <div className="pt-4 border-t bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-navy-900 mb-2">💡 Design Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dark navy background for visual hierarchy</li>
                  <li>• Consistent spacing and padding</li>
                  <li>• Icon integration for contact info</li>
                  <li>• Social proof with payment methods</li>
                  <li>• Newsletter CTA at the top</li>
                  <li>• Organized link structure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing Instructions */}
          <div className="mt-8 bg-primary-50 p-6 rounded-lg">
            <h3 className="font-semibold text-navy-900 mb-3">
              🧪 Testing Instructions
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Scroll down to see the footer or navigate to any page to view it:
            </p>
            <ol className="text-sm text-gray-700 space-y-1 ml-4">
              <li>1. Footer appears at the bottom of all pages with MainLayout</li>
              <li>2. Test newsletter subscription form</li>
              <li>3. Hover over links to see accent color</li>
              <li>4. Click social media icons</li>
              <li>5. Test responsive layout at different screen sizes</li>
              <li>6. Verify all contact information is clickable</li>
            </ol>
          </div>
        </div>

        {/* Spacer to push footer down */}
        <div className="h-32"></div>
      </div>

      {/* Footer Preview */}
      <MainFooter />
    </div>
  );
}

