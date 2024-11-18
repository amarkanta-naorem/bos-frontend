import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const categories = [
  "Software Development",
  "Data Science",
  "Communication",
  "Business Development and Analysis",
];
const LandingPage = () => {
  return (
      <>
        <Navbar />
        <Banner />
      </>
  );
};

export default LandingPage;
