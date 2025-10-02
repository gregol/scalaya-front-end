import { SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options?: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'w-full appearance-none rounded-md px-[15px] py-[16.5px] pr-10 text-[15px] transition-all duration-200',
            'focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            'font-normal',
            error
              ? 'border-2 border-red-500 bg-red-50 focus:border-red-600'
              : 'border border-[#EAEAEA] bg-white hover:border-navy-900 focus:border-navy-900',
            'text-navy-900',
            'dark:bg-gray-800 dark:border-gray-600 dark:hover:border-navy-600 dark:focus:border-navy-600 dark:text-gray-100',
            'cursor-pointer',
            className
          )}
          {...props}
        >
          {options ? (
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          ) : (
            children
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

