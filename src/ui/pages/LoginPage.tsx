'use client';

import Link from 'next/link';
import { LoginForm } from '../organisms';
import { ROUTES } from '@/config/constants';
import { ShoppingBag, Shield, Zap, TrendingUp } from 'lucide-react';

export function LoginPage() {
  const features = [
    {
      icon: ShoppingBag,
      text: 'Shop thousands of products',
    },
    {
      icon: Shield,
      text: 'Secure checkout process',
    },
    {
      icon: Zap,
      text: 'Fast and free shipping',
    },
    {
      icon: TrendingUp,
      text: 'Best deals and offers',
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#443297] to-navy-900 text-white p-12 flex-col justify-between">
        <div>
          {/* Logo */}
          <Link href="/">
            <h1 className="font-poppins font-bold text-4xl mb-2">ScalaYa</h1>
          </Link>
          <p className="font-jost text-lg text-gray-200">
            Your trusted online marketplace
          </p>
        </div>

        {/* Features */}
        <div className="space-y-6">
          <h2 className="font-poppins font-bold text-3xl mb-8">
            Welcome back to your shopping experience
          </h2>
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <p className="font-jost text-lg">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-sm text-gray-300 font-jost">
          © {new Date().getFullYear()} ScalaYa. All rights reserved.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white dark:bg-gray-950">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/">
              <h1 className="font-poppins font-bold text-3xl text-navy-900 dark:text-white">
                ScalaYa
              </h1>
            </Link>
          </div>

          {/* Form Header */}
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-3xl text-navy-900 dark:text-white mb-2">
              Welcome Back
            </h2>
            <p className="font-jost text-base text-gray-600 dark:text-gray-400">
              Sign in to your account to continue shopping
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Footer Links */}
          <div className="text-center">
            <p className="font-jost text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                href={ROUTES.REGISTER}
                className="font-medium text-navy-900 hover:text-primary-500 dark:text-primary-400 transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


