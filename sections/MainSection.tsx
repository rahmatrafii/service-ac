import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainSection = () => {
  return (
    <>
      <Link
        href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] fixed right-4 bottom-4 z-[999]"
      >
        <Image
          src={"/images/wa.png"}
          unoptimized
          alt="wa"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </Link>
      <section
        className="h-full pt-7  px-5 lg:px-12 w-full flex justify-center items-center flex-col lg:flex-row bg-blue-100"
        id="home"
      >
        <div className="h-full max-w-[1100px] flex justify-center items-center flex-col lg:flex-row bg-blue-100">
          <div className="lg:w-[60%] w-full flex flex-col text-start mb-[70px]   mx-auto">
            <h1 className="text-[48px]  text-blue-700 font-bold mb-[30px] lg:mb-0">
              Service AC Terpercaya di Batam
            </h1>

            <p className="text-[14px] md:text-[18px]  text-slate-700  mb-[30px] ">
              Spesialis Perbaikan Ac Dan Service Mesin Cuci.
            </p>
            <a
              className="flex justify-center items-center gap-x-2 lg:mx-0  px-4 py-2 lg:text-lg lg:px-8  rounded-md w-max cursor-pointer bg-orange-500"
              href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
            >
              HUBUNGI
            </a>
          </div>
          <div className="flex lg:w-[40%] w-full justify-center items-center relative z-[1]">
            <div className="w-full h-full">
              <Image
                unoptimized
                className="w-full h-full"
                src="/images/slider-img.png"
                alt="rafi"
                width={390}
                height={390}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
