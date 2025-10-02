import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full rounded-md px-5 py-5 text-[15px] leading-7 transition-all duration-200',
          'focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'font-normal',
          'resize-vertical min-h-[257px]',
          error
            ? 'border-2 border-red-500 bg-red-50 focus:border-red-600'
            : 'border border-[#EAEAEA] bg-white hover:border-navy-900 focus:border-navy-900',
          'text-navy-900',
          'placeholder:text-[#626974]',
          'dark:bg-gray-800 dark:border-gray-600 dark:hover:border-navy-600 dark:focus:border-navy-600 dark:text-gray-100',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

