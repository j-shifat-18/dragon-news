import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Loading";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const SocialLogin = () => {
  const { user , loading , googleLogin ,githubLogin, setUser} = use(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin=()=>{
    googleLogin(googleProvider)
    .then((result)=>{
      const user = result.user;
      setUser(user);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  const handleGithubLogin=()=>{
    githubLogin(githubProvider)
    .then((result)=>{
      const user = result.user;
      setUser(user);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }


  if (loading) {
    return <Loading></Loading>;
  }




  return (
    <div className={user ? "hidden" : "block"}>
      <h2 className="font-semibold text-xl mb-5">Login With</h2>
      <div className="flex flex-col gap-3">
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-info text-xl">
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline text-xl">
          <FaGithub size={24} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
