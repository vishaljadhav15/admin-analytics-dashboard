import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Settings() {
  const { isDark, toggleTheme } = useTheme()

  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
  })

  const [notifications, setNotifications] = useState({
    email: true,
    reports: true,
    updates: false,
  })

  const handleProfileChange = (event) => {
    const { name, value } = event.target

    setProfile((currentProfile) => ({
      ...currentProfile,
      [name]: value,
    }))
  }

  const handleNotificationChange = (event) => {
    const { name, checked } = event.target

    setNotifications((currentNotifications) => ({
      ...currentNotifications,
      [name]: checked,
    }))
  }

  const handleSaveProfile = (event) => {
    event.preventDefault()

    alert('Profile settings saved successfully.')
  }

  return (
    <div className="min-h-full bg-gray-100 p-6 dark:bg-gray-950">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Manage your profile and application preferences.
        </p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* Profile */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profile
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update your basic account information.
            </p>
          </div>

          <form
            onSubmit={handleSaveProfile}
            className="space-y-5"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Notifications */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notifications
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose which notifications you want to receive.
            </p>
          </div>

          <div className="space-y-4">
            <label className="flex cursor-pointer items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Email Notifications
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive important updates by email.
                </p>
              </div>

              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
                className="h-4 w-4 accent-blue-600"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Weekly Reports
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive weekly analytics reports.
                </p>
              </div>

              <input
                type="checkbox"
                name="reports"
                checked={notifications.reports}
                onChange={handleNotificationChange}
                className="h-4 w-4 accent-blue-600"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Product Updates
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive information about new features.
                </p>
              </div>

              <input
                type="checkbox"
                name="updates"
                checked={notifications.updates}
                onChange={handleNotificationChange}
                className="h-4 w-4 accent-blue-600"
              />
            </label>
          </div>
        </section>

        {/* Preferences */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Preferences
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Customize your dashboard experience.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Appearance
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Currently using {isDark ? 'dark' : 'light'} mode.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Switch to {isDark ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Settings