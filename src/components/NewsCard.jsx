import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-base-100 shadow-md ">
      <div className="">
        {/* Author */}
        <div className="flex items-center justify-between bg-base-300 p-4">
          <div className="flex items-center gap-2">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <p className="font-semibold text-sm">{author.name}</p>
              <p className="text-xs text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <button>
              <CiBookmark size={24}></CiBookmark>
            </button>
            <button>
              <CiShare2 size={24}></CiShare2>
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-semibold mb-4">{title}</h2>

          {/* Image */}
          <figure>
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full object-cover rounded-lg"
            />
          </figure>

          {/* Details */}
          <p className="my-4 text-accent">
            {details.length > 200 ? (
              <>
                {details.slice(0, 200)}...
                <br />
                <Link to={`/news-details/${id}`} className="text-orange-400 font-medium hover:underline cursor-pointer">
                  Read More
                </Link>
              </>
            ) : (
              details
            )}
          </p>

          {/* Footer: Rating & Views */}
          <div className="flex justify-between items-center pt-2 border-t text-sm text-gray-600 border-base-300">
            <div className="flex items-center gap-1">
              {[...Array(rating.number)].map((_, idx) => (
                <FaStar key={idx} className="text-orange-400" />
              ))}
              <span className="ml-1 text-sm font-medium text-gray-700">
                {rating.number}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
