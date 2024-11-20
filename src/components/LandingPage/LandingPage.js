import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Topic from "./Topic";
import { BannerCourses } from "../../utils/BannerCourses";
import JavaScriptCourse from "./JavaScriptCourse";
import CategoriesIteration from "./CategoriesIteration";
import Footer from "./Footer";
import DiscordGackground from "../../assets/images/community.png"
import Dicord from "../../assets/logos/discord.svg"

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
        <Navbar/>
        <Banner/>
        <div className="mx-10">
          <div className="text-center text-lg my-10 mx-auto w-1/2">
            <h1 className="text-4xl font-extrabold text-white">
              {BannerCourses.heading}
            </h1>
            <p className="pt-8 text-white text-lg">{BannerCourses.description}</p>
          </div>
          <CategoriesIteration category={BannerCourses}/>
        </div>
        <JavaScriptCourse course={BannerCourses}/>

        <hr className="border-gray-700 mb-8 m-14"/>

        <div className="text-center text-lg my-10 mx-auto w-1/2">
          <h1 className="text-4xl font-extrabold text-white">
            Pick a Topic. Any Topic.
          </h1>
          <p className="pt-8 text-white text-lg">
            Begin your learning journey with us today!
          </p>
        </div>
        <Topic/>

        <div className="relative w-full p-8 py-[8rem]">
          <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={DiscordGackground}
              alt="Discord Background"
          />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center">
            <img
                className="w-16 h-16"
                src={Dicord}
                alt="Discord Logo"
            />

            <h1 className="text-white font-bold text-4xl">Join the community</h1>

            <p className="text-gray-300 text-sm max-w-4xl py-5">
              Become part of our vibrant developer community on Discord! Connect with like-minded learners, get
              real-time support, share knowledge, and collaborate on projects with students and professionals around the
              world.
            </p>

            <button className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium rounded-full shadow-lg hover:from-orange-500 hover:to-pink-600">
              Join Discord
            </button>
          </div>
        </div>


        <Footer/>
      </div>
  );
};

export default LandingPage;
