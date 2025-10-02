'use client';

import { useState } from 'react';
import { Button, Card, Input, Select, Textarea, Switch } from '../atoms';
import { Checkbox } from '../molecules';
import { MainLayout } from '../templates';

export function DesignSystemPage() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');

  return (
    <MainLayout cartCount={2} cartTotal="$200.99">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-2">
            ScalaYa Design System
          </h1>
          <p className="text-gray-600">Complete Design System Showcase</p>
        </div>

        {/* Primary Buttons - Default Shape */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Primary Buttons (Default Shape)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Shop Now
            </Button>
            <Button variant="primary" size="md">
              Shop Now
            </Button>
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </div>
        </Card>

        {/* Primary Buttons - Pill Shape */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Primary Buttons (Pill Shape)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" shape="pill" size="sm">
              Shop Now
            </Button>
            <Button variant="primary" shape="pill" size="md">
              Shop Now
            </Button>
            <Button variant="primary" shape="pill" size="lg">
              Shop Now
            </Button>
          </div>
        </Card>

        {/* Outline Buttons - Default Shape */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Outline Buttons (Default Shape)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="sm">
              Shop Now
            </Button>
            <Button variant="outline" size="md">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              Shop Now
            </Button>
          </div>
        </Card>

        {/* Outline Buttons - Pill Shape */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Outline Buttons (Pill Shape)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" shape="pill" size="sm">
              Shop Now
            </Button>
            <Button variant="outline" shape="pill" size="md">
              Shop Now
            </Button>
            <Button variant="outline" shape="pill" size="lg">
              Shop Now
            </Button>
          </div>
        </Card>

        {/* Link Buttons */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Link Buttons (Text Style)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="link" size="sm">
              Shop Now
            </Button>
            <Button variant="link" size="md">
              Shop Now
            </Button>
            <Button variant="link" size="lg">
              Shop Now
            </Button>
          </div>
        </Card>

        {/* Loading States */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Loading States
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" isLoading>
              Shop Now
            </Button>
            <Button variant="primary" shape="pill" isLoading>
              Shop Now
            </Button>
            <Button variant="outline" isLoading>
              Shop Now
            </Button>
          </div>
        </Card>

        {/* Color Palette */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Color Palette - Primary (Golden)
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
              <div key={shade} className="text-center">
                <div
                  className={`h-20 rounded-lg mb-2 bg-primary-${shade} border border-gray-200`}
                />
                <p className="text-sm font-medium text-gray-700">{shade}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Navy Palette */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Color Palette - Navy (Text)
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
              <div key={shade} className="text-center">
                <div
                  className={`h-20 rounded-lg mb-2 bg-navy-${shade} border border-gray-200`}
                />
                <p className="text-sm font-medium text-gray-700">{shade}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Form Elements */}
        <Card variant="elevated" className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Form Components
          </h2>
          <div className="space-y-8 max-w-2xl">
            {/* Input */}
            <div>
              <div className="mb-2">
                <h3 className="text-base font-medium text-navy-900">Input</h3>
              </div>
              <div className="space-y-4">
                <Input placeholder="Your Name" />
              </div>
              <div className="mt-6 mb-2">
                <h3 className="text-base font-medium text-navy-900">Hover</h3>
              </div>
              <Input placeholder="Your Name" className="border-navy-900" />
            </div>

            {/* Select/Dropdown */}
            <div>
              <div className="mb-2">
                <h3 className="text-base font-medium text-navy-900">Dropdown</h3>
              </div>
              <div className="space-y-4">
                <Select>
                  <option value="">Select</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Select>
              </div>
              <div className="mt-6 mb-2">
                <h3 className="text-base font-medium text-navy-900">Dropdown Hover</h3>
              </div>
              <Select className="border-navy-900">
                <option value="">Select</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </Select>
            </div>

            {/* Textarea */}
            <div>
              <div className="mb-2">
                <h3 className="text-base font-medium text-navy-900">Textarea</h3>
              </div>
              <Textarea 
                defaultValue="Beautiful super large botanical garden - amazing it's in NYC. Getting into the garden with my voucher was easy and seamless! Just went up to the ticket counter and went right in." 
                className="max-w-[850px]"
              />
            </div>

            {/* Checkbox and Radio */}
            <div>
              <h3 className="text-base font-medium text-navy-900 mb-4">
                Checkbox & Radio
              </h3>
              <div className="flex gap-12">
                <div className="flex gap-4">
                  <Checkbox
                    variant="checkbox"
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                  />
                  <Checkbox variant="checkbox" checked readOnly />
                </div>
                <div className="flex gap-4">
                  <Checkbox
                    variant="radio"
                    name="radio-group"
                    value="option1"
                    checked={radioValue === 'option1'}
                    onChange={() => setRadioValue('option1')}
                  />
                  <Checkbox
                    variant="radio"
                    name="radio-group"
                    value="option2"
                    checked={radioValue === 'option2'}
                    onChange={() => setRadioValue('option2')}
                  />
                </div>
              </div>
            </div>

            {/* Switch/Toggle */}
            <div>
              <h3 className="text-base font-medium text-navy-900 mb-4">Switch</h3>
              <div className="flex gap-6">
                <Switch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
                <Switch checked readOnly />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    </MainLayout>
  );
}

