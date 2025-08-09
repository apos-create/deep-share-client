import React, { useState } from 'react';
import './auth.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("login successfully! : ", loginData);
    } catch (error) {
      console.log("login error : ", error.message);
    }
    finally {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/feeds");
      }, 3000);
    }
  };

  return (
    <>

      {
        isLoading ? (<Preloader />) : (
          <div className="auth-container">
            <div className="auth-left">
              <div className="auth-left-content">
                <h1>Welcome Back</h1>
                <p>Connect with friends and share your moments on our social platform.</p>
              </div>
            </div>

            <div className="auth-right">
              <div className="auth-form">
                <h2>Login to your account</h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      autoComplete='off'
                      value={loginData.email}
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
                        placeholder="Enter your password"
                        autoComplete='off'
                        value={loginData.password}
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
                    Login
                  </button>
                </form>

                <div className="divider">
                  <span className="divider-text">OR</span>
                </div>



                <div className="auth-footer">
                  Don't have an account? <NavLink to="/register">Sign up</NavLink>
                </div>
              </div>
            </div>
          </div>

        )
      }



    </>

  );
};

export default Login;