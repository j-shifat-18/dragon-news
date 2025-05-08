import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Register your account
          </h2>
          <fieldset className="fieldset space-y-3">
            {/* name */}
            <label className="label font-semibold text-xl">Name</label>
            <input
              type="text"
              className=" input border-none bg-base-300"
              placeholder="Enter your Name"
            />
            {/* photo url */}
            <label className="label font-semibold text-xl">Photo URL</label>
            <input
              type="email"
              className=" input border-none bg-base-300"
              placeholder="Enter your Photo URL"
            />
            {/* email */}
            <label className="label font-semibold text-xl">Email</label>
            <input
              type="email"
              className=" input border-none bg-base-300"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label font-semibold text-xl">Password</label>
            <input
              type="password"
              className=" input border-none bg-base-300 "
              placeholder="Enter your password"
            />
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox checkbox-sm rounded-[5px]" />
              <p className="text-accent">Accept Term & Conditions</p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <h2 className="font-semibold text-center">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
