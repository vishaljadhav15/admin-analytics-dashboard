import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts'

const orderData = [
  { name: 'Completed', value: 680 },
  { name: 'Pending', value: 320 },
  { name: 'Cancelled', value: 148 },
]

const chartColors = ['#16a34a', '#f59e0b', '#dc2626']

function OrderDistributionChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Order Distribution
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current order status distribution
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {orderData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={chartColors[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OrderDistributionChart