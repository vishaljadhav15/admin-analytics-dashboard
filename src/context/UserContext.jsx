import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { initialUsers } from '../data/usersData'
import { fetchUsers } from '../services/userService'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [users, setUsers] = useState(initialUsers)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true)
        setError('')

        const apiUsers = await fetchUsers()

        const formattedUsers = apiUsers.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: 'Developer',
          status: 'Active',
        }))

        setUsers(formattedUsers)
      } catch (error) {
        console.error('Failed to fetch users:', error)

        setError(
          'Unable to load users from the API. Showing local data.'
        )

        setUsers(initialUsers)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const addUser = (user) => {
    setUsers((currentUsers) => [
      ...currentUsers,
      {
        ...user,
        id: Date.now(),
      },
    ])
  }

  const updateUser = (updatedUser) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    )
  }

  const deleteUser = (id) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    )
  }

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUsers() {
  return useContext(UserContext)
}