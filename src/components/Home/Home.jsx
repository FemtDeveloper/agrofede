import React from "react";
import Anouncements from "../Anouncements/Anouncements";
import Carousel from "../Carousel/Carousel";
import External from "../Externals/External";
import News from "../News/News";

const Home = () => {
  return (
    <>
      <Carousel />
      <News />
      <Anouncements />
      <External />
    </>
  );
};

export default Home;
