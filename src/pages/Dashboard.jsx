import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
} from 'lucide-react'

import StatCard from '../components/dashboard/StatCard'
import RevenueChart from '../components/dashboard/RevenueChart'
import UserGrowthChart from '../components/dashboard/UserGrowthChart'
import RecentTransactions from '../components/dashboard/RecentTransactions'

function Dashboard() {
  return (
    <div className="min-h-full bg-gray-100 p-6 dark:bg-gray-950">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Overview of your business performance
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change="+12.5% from last month"
          icon={DollarSign}
        />

        <StatCard
          title="Total Users"
          value="2,845"
          change="+8.2% from last month"
          icon={Users}
        />

        <StatCard
          title="Total Orders"
          value="1,248"
          change="+14.6% from last month"
          icon={ShoppingCart}
        />

        <StatCard
          title="Conversion Rate"
          value="4.82%"
          change="+2.4% from last month"
          icon={TrendingUp}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <UserGrowthChart />
      </div>

      <div className="mt-6">
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Dashboard