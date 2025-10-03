'use client';

import { CategorySection } from '../organisms';
import { Card } from '../atoms';

export function CategoriesShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold text-navy-900">
              ScalaYa Categories
            </h1>
            <p className="text-lg text-gray-600">
              Browse products by category with beautiful card layouts
            </p>
          </div>
        </div>
      </div>

      {/* Category Section Showcase */}
      <CategorySection />

      {/* Specifications */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Category Section Specifications
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Layout</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Responsive grid layout</li>
                    <li>• 2 columns (mobile)</li>
                    <li>• 3 columns (sm)</li>
                    <li>• 4 columns (md)</li>
                    <li>• 6 columns (lg+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Typography</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Title: Poppins Bold 30px</li>
                    <li>• Subtitle: Jost Regular 16px</li>
                    <li>• Category: Jost Medium 14px</li>
                    <li>• Count: Jost Regular 12px</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">Interactive Elements</h4>
                    <ul className="space-y-1">
                      <li>• ✅ Hover effects (lift + shadow)</li>
                      <li>• ✅ Icon scale animation</li>
                      <li>• ✅ Border color change</li>
                      <li>• ✅ Smooth transitions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2">Categories</h4>
                    <ul className="space-y-1">
                      <li>• Electronics (245 products)</li>
                      <li>• Fashion (389 products)</li>
                      <li>• Home & Garden (156 products)</li>
                      <li>• Sports (198 products)</li>
                      <li>• Gaming (287 products)</li>
                      <li>• Health & Beauty (421 products)</li>
                      <li>• Books (534 products)</li>
                      <li>• Smartphones (176 products)</li>
                      <li>• Watches (98 products)</li>
                      <li>• Audio (234 products)</li>
                      <li>• Cameras (145 products)</li>
                      <li>• Baby Products (267 products)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Icon Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                    <span className="text-xs text-gray-600">Electronics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100"></div>
                    <span className="text-xs text-gray-600">Fashion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100"></div>
                    <span className="text-xs text-gray-600">Home</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                    <span className="text-xs text-gray-600">Sports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100"></div>
                    <span className="text-xs text-gray-600">Gaming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100"></div>
                    <span className="text-xs text-gray-600">Health</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100"></div>
                    <span className="text-xs text-gray-600">Books</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-100"></div>
                    <span className="text-xs text-gray-600">Phones</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-navy-900 mb-2">💡 Design Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Colorful icon backgrounds for visual distinction</li>
                  <li>• Product count for each category</li>
                  <li>• Smooth hover animations</li>
                  <li>• Fully responsive grid</li>
                  <li>• &quot;View All Categories&quot; link</li>
                  <li>• Accessible keyboard navigation</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-navy-900 mb-3">Props</h3>
                <div className="bg-gray-50 p-4 rounded-md font-mono text-xs">
                  <div className="space-y-2">
                    <div>
                      <span className="text-purple-600">title?:</span>{' '}
                      <span className="text-blue-600">string</span>
                      {/* <span className="text-gray-500"> // Default: "Shop by Category"</span> */}
                    </div>
                    <div>
                      <span className="text-purple-600">subtitle?:</span>{' '}
                      <span className="text-blue-600">string</span>
                      {/* <span className="text-gray-500"> // Default: "Browse our..."</span> */}
                    </div>
                    <div>
                      <span className="text-purple-600">variant?:</span>{' '}
                      <span className="text-blue-600">&apos;grid&apos; | &apos;slider&apos;</span>
                      {/* <span className="text-gray-500"> // Default: 'grid'</span> */}
                    </div>
                    <div>
                      <span className="text-purple-600">itemsToShow?:</span>{' '}
                      <span className="text-blue-600">number</span>
                      {/* <span className="text-gray-500"> // Default: 12</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

