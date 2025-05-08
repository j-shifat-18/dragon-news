import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import instaImg from '../../assets/instagram.png'

const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn p-6 bg-base-100 justify-start text-accent join-item items-center">
          <span className="bg-base-200 p-2 rounded-full">
            <FaFacebookF color="#3B599C"></FaFacebookF>
          </span>
          Facebook
        </button>
        <button className="btn p-6 bg-base-100 items-center justify-start text-accent join-item">
          <span className="bg-base-200 p-2 rounded-full">
            <FaTwitter color="#58A7DE"></FaTwitter>
          </span>
          Twitter
        </button>
        <button className="btn p-6 bg-base-100 items-center justify-start text-accent join-item">
          <span className="bg-base-200 p-2 rounded-full">
            <img src={instaImg} alt="" />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
