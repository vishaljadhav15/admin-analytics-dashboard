import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

import { userGrowthData } from '../../data/analyticsData'

function UserGrowthChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          User Growth
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Monthly user growth
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={userGrowthData}>
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-gray-200 dark:stroke-gray-700"
            />

            <XAxis
              dataKey="month"
              className="text-gray-500 dark:text-gray-400"
            />

            <YAxis
              className="text-gray-500 dark:text-gray-400"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="users"
              stroke="#16a34a"
              fill="#dcfce7"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UserGrowthChart