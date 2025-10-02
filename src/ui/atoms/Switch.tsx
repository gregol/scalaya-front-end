'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, id, checked, ...props }, ref) => {
    const fieldId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          className={cn(
            'relative inline-flex h-[30px] w-[55px] items-center rounded-full transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2',
            checked ? 'bg-navy-900' : 'bg-[#F3F5F6]',
            className
          )}
          onClick={(e) => {
            const input = e.currentTarget.querySelector('input');
            input?.click();
          }}
        >
          <input
            type="checkbox"
            id={fieldId}
            ref={ref}
            checked={checked}
            className="sr-only"
            {...props}
          />
          <span
            className={cn(
              'inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200',
              checked ? 'translate-x-[27px]' : 'translate-x-[3px]'
            )}
          />
        </button>
        {label && (
          <label
            htmlFor={fieldId}
            className="text-base text-navy-900 dark:text-gray-300 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

