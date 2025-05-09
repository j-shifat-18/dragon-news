import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();

  const { createUser, setUser, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name,photo,email,password)

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="fieldset space-y-3">
            {/* name */}
            <label className="label font-semibold text-xl">Name</label>
            <input
              name="name"
              required
              type="text"
              className=" input border-none bg-base-300"
              placeholder="Enter your Name"
            />
            {/* photo url */}
            <label className="label font-semibold text-xl">Photo URL</label>
            <input
              name="photo"
              required
              type="text"
              className=" input border-none bg-base-300"
              placeholder="Enter your Photo URL"
            />
            {/* email */}
            <label className="label font-semibold text-xl">Email</label>
            <input
              name="email"
              required
              type="email"
              className=" input border-none bg-base-300"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label font-semibold text-xl">Password</label>
            <input
              name="password"
              required
              type="password"
              className=" input border-none bg-base-300 "
              placeholder="Enter your password"
            />
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-[5px]"
              />
              <p className="text-accent">Accept Term & Conditions</p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <h2 className="font-semibold text-center">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary underline">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
