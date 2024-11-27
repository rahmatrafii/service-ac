import Image from "next/image";
import React from "react";

const numberImgae = [1, 2, 3, 4, 5, 6, 7, 8];
const GaleriSection = () => {
  return (
    <section
      className="h-full py-10 px-5 lg:px-12 w-full  flex justify-center items-center flex-col  bg-white"
      id="galeri"
    >
      <h1 className="text-[30px] md:text-[40px] font-semibold text-black mb-10">
        GALERI KAMI
      </h1>
      <div className="flex flex-row justify-evenly gap-5 w-full  max-h-[600px]  flex-wrap overflow-y-scroll p-5 mb-10 max-w-[1200px] mx-auto">
        {numberImgae.map((i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-xl w-max h-max"
          >
            <Image
              key={i}
              src={`/images/gambar (${i}).jpg`}
              alt={`gambarke-${i}`}
              width={300}
              height={200}
              className="object-contain "
            />
          </div>
        ))}
      </div>
      <a
        className="flex justify-center items-center gap-x-2 lg:mx-0  px-4 py-2 lg:text-lg lg:px-8  rounded-md w-max cursor-pointer bg-blue-500"
        href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
      >
        HUBUNGI
      </a>
    </section>
  );
};

export default GaleriSection;
