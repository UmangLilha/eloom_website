import React, { useState, useEffect } from "react";
import HeroSection from "./heroSection";
import Navbar from "./Navbar";
import ImageBanner from "./ImageBanner";
import StatsComponent from "./StatsComponent";
import SearchBar from "./SearchBar";
import Community from "./Community";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageBanner />
      <SearchBar />
      <StatsComponent />
      <Community />
      <Footer />
    </>
  );
};

export default Home;
