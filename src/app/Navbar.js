import React from "react";
import Button from "../app/Button";
import Image from "next/image";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 h-28 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <Image src={logo} alt="logo" />
            
          </div>
          <div className="mt-5">
          <Button title="SE CONNECTER" />
          </div>
    
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
