import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { X } from 'lucide-react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
}

export function Alert({
  variant = 'info',
  children,
  className,
  onClose,
  ...props
}: AlertProps) {
  const variants = {
    success:
      'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
    error:
      'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
    warning:
      'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200',
    info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200',
  };

  return (
    <div
      className={cn(
        'relative rounded-lg border p-4 text-sm',
        variants[variant],
        className
      )}
      role="alert"
      {...props}
    >
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:opacity-70 transition-opacity"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}


