import { useState } from 'react'
import './styles.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = (user) => {
    setUsername(user)
    setIsLoggedIn(true)
  }

  return (
    <>
      {isLoggedIn ? (
        <HomePage username={username} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  )
}

export default App
