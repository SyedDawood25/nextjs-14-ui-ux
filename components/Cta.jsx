import React from "react";
import Image from "next/image";
import Arrow from "../public/assets/Arrow.png";

const Cta = () => {
  return (
    <div className="w-full rounded-[16px] py-[56px] px-[32px] lg:my-[60px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <h1 className="text-center text-white text-[32px] font-medium">
        Monitor your website like a pro
      </h1>
      <p className="text-white pt-6 text-center">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center">
        <button className="py-[16px] px-[32px] w-fit bg-white rounded-[4px] text-pink-500">
          Try for free
        </button>

        <button className="flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium">
          Contact Sales
          <span>
            <Image src={Arrow} alt="Arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
