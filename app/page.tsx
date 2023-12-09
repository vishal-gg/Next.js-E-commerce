import React from "react";
import Navbar from "./navbar/Navbar";
import Products from "./components/Products";
import Homee from "./components/Homee";

const Home = () => {

  return (
      <div className="">
        <Navbar/>
        <div className="h-80 grid place-content-center bg-zinc-800">
          <h1 className="text-5xl font-bold text-white">Please Buy Everything</h1>
        </div>
        <Products />
        <Homee/>
      </div>
  )
}

export default Home;
