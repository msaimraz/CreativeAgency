import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home";

export const metadata: Metadata = {
  title: "Liko - Home Main",
};


const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
