import { PageNotFoundImg } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          priority
          alt="page not found"
          src={PageNotFoundImg}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-black p-8">
        <h1 className="text-6xl font-bold">OOPS</h1>
        <h2 className="text-xl">Error 404 - Page Not Found</h2>        
        <Link href={"/"} className="my-4">
          <button className="bg-black text-sm md:text-base text-white border-[2px] border-black w-44 py-[2px] transition-all ease-in duration-150 hover:shadow-lg">
            Return to Home
          </button>
        </Link>
      </div>
      
      {/* Optional footer or bottom element */}
      <div className="bg-yellow w-full absolute bottom-0 z-0" />
    </div>
  );
};

export default NotFound;
