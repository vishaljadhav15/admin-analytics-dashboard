import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react'

import { useTheme } from '../../context/ThemeContext'

function Sidebar() {
  const { isDark, toggleTheme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      label: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
    },
    {
      label: 'Users',
      path: '/users',
      icon: Users,
    },
    {
      label: 'Analytics',
      path: '/analytics',
      icon: BarChart3,
    },
    {
      label: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ]

  const handleNavigation = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Admin Dashboard
        </h2>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 shrink-0 flex-col bg-white text-gray-900 shadow-lg transition-transform duration-300 dark:bg-gray-900 dark:text-white md:static md:z-auto md:translate-x-0 md:shadow-sm ${
          isOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        {/* Brand */}
        <div className="flex h-20 shrink-0 items-center justify-between px-6">
          <h2 className="text-xl font-bold">
            Admin Dashboard
          </h2>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  <Icon size={19} />
                  {item.label}
                </NavLink>
              )
            })}
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className="shrink-0 border-t border-gray-200 p-4 dark:border-gray-700">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}

            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar