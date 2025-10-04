import Link from 'next/link';
import { Button, Card } from '../atoms';
import { HeroSlider, ZeoMartHeader } from '../organisms';
import { ROUTES, APP_NAME } from '@/config/constants';
import { ArrowRight, Check, Zap, Shield, Sparkles } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with Next.js 14 and optimized for performance',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security with NextAuth integration',
    },
    {
      icon: Sparkles,
      title: 'Modern Stack',
      description: 'TypeScript, TailwindCSS, and Clean Architecture',
    },
  ];

  const heroSlides = [
    {
      id: 1,
      tag: 'Limited Edition',
      title: 'Sport Essentials \nYoga Mats, Weights \n& more',
      description: 'Discover our new items. Up to 25% Off !',
      ctaText: 'Shop Now',
      ctaHref: ROUTES.PRODUCTS,
      backgroundImage: '/assets/figma/hero-sport-equipment.png',
    },
    {
      id: 2,
      tag: 'New Arrival',
      title: 'Premium Fitness \nEquipment Collection',
      description: 'Get fit with our latest collection. Free shipping!',
      ctaText: 'Shop Now',
      ctaHref: ROUTES.PRODUCTS,
      backgroundImage: '/assets/figma/hero-sport-equipment.png',
    },
    {
      id: 3,
      tag: 'Hot Deal',
      title: 'Summer Sale \nUp to 40% Off',
      description: 'Limited time offer on selected items.',
      ctaText: 'Shop Now',
      ctaHref: ROUTES.PRODUCTS,
      backgroundImage: '/assets/figma/hero-sport-equipment.png',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ZeoMart Header */}
      <ZeoMartHeader cartCount={2} cartTotal="$200.99" wishlistCount={5} />
      
      <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      
      {/* Hero Slider - ZeoMart Design */}
      <section className="max-w-[1920px] mx-auto pt-8">
        <HeroSlider slides={heroSlides} autoPlay />
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6 animate-fade-in">
          Welcome to{' '}
          <span className="text-primary-500 dark:text-primary-400">
            {APP_NAME}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in">
          A production-ready Next.js application with Clean Architecture,
          TypeScript, and modern best practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in">
          <Link href={ROUTES.REGISTER}>
            <Button size="lg" shape="pill" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href={ROUTES.LOGIN}>
            <Button size="lg" variant="outline" shape="pill">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} variant="bordered" className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card variant="elevated" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Next.js 14 App Router',
              'TypeScript (strict mode)',
              'TailwindCSS',
              'NextAuth.js',
              'Jotai State Management',
              'Zod Validation',
              'React Hook Form',
              'Clean Architecture',
            ].map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Create your account and start building amazing applications.
        </p>
        <Link href={ROUTES.REGISTER}>
          <Button size="lg" shape="pill">
            Create Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
      </div>
    </div>
  );
}


