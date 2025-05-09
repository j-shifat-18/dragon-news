import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details , category_id} = news;
  return (
    <div className="p-8 border border-[#E7E7E7] space-y-5 rounded-md">
      <img className="w-full h-[400px] object-cover rounded-md" src={image_url} alt="" />
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-accent">{details}</p>
      <Link to={`/category/${category_id}`} className="btn btn-secondary py-2 px-6 font-medium text-xl ">
        <FaArrowLeft></FaArrowLeft> All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
