import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App