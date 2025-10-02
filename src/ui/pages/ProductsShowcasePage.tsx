'use client';

import { Card } from '../atoms';
import { ProductCard, ProductCardHorizontal, ProductCardDeal } from '../organisms';
import { MainLayout } from '../templates';

export function ProductsShowcasePage() {
  const mockProduct = {
    id: '1',
    brand: 'SONY',
    title: 'Shure SRH440 Professional Studio Headphones',
    price: 32.50,
    originalPrice: 45.00,
    discount: 20,
    rating: 4.5,
    reviewCount: 3014,
    image: '/placeholder-product.jpg',
    features: [
      '16-core Neural Engine for advanced machine learning',
      '8GB of unified memory so everything you do is fast and fluid',
      '256GB of super-fast SSD storage launches apps and opens files',
      '7-core GPU with up to 5 times faster graphics for graphics-intensive',
    ],
  };

  const handleAddToCart = (id: string) => {
    console.log('Add to cart:', id);
  };

  const handleToggleWishlist = (id: string) => {
    console.log('Toggle wishlist:', id);
  };

  const handleQuickView = (id: string) => {
    console.log('Quick view:', id);
  };

  const handleCompare = (id: string) => {
    console.log('Compare:', id);
  };

  return (
    <MainLayout cartCount={2} cartTotal="$200.99">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-2">
            ScalaYa Products
          </h1>
          <p className="text-gray-600">Product Cards Design System</p>
        </div>

        {/* Vertical Product Cards */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Vertical Product Cards
          </h2>
          <div className="flex flex-wrap gap-6">
            <ProductCard
              {...mockProduct}
              size="default"
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleQuickView}
              onCompare={handleCompare}
            />
            <ProductCard
              {...mockProduct}
              size="small"
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleQuickView}
              onCompare={handleCompare}
            />
            <ProductCard
              {...mockProduct}
              size="mobile"
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleQuickView}
              onCompare={handleCompare}
            />
          </div>
        </Card>

        {/* Deal Product Card */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Deal Product Card (with Progress Bar)
          </h2>
          <div className="flex flex-wrap gap-6">
            <ProductCardDeal
              {...mockProduct}
              soldCount={56}
              totalStock={100}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleQuickView}
              onCompare={handleCompare}
            />
          </div>
        </Card>

        {/* Horizontal Product Card */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Horizontal Product Card (List View)
          </h2>
          <div className="space-y-4">
            <ProductCardHorizontal
              {...mockProduct}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onCompare={handleCompare}
            />
            <ProductCardHorizontal
              id="2"
              brand="Lenovo"
              title='Lenovo IdeaPad 3 15.6" Laptop - Sand (Intel Core i7-1165G7/512GB SSD/12GB RAM/Windows 11)'
              price={899.99}
              originalPrice={1099.99}
              rating={4.7}
              reviewCount={1542}
              image="/placeholder-product.jpg"
              features={[
                '16-core Neural Engine for advanced machine learning',
                '8GB of unified memory so everything you do is fast and fluid',
                '256GB of super-fast SSD storage launches apps and opens files',
                '7-core GPU with up to 5 times faster graphics',
              ]}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onCompare={handleCompare}
            />
          </div>
        </Card>

        {/* Grid Example */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Product Grid Example
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCard
                key={index}
                {...mockProduct}
                id={`product-${index}`}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={handleQuickView}
                onCompare={handleCompare}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
    </MainLayout>
  );
}

