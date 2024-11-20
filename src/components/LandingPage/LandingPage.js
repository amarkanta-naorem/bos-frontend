import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Topic from "./Topic";
import { BannerCourses } from "../../utils/BannerCourses";
import JavaScriptCourse from "./JavaScriptCourse";
import CategoriesIteration from "./CategoriesIteration";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div
      className="h-[100vh] overflow-y-scroll select-none bg-[#1e1e1e]"
      style={{
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
        msOverflowStyle: "none",
      }}
    >
      <Navbar />
      <Banner />
      <div className="mx-10">
        <div className="text-center text-lg my-10 mx-auto w-1/2">
          <h1 className="text-4xl font-extrabold text-white">
            {BannerCourses.heading}
          </h1>
          <p className="pt-8 text-white text-lg">{BannerCourses.description}</p>
        </div>
        <CategoriesIteration category={BannerCourses} />
      </div>
      <JavaScriptCourse course={BannerCourses} />
      <Topic />
        <Footer />
    </div>
  );
};

export default LandingPage;
