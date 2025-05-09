import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const location = useLocation();

  const navigate = useNavigate();
  const { login } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        setError("Invalid Email or Password!");
      });
  };
  return (
    <div className="hero  min-h-screen">
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="fieldset space-y-3">
            <label className="label font-semibold text-xl">Email</label>
            <input
              name="email"
              required
              type="email"
              className="input border-none bg-base-300"
              placeholder="Enter your email address"
            />
            <label className="label font-semibold text-xl">Password</label>
            <input
              name="password"
              required
              type="password"
              className="input border-none bg-base-300 "
              placeholder="Enter your password"
            />
            
            {error && <p className="text-red-700 text-xs">{error}</p>}

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <h2 className="font-semibold text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary underline">
              Register
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
