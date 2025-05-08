import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Login your account
          </h2>
          <fieldset className="fieldset space-y-3">
            <label className="label font-semibold text-xl">Email</label>
            <input
              type="email"
              className="input border-none bg-base-300"
              placeholder="Enter your email address"
            />
            <label className="label font-semibold text-xl">Password</label>
            <input
              type="password"
              className="input border-none bg-base-300 "
              placeholder="Enter your password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <h2 className="font-semibold text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
