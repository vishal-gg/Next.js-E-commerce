import React from "react";
import Products from "./components/Products";
// import banner from '@/public/banner.jpg'
// import Image from 'next/image'

const Home = () => {

  return (
      <div className="">
        <div className="h-80 grid place-content-center bg-zinc-800 relative">
          {/* <Image src={banner} alt="banner" fill className="object-cover opacity-50" placeholder="blur" /> */}
          <h1 className="text-5xl font-bold text-white relative">Please Buy Everything</h1>
        </div>
        <Products />
      </div>
  )
}

export default Home;
