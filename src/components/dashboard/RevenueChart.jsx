import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

import { revenueData } from '../../data/analyticsData'

function RevenueChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue Overview
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Monthly revenue performance
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-gray-200 dark:stroke-gray-700"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: 'currentColor' }}
              className="text-gray-500 dark:text-gray-400"
            />

            <YAxis
              tick={{ fill: 'currentColor' }}
              className="text-gray-500 dark:text-gray-400"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart