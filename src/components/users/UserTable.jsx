import { Pencil, Trash2 } from 'lucide-react'

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-sm text-gray-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
            <th className="px-5 py-4 font-medium">
              Name
            </th>

            <th className="px-5 py-4 font-medium">
              Email
            </th>

            <th className="px-5 py-4 font-medium">
              Role
            </th>

            <th className="px-5 py-4 font-medium">
              Status
            </th>

            <th className="px-5 py-4 font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-100 last:border-0 dark:border-gray-800"
              >
                <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">
                  {user.name}
                </td>

                <td className="px-5 py-4 text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>

                <td className="px-5 py-4 text-gray-600 dark:text-gray-300">
                  {user.role}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onEdit(user)}
                      className="text-blue-600 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      title="Edit user"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(user.id)}
                      className="text-red-600 transition hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      title="Delete user"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-5 py-10 text-center text-gray-500 dark:text-gray-400"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable