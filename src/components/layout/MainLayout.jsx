import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-950">
      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto pt-16 md:pt-0">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout