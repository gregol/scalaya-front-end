import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  error?: string;
  variant?: 'checkbox' | 'radio';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, variant = 'checkbox', ...props }, ref) => {
    const fieldId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    const inputType = variant === 'radio' ? 'radio' : 'checkbox';

    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <input
            type={inputType}
            id={fieldId}
            ref={ref}
            className={cn(
              'h-4 w-4 border-2 transition-all duration-200',
              'text-navy-900 focus:ring-2 focus:ring-navy-500 focus:ring-offset-2',
              'checked:bg-navy-900 checked:border-navy-900',
              'hover:border-navy-800',
              variant === 'radio' ? 'rounded-full' : 'rounded',
              error ? 'border-red-500' : 'border-navy-900',
              'cursor-pointer',
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={fieldId}
              className="text-base text-navy-900 dark:text-gray-300 cursor-pointer select-none"
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 ml-7" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';


