'use client';

import { Button, Card, Tag, IconButton } from '@/ui/atoms';
import { SearchBar } from '@/ui/molecules';
import Image from 'next/image';

export function DesignTokensPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-textDark">
            ZeoMart Design System
          </h1>
          <p className="text-lg text-textLight">
            Complete design tokens, components, and guidelines based on Figma
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-textDark">
              Color Palette
            </h2>

            <div className="space-y-8">
              {/* Primary Colors */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">
                  Primary Yellow
                </h3>
                <div className="grid grid-cols-5 gap-4">
                  <ColorSwatch color="#fefcf3" name="primary-50" />
                  <ColorSwatch color="#fef9e7" name="primary-100" />
                  <ColorSwatch color="#fdf2c4" name="primary-200" />
                  <ColorSwatch color="#fce89d" name="primary-300" />
                  <ColorSwatch color="#f8d96b" name="primary-400" />
                  <ColorSwatch color="#f5c34b" name="primary-500" primary />
                  <ColorSwatch color="#eba92f" name="primary-600" />
                  <ColorSwatch color="#d18a1f" name="primary-700" />
                  <ColorSwatch color="#a96d1d" name="primary-800" />
                  <ColorSwatch color="#89591d" name="primary-900" />
                </div>
              </div>

              {/* Purple */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">
                  Purple
                </h3>
                <div className="grid grid-cols-5 gap-4">
                  <ColorSwatch color="#f5f3fb" name="purple-50" />
                  <ColorSwatch color="#ebe6f7" name="purple-100" />
                  <ColorSwatch color="#443297" name="purple-800" primary />
                  <ColorSwatch color="#3a2a74" name="purple-900" />
                  <ColorSwatch color="#251b4f" name="purple-950" />
                </div>
              </div>

              {/* Navy */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">Navy</h3>
                <div className="grid grid-cols-5 gap-4">
                  <ColorSwatch color="#f0f5fa" name="navy-50" />
                  <ColorSwatch color="#e0ebf5" name="navy-100" />
                  <ColorSwatch color="#c1d7eb" name="navy-200" />
                  <ColorSwatch color="#92b8db" name="navy-300" />
                  <ColorSwatch color="#041e42" name="navy-900" primary />
                </div>
              </div>

              {/* Semantic Colors */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">
                  Semantic Colors
                </h3>
                <div className="grid grid-cols-5 gap-4">
                  <ColorSwatch color="#041E42" name="textDark" />
                  <ColorSwatch color="#626974" name="textLight" />
                  <ColorSwatch color="#86F1DF" name="accent-mint" />
                  <ColorSwatch color="#D6D6D6" name="accent-gray" />
                  <ColorSwatch color="#112137" name="bg-dark" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-textDark">
              Typography
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <p className="text-hero text-textDark">
                  Hero Headline (Jost 50px)
                </p>
                <code className="text-sm text-textLight mt-2 block">
                  .text-hero
                </code>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <p className="text-logo text-textDark">Logo Text (Poppins 24px)</p>
                <code className="text-sm text-textLight mt-2 block">
                  .text-logo
                </code>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <p className="text-nav text-textDark">
                  Navigation Text (Jost 16px Medium)
                </p>
                <code className="text-sm text-textLight mt-2 block">
                  .text-nav
                </code>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <p className="text-body text-textDark">
                  Body Text (Jost 15px Regular)
                </p>
                <code className="text-sm text-textLight mt-2 block">
                  .text-body
                </code>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <p className="text-tag text-textDark">Tag Text (Jost 13px)</p>
                <code className="text-sm text-textLight mt-2 block">
                  .text-tag
                </code>
              </div>
              <div>
                <p className="text-ui-label text-textDark">
                  UI Label (Inter 14px Bold)
                </p>
                <code className="text-sm text-textLight mt-2 block">
                  .text-ui-label
                </code>
              </div>
            </div>
          </Card>
        </section>

        {/* Components Section */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-textDark">
              Components
            </h2>

            <div className="space-y-12">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">
                  Buttons
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="lg">
                    Primary Button
                  </Button>
                  <Button variant="outline" size="lg">
                    Outline Button
                  </Button>
                  <IconButton ariaLabel="Previous">
                    <Image
                      src="/assets/figma/icon-arrow-prev.svg"
                      alt=""
                      width={8}
                      height={14}
                    />
                  </IconButton>
                  <IconButton ariaLabel="Next">
                    <Image
                      src="/assets/figma/icon-arrow-next.svg"
                      alt=""
                      width={8}
                      height={14}
                    />
                  </IconButton>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">Tags</h3>
                <div className="flex flex-wrap gap-4">
                  <Tag variant="mint">Limited Edition</Tag>
                  <Tag variant="purple">New Arrival</Tag>
                  <Tag variant="yellow">Hot Deal</Tag>
                  <Tag variant="default">Sale</Tag>
                </div>
              </div>

              {/* Search Bar */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">
                  Search Bar
                </h3>
                <SearchBar className="max-w-[740px]" />
              </div>

              {/* Icons */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-textDark">Icons</h3>
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/assets/figma/icon-heart.svg"
                      alt="Wishlist"
                      width={18}
                      height={16}
                    />
                    <span className="text-xs text-textLight">Wishlist</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/assets/figma/icon-profile.svg"
                      alt="Profile"
                      width={15}
                      height={19}
                    />
                    <span className="text-xs text-textLight">Profile</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/assets/figma/icon-shopping-cart-1.svg"
                      alt="Cart"
                      width={20}
                      height={20}
                    />
                    <span className="text-xs text-textLight">Cart</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/assets/figma/icon-search.svg"
                      alt="Search"
                      width={17}
                      height={17}
                    />
                    <span className="text-xs text-textLight">Search</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/assets/figma/icon-dropdown.svg"
                      alt="Dropdown"
                      width={9}
                      height={5}
                    />
                    <span className="text-xs text-textLight">Dropdown</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-textDark">
              Spacing & Layout
            </h2>
            <div className="space-y-4">
              <SpacingExample size="4px" name="xs" />
              <SpacingExample size="8px" name="sm" />
              <SpacingExample size="16px" name="md" />
              <SpacingExample size="24px" name="lg" />
              <SpacingExample size="32px" name="xl" />
            </div>
          </Card>
        </section>

        {/* Border Radius */}
        <section>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-textDark">
              Border Radius
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-primary-500 rounded-sm"></div>
                <span className="text-sm text-textDark">4px (sm)</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-primary-500 rounded-md"></div>
                <span className="text-sm text-textDark">6px (default)</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-primary-500 rounded-lg"></div>
                <span className="text-sm text-textDark">8px (lg)</span>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

// Helper Components
function ColorSwatch({
  color,
  name,
  primary = false,
}: {
  color: string;
  name: string;
  primary?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-20 rounded-md border border-gray-200 mb-2 shadow-sm"
        style={{ backgroundColor: color }}
      />
      <div className="text-xs font-mono text-textDark">{name}</div>
      <div className="text-xs text-textLight">{color}</div>
      {primary && (
        <div className="text-xs text-primary-600 font-semibold mt-1">
          ⭐ Primary
        </div>
      )}
    </div>
  );
}

function SpacingExample({ size, name }: { size: string; name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-32 text-sm text-textDark">{name}</div>
      <div
        className="bg-primary-500 rounded"
        style={{ width: size, height: '24px' }}
      />
      <div className="text-sm text-textLight">{size}</div>
    </div>
  );
}

