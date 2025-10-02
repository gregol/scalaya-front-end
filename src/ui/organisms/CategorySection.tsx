'use client';

import { Card } from '../atoms';
import { 
  Laptop, 
  Shirt, 
  Home, 
  Dumbbell, 
  Gamepad2, 
  Heart, 
  Book, 
  Smartphone,
  Watch,
  Headphones,
  Camera,
  Baby
} from 'lucide-react';
import { cn } from '@/utils/cn';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count?: number;
  color?: string;
}

export interface CategorySectionProps {
  title?: string;
  subtitle?: string;
  itemsToShow?: number;
}

const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: Laptop, count: 245, color: 'bg-blue-100 text-blue-600' },
  { id: 'fashion', name: 'Fashion', icon: Shirt, count: 389, color: 'bg-pink-100 text-pink-600' },
  { id: 'home', name: 'Home & Garden', icon: Home, count: 156, color: 'bg-green-100 text-green-600' },
  { id: 'sports', name: 'Sports', icon: Dumbbell, count: 198, color: 'bg-orange-100 text-orange-600' },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2, count: 287, color: 'bg-purple-100 text-purple-600' },
  { id: 'health', name: 'Health & Beauty', icon: Heart, count: 421, color: 'bg-red-100 text-red-600' },
  { id: 'books', name: 'Books', icon: Book, count: 534, color: 'bg-amber-100 text-amber-600' },
  { id: 'phones', name: 'Smartphones', icon: Smartphone, count: 176, color: 'bg-cyan-100 text-cyan-600' },
  { id: 'watches', name: 'Watches', icon: Watch, count: 98, color: 'bg-indigo-100 text-indigo-600' },
  { id: 'audio', name: 'Audio', icon: Headphones, count: 234, color: 'bg-teal-100 text-teal-600' },
  { id: 'cameras', name: 'Cameras', icon: Camera, count: 145, color: 'bg-emerald-100 text-emerald-600' },
  { id: 'baby', name: 'Baby Products', icon: Baby, count: 267, color: 'bg-rose-100 text-rose-600' },
];

export function CategorySection({
  title = 'Shop by Category',
  subtitle = 'Browse our wide range of product categories',
  itemsToShow = 12,
}: CategorySectionProps) {
  const displayCategories = categories.slice(0, itemsToShow);

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 xl:px-[260px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-poppins font-bold text-3xl text-navy-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="font-jost text-base text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayCategories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href={`/category/${category.id}`}
                className="group"
              >
                <Card
                  variant="bordered"
                  className={cn(
                    'p-6 text-center transition-all duration-300',
                    'hover:shadow-lg hover:border-primary-500 hover:-translate-y-1',
                    'cursor-pointer'
                  )}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={cn(
                        'w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300',
                        'group-hover:scale-110',
                        category.color
                      )}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-jost font-medium text-sm text-navy-900 dark:text-white mb-1">
                    {category.name}
                  </h3>

                  {/* Count */}
                  {category.count && (
                    <p className="font-jost text-xs text-gray-500 dark:text-gray-400">
                      {category.count} Products
                    </p>
                  )}
                </Card>
              </a>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="/categories"
            className="inline-block font-jost font-medium text-base text-navy-900 hover:text-primary-500 dark:text-primary-400 transition-colors"
          >
            View All Categories →
          </a>
        </div>
      </div>
    </section>
  );
}

