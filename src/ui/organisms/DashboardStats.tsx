import { Card, Badge } from '../atoms';
import { Activity, Users, TrendingUp, DollarSign } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      label: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      trend: 'up' as const,
    },
    {
      label: 'Active Sessions',
      value: '1,832',
      change: '+5.2%',
      icon: Activity,
      trend: 'up' as const,
    },
    {
      label: 'Revenue',
      value: '$45,231',
      change: '+23.1%',
      icon: DollarSign,
      trend: 'up' as const,
    },
    {
      label: 'Growth',
      value: '18.2%',
      change: '+2.4%',
      icon: TrendingUp,
      trend: 'up' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} variant="bordered">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <Badge
                  variant={stat.trend === 'up' ? 'success' : 'error'}
                  className="mt-2"
                >
                  {stat.change}
                </Badge>
              </div>
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}


