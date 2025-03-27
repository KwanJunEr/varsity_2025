"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[700px] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip px-8">
      <div className="flex justify-between">
        {/*Everything on the right*/}
        <div className="md:w-[678px] flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Malaysia's Best P2P Microloan Ecosystem
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Earn More as a MicroLoan Borrower and Lender With Us
            </h1>
            <p className="text-2xl text-[#010D3E] tracking-tight mt-6 font-bold">
            Join us as a <span className="underline">lender</span>  in LendDAO to stake in our microloan pool, or as a <span className="underline">borrower </span> to access microloan financial services through LendSync
            in a decentralized manner 😎
            </p>
          </div>
        </div>

        {/*Everything on the left the image*/}
        <div className="mt-20 md:mt-0 md:h-[648px]  md:flex-1 relative md:ml-[80px]">
          <Image
            src={"/landing.png"}
            alt="Hero Image"
            width={1200}
            height={1200}
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
          />
          <Image
            src={"/cylinder.png"}
            alt="Cylinder Image"
            width={220}
            height={220}
            className="md:absolute -top-8 -left-25 md:block hidden"
          />
          <Image
            src={"/noodle.png"}
            alt="Noodle Image"
            width={220}
            height={220}
            className=" md:block hidden absolute top-[450px] left-[448px] rotate-[30deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
