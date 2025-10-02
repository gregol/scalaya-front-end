'use client';

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button, Input } from '../atoms';
import { cn } from '@/utils/cn';

export interface MainFooterProps {
  className?: string;
}

export function MainFooter({ className }: MainFooterProps) {
  return (
    <footer className={cn('bg-navy-900 text-white', className)}>
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 xl:px-[260px] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter Title */}
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="font-jost text-base text-gray-300">
                Get all the latest information on Events, Sales and Offers.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 hover:border-primary-500 focus:border-primary-500"
              />
              <Button variant="primary" size="md" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 xl:px-[260px] py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div>
              <h2 className="font-poppins font-bold text-2xl mb-6">ScalaYa</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500" />
                  <p className="font-jost text-sm text-gray-300">
                    1234 Street Name, City Name,
                    <br />
                    United States
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary-500" />
                  <a
                    href="tel:+1234567890"
                    className="font-jost text-sm text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary-500" />
                  <a
                    href="mailto:support@scalaya.com"
                    className="font-jost text-sm text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    support@scalaya.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-jost font-medium text-base mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label="Youtube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-jost font-medium text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Contact Us',
                  'Track Order',
                  'Store Locator',
                  'FAQs',
                  'Privacy Policy',
                  'Terms & Conditions',
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-jost text-sm text-gray-300 hover:text-primary-500 transition-colors inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-jost font-medium text-lg mb-6">Categories</h4>
              <ul className="space-y-3">
                {[
                  'Electronics',
                  'Fashion',
                  'Home & Garden',
                  'Sports & Outdoors',
                  'Toys & Games',
                  'Health & Beauty',
                  'Books & Media',
                ].map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="font-jost text-sm text-gray-300 hover:text-primary-500 transition-colors inline-block"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-jost font-medium text-lg mb-6">Customer Service</h4>
              <ul className="space-y-3">
                {[
                  'My Account',
                  'Order History',
                  'Shopping Cart',
                  'Wishlist',
                  'Returns & Exchanges',
                  'Shipping Information',
                  'Gift Cards',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="font-jost text-sm text-gray-300 hover:text-primary-500 transition-colors inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-navy-950">
        <div className="container mx-auto px-4 xl:px-[260px] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="font-jost text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} ScalaYa. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="font-jost text-sm text-gray-400 mr-2">We Accept:</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1.5 bg-white rounded text-xs font-semibold text-navy-900"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

