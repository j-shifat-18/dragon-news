import React, { use } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ForgotPassword = () => {

  const { resetPassword } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent . Please check your Gmail",
          icon: "success",
          draggable: true,
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
            Reset Password
          </h2>
          <form onSubmit={handleResetPassword} className="fieldset space-y-3">
            <label className="label font-semibold text-xl">Email</label>
            <input
              name="email"
              required
              type="email"
              className="input border-none bg-base-300"
              placeholder="Enter your email address"
            />
            <button className="btn btn-neutral mt-4">
              Send verification email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
