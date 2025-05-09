import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user , logOut } = use(AuthContext);

  const handleLogout = ()=>{
    logOut()
    .then(alert('logged out successfully'))
    .catch(error=>console.log(error))
  }

  return (
    <div className="grid grid-cols-12 items-center">
      <div className="col-span-3"></div>
      <div className=" flex gap-6 justify-center col-span-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-5 items-center col-span-3 justify-end">
        <img className="rounded-full w-10 h-10 object-cover" src={user ?  user.photoURL : userImg} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
