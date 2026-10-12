import RevenueChart from '../components/dashboard/RevenueChart'
import UserGrowthChart from '../components/dashboard/UserGrowthChart'
import OrderDistributionChart from '../components/dashboard/OrderDistributionChart'

function Analytics() {
  return (
    <div className="min-h-full bg-gray-100 p-6 dark:bg-gray-950">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Analytics
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Analyze your business performance and growth.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <UserGrowthChart />
      </div>

      <div className="mt-6">
        <OrderDistributionChart />
      </div>
    </div>
  )
}

export default Analytics