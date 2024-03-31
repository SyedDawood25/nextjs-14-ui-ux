import React from "react";
import Image from "next/image";
import Check from "../public/assets/Check.svg";

const Pricing = () => {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] font-medium text-2xl text-center lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="text-[#36485C] text-center pt-4 pb-10 lg:text-[18px] lg:pb-16">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
        <div className="flex flex-col w-full rounded-lg bg-[#F5F4FF] p-6 lg:justify-between">
          <div>
            <h3 className="text-[18px] text-[#4328EB] font-medium lg:text-[20px]">
              Free Trial
            </h3>
            <p className="text-[#36485C] pt-3 lg:pt-4 lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="font-medium text-[24px] leading-9 text-[#172026] pt-4 lg:pt-8 lg:text-[32px]">
              $0<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C] lg:pt-8 lg:gap-y-4">
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>

          <button className="mt-4 py-[14px] px-[30px] text-[#4328EB] font-medium bg-white rounded-[4px] lg:mt-8">
            Start Trial
          </button>
        </div>

        <div className="flex flex-col w-full rounded-lg bg-[#4328EB] p-6">
          <div>
            <h3 className="text-[18px] text-[#FFFFFF] font-medium lg:text-[20px]">
              Business
            </h3>
            <p className="text-[#F4F8FA] pt-3 lg:pt-4 lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="font-medium text-[24px] leading-9 text-[#FFFFFF] pt-4 lg:pt-8 lg:text-[32px]">
              $500<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA] lg:pt-8 lg:gap-y-4">
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex gap-x-4 items-center">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>

          <button className="mt-4 py-[14px] px-[30px] text-[#4328EB] font-medium bg-white rounded-[4px] lg:mt-8">
            Get Started
          </button>
        </div>

        <div className="flex flex-col w-full rounded-lg bg-[#F5F4FF] p-6 lg:justify-between">
          <div>
            <h3 className="text-[18px] text-[#4328EB] font-medium lg:text-[20px]">
              Enterprise
            </h3>
            <p className="text-[#36485C] pt-3 lg:pt-4 lg:text-[18px]">
              Perfect for big companies
            </p>

            <h2 className="font-medium text-[24px] leading-9 text-[#172026] pt-4 lg:pt-8 lg:text-[32px]">
              Custom
            </h2>

            <p className="text-[#36485C] pt-4 lg:pt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-[#36485C] pt-4 lg:pt-8">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>

          <button className="mt-4 py-[14px] px-[30px] text-[#4328EB] font-medium bg-white rounded-[4px] lg:mt-8">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
