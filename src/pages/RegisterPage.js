import React from 'react';
import '../styles/RegisterPage.css'; // Import the CSS file

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  return (
    <div className="register-container container py-5">
      <h1 className="register-title text-center mb-4">Create an Account</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;