import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn btn-outline btn-info text-xl"><FcGoogle size={24} />Login with Google</button>
        <button className="btn btn-outline text-xl"><FaGithub size={24} />Login with GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;
