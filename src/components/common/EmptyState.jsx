function EmptyState({
  title = 'No data found',
  message = 'There is no data to display.',
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white py-12 text-center dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {message}
      </p>
    </div>
  )
}

export default EmptyState