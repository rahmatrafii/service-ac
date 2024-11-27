import Image from "next/image";
import React from "react";

const layanan = [
  {
    link: "/cuci copy.png",
    name: "Cuci Ac",
  },
  {
    link: "/freonn.png",
    name: "Isi Freon",
  },
  {
    link: "/bongkar.png",
    name: "Bongkar Pasang",
  },
  {
    link: "/pasang.png",
    name: "Pemasangan Baru",
  },
  {
    link: "/maintenace asli.png",
    name: "Maintenance",
  },
  {
    link: "/isi.png",
    name: "Perbaikan",
  },
  {
    link: "/spre.png",
    name: "Ganti Spare Part",
  },
  {
    link: "/mesin_cuci.png",
    name: "Service Mesin Cuci",
  },
  {
    link: "/jual.png",
    name: "Jual Beli dan Tukar Tambah AC",
  },
];
const LayananSection = () => {
  return (
    <section
      className="h-full pt-10 pb-20 px-5 lg:px-12 w-full  flex justify-center items-center flex-col  bg-white "
      id="layanan"
    >
      <h1 className="text-[30px] md:text-[40px] font-semibold text-black mb-10">
        LAYANAN KAMI
      </h1>
      <div className="flex gap-6 w-full justify-evenly items-center relative z-[1] max-h-[600px] max-w-[1200px] flex-wrap overflow-y-scroll p-5 mb-10">
        {layanan.map((item) => (
          <div
            key={item.link}
            className="p-3 w-[300px] h-max flex flex-col items-center justify-center bg-blue-100 shadow-xl rounded-xl "
          >
            <Image
              src={`/images${item.link}`}
              unoptimized
              alt="w-[100px]"
              width={100}
              height={100}
              className="w-[200px] object-contain mb-3"
            />
            <h1 className="text-2xl text-black text-center font-semibold">
              {item.name}
            </h1>
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

export default LayananSection;
