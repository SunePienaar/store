import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [username, setUsername] = useState(''); // State to store the username
  const navigate = useNavigate(); // React Router's navigation hook

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      alert('Please enter your username.');
      return;
    }
    // Redirect to the home page and pass the username
    navigate('/', { state: { username } });
  };

  return (
    <div className="login-container container py-5">
      <h1 className="login-title text-center mb-4">Welcome Back</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;