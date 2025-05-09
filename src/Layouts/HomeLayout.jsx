import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import BgImage from "../components/HomeLayout/BgImage";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-8">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-8">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-6 mb-10">
        <aside className="col-span-3">
          <div className="sticky top-2 h-screen overflow-y-auto scrollbar-hidden">
            <LeftAside />
          </div>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <div className="sticky top-2 h-screen overflow-y-auto scrollbar-hidden">
            <RightAside />
            <BgImage></BgImage>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
