import { transactionsData } from '../../data/analyticsData'

function RecentTransactions() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Transactions
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Latest customer transactions
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3 font-medium">Transaction</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactionsData.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-gray-100 last:border-0 dark:border-gray-800"
              >
                <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                  {transaction.id}
                </td>

                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {transaction.customer}
                </td>

                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {transaction.product}
                </td>

                <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                  ${transaction.amount}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : transaction.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-gray-500 dark:text-gray-400">
                  {transaction.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentTransactions