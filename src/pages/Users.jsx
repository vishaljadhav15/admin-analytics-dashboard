import { useState } from 'react'
import { useUsers } from '../context/UserContext'
import UserTable from '../components/users/UserTable'
import UserForm from '../components/users/UserForm'
import Loader from '../components/common/Loader'
import EmptyState from '../components/common/EmptyState'
import ErrorMessage from '../components/common/ErrorMessage'

function Users() {
  const { users, loading, error, deleteUser } = useUsers()

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const usersPerPage = 5

  // Search + Status Filter
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase()

    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)

    const matchesStatus =
      statusFilter === 'All' ||
      user.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === 'name-asc') {
      return a.name.localeCompare(b.name)
    }

    if (sortOrder === 'name-desc') {
      return b.name.localeCompare(a.name)
    }

    return 0
  })

  // Pagination
  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  )

  const startIndex = (currentPage - 1) * usersPerPage

  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + usersPerPage
  )

  // Search Handler
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  // Status Filter Handler
  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value)
    setCurrentPage(1)
  }

  // Sort Handler
  const handleSortChange = (event) => {
    setSortOrder(event.target.value)
    setCurrentPage(1)
  }

  // Add User
  const handleAddUser = () => {
    setSelectedUser(null)
    setIsFormOpen(true)
  }

  // Edit User
  const handleEditUser = (user) => {
    setSelectedUser(user)
    setIsFormOpen(true)
  }

  // Delete User
  const handleDeleteUser = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user?'
    )

    if (confirmed) {
      deleteUser(id)

      if (
        paginatedUsers.length === 1 &&
        currentPage > 1
      ) {
        setCurrentPage((page) => page - 1)
      }
    }
  }

  // Close Form
  const handleCloseForm = () => {
    setIsFormOpen(false)
    setSelectedUser(null)
  }

  return (
    <div className="min-h-full bg-gray-100 p-6 dark:bg-gray-950">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Users
          </h1>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Manage users and their account information.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddUser}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + Add User
        </button>
      </div>

      {/* Search, Filter & Sort */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 sm:max-w-md"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        >
          <option value="default">Sort By</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>

      </div>

      {/* Loading State */}
      {loading && (
        <Loader message="Loading users..." />
      )}

      {/* Error State */}
      {!loading && error && (
        <ErrorMessage message={error} />
      )}

      {/* Users Content */}
      {!loading && !error && (
        <>
          {/* Results Count */}
          <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            Showing {paginatedUsers.length} of {sortedUsers.length} users
          </div>

          {/* Empty State / Table */}
          {paginatedUsers.length === 0 ? (
            <EmptyState
              title="No users found"
              message="Try changing your search or filter."
            />
          ) : (
            <UserTable
              users={paginatedUsers}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-5 flex items-center justify-between">

              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((page) => page - 1)
                }
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Previous
              </button>

              <span className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) => page + 1)
                }
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Next
              </button>

            </div>
          )}
        </>
      )}

      {/* Add / Edit Modal */}
      {isFormOpen && (
        <UserForm
          user={selectedUser}
          onClose={handleCloseForm}
        />
      )}

    </div>
  )
}

export default Users