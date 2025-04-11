import React from "react";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#a8aec8]  overflow-x-clip fixed-container mt-16 ">
      <div className="backdrop-blur-md  bg-opacity-20  border border-white  border-opacity-20 shadow-lg bg-gradient-to-b from-white to-[#a8aec8]  py-16">
        <div className="relative max-w-[540px] mx-auto">
          <h2 className="section-title mb-7"> Ready to Start Earning?</h2>
          <p className="section-description mt-5">
          Unlock a smarter way to grow your wealth! Come and join thousands of lenders pooling their funds to earn stable, passive income.
          </p>
          <Image
            src={"/star.png"}
            alt="star"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={"/spring.png"}
            alt="spring"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
          />
          <div className="flex gap-8 mt-10 justify-center">
            <Link
              href={
                ""
              }
              target="_blank"
            >
              <button className=" bg-black text-white px-10 py-4 rounded-lg font-bold text-[16px] inline-flex items-center justify-center tracking-tighter hover:opacity-60">
                Join Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;