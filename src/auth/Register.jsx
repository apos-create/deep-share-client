import React, { useState } from 'react';
import './auth.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';
import { warnToast } from '../utils/toasts';


const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    username: ""
  });


  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  // handle input submit
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!registerData.fullName) {
      warnToast("Full Name is required");
      return;
    }

    if (!registerData.email) {
      warnToast("Email is required");
      return;
    }

    if (!registerData.password) {
      warnToast("Password is required");
      return;
    }

    if (!registerData.username) {
      warnToast("Username is required");
      return;
    }

    setIsLoading(true);

    try {
      console.log("Registering user: ", registerData);
    } catch (error) {
      console.log("register error : ", error.message);
    }
    finally {
      setTimeout(() => {
        navigate("/feeds");
        setIsLoading(false);
      }, 3000);
    }
  }

  return (

    <>

      {
        isLoading ? (<Preloader />) : (

          <div className="auth-container">
            <div className="auth-left">
              <div className="auth-left-content">
                <h1>Join Our Community</h1>
                <p>Create an account to start sharing your moments and connecting with friends.</p>
              </div>
            </div>

            <div className="auth-right">
              <div className="auth-form">
                <h2>Create your account</h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name"> <i className="fa-solid fa-user"></i> Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your full name"
                      autoComplete='off'
                      value={registerData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username"><i className="fa-solid fa-at"></i> Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Choose a username"
                      autoComplete='off'
                      value={registerData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      autoComplete='off'
                      value={registerData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password"> <i className="fa-solid fa-lock"></i> Password</label>
                    <div className="password-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Create a password"
                        autoComplete='off'
                        value={registerData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                            <line x1="1" y1="1" x2="23" y2="23"></line>
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>



                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>

                <div className="auth-footer">
                  Already have an account? <NavLink to="/login">Log in</NavLink>
                </div>
              </div>
            </div>
          </div>
        )
      }


    </>

  );
};

export default Register;