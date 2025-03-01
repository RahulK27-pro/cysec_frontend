import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isLogin) {
      // In a real app, you would validate credentials with a backend
      // For this demo, we'll just pass the username to the parent component
      onLogin(username)
    } else {
      // In a real app, you would send the signup data to a backend
      // For this demo, we'll just switch back to login mode
      if (password !== confirmPassword) {
        alert('Passwords do not match!')
        return
      }
      setIsLogin(true)
      setPassword('')
      setConfirmPassword('')
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="container">
      <div className="form-header">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <p>{isLogin ? 'Welcome back!' : 'Create a new account'}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        
        <button type="submit" className="btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      
      <div className="form-footer">
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>
        <button type="button" onClick={toggleMode}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default LoginPage 