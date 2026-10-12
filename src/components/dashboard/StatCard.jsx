function StatCard({ title, value, change, icon: Icon }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </h3>

          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            {change}
          </p>
        </div>

        {Icon && (
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <Icon
              size={22}
              className="text-gray-700 dark:text-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default StatCard