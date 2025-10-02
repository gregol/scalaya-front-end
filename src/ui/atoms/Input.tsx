import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full rounded-md px-[15px] py-[16.5px] text-[15px] transition-all duration-200',
          'focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'font-normal',
          error
            ? 'border-2 border-red-500 bg-red-50 focus:border-red-600'
            : 'border border-[#EAEAEA] bg-white hover:border-navy-900 focus:border-navy-900',
          'text-navy-900',
          'placeholder:text-[#626974]',
          'dark:bg-gray-800 dark:border-gray-600 dark:hover:border-navy-600 dark:focus:border-navy-600 dark:text-gray-100',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';


