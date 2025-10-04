import { cn } from '@/utils/cn';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'mint' | 'purple' | 'yellow';
  className?: string;
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  const variantStyles = {
    default: 'bg-gray-100 text-textDark',
    mint: 'bg-accent-mint text-textDark',
    purple: 'bg-purple-800 text-white',
    yellow: 'bg-primary-500 text-textDark',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-[14px] py-1 rounded-md text-tag font-jost',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

