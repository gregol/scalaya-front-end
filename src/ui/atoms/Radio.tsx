import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const fieldId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id={fieldId}
            ref={ref}
            className={cn(
              'h-5 w-5 border-2 rounded-full transition-all duration-200',
              'text-navy-900 focus:ring-2 focus:ring-navy-500 focus:ring-offset-2',
              'checked:bg-navy-900 checked:border-navy-900',
              'hover:border-navy-600',
              error ? 'border-red-500' : 'border-gray-300',
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

Radio.displayName = 'Radio';

