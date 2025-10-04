import Link from 'next/link';
import type { Route } from 'next';

interface MenuItem {
  label: string;
  href: string;
}

interface MegaMenuColumnProps {
  title: string;
  items: MenuItem[];
}

export function MegaMenuColumn({ title, items }: MegaMenuColumnProps) {
  return (
    <div className="flex flex-col">
      {/* Column Title */}
      <h3 className="text-lg font-medium text-textDark mb-[10px] font-jost">
        {title}
      </h3>
      
      {/* Column Links */}
      <nav className="flex flex-col">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href as Route}
            className="text-[16px] leading-[35px] font-normal font-jost text-textDark hover:text-primary-500 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

