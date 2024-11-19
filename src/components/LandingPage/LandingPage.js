import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Topic from "./Topic";

const LandingPage = () => {
  return (
    <div
        className="h-[100vh] overflow-y-scroll"
        style={{
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            msOverflowStyle: 'none',
        }}
    >
        <Navbar />
        <Banner />
        <Topic />
    </div>
  );
};

export default LandingPage;
