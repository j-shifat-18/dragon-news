import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ breakingNews }) => {
  return (
    <div className="flex gap-4 bg-base-200 p-4">
      <p className="bg-secondary text-white px-5 py-2 font-medium text-xl">
        Latest
      </p>
      <Marquee className="" pauseOnHover speed={70}>
        {breakingNews.map((news) => (
          <p className="font-semibold text-xl mr-2">{news.title} <span className="text-secondary">|</span></p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
