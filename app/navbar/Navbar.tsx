import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import logo from "@/public/loggo.png"

function Navbar() {
  return (
    <>
      <div className="flex top-0 z-10 w-full text-center bg-yellow-50   text-black justify-between items-center w-[min-(992px,100%-3rem )]: h-20 sticky">
        <div className="h-12 w-12 ml-10 ">
          <Image
          src={logo}
          alt="logo"
          />
        </div>
        <div className="flex  justify-end mr-10 gap-4 items-center">
          <div className="relative mx-4 max-[585px]:mb-12">
            <input
              className="py-[10px] px-4  max-[585px]:hidden rounded placeholder:text-black placeholder:text-lg placeholder:font-normal placeholder:left-2 outline-none border-zinc-300 border-[1px] text-black text-lg font-semibold  "
              type="text"
              placeholder="Search"
            />
            <HiOutlineSearch className="text-black   right-2 top-2 text-3xl cursor-pointer absolute " />
          </div>
         
          <div className="relative">
            <HiOutlineShoppingCart className="  text-5xl  " />
            <span className="absolute text-center top-[8px] text-red-600 font-bold   text-[14px]">0</span>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Navbar;
