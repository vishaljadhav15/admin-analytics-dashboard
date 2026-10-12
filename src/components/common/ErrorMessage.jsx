function ErrorMessage({
  message = 'Something went wrong.',
}) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 dark:border-red-900/50 dark:bg-red-900/20">
      <p className="text-sm font-medium text-red-700 dark:text-red-400">
        {message}
      </p>
    </div>
  )
}

export default ErrorMessage