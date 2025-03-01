import PropTypes from 'prop-types'

const HomePage = ({ username }) => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>Hello, {username}! You have successfully logged in.</p>
      <p>This is a simple demonstration of a React login page with routing.</p>
    </div>
  )
}

HomePage.propTypes = {
  username: PropTypes.string.isRequired
}

export default HomePage 