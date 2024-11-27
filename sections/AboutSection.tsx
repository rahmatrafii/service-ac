import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="h-full pt-10 pb-10 px-5 lg:px-12 lg:pt-10 w-full flex justify-center items-center flex-col lg:flex-row bg-white gap-x-10"
      id="tentang"
    >
      <div className=" lg:w-[50%] w-full flex items-start justify-center flex-col lg:mb-[0px] mb-[70px]">
        <h1 className="md:text-[48px] text-[30px]  text-black font-bold mb-[20px] md:mb-[30px] lg:mb-0">
          CV CIPTA TEKNIK AC
        </h1>

        <p className="text-[16px] md:text-[18px]  text-slate-700  mb-[20px] md:mb-[30px] ">
          Master Pendingin AC - Melayani jasa service maupun
          pemasangan/instalasi AC diwilayah Batam indonesia, Layanan jasa
          service elektronik di Batam dan sekitarnya. Dengan didukung oleh para
          tenaga kerja/Teknisi yg berpengalaman puluhan tahun di bidangnya,
          sehingga bisa menghasilkan sebuah akhir pekerjaan yang rapih dan
          berkualitas. Layanan kami ada jaminan bergaransi dalam jasa service
          yang sudah ditentukan, lama jangka waktu garansi bisa disesuaikan
          dengan apa yg telah dikerjakan. Harga jasa relatif murah dan harga
          bisa negotiable sebelum pekerjaan dimulai, ada paket harga yang
          menarik dari kami dalam service maupun intalasi/pemasangan baru or
          second.
        </p>
        <a
          className="flex justify-center items-center gap-x-2 lg:mx-0  px-4 py-2 lg:text-lg lg:px-8  rounded-md w-max cursor-pointer bg-blue-500"
          href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
        >
          HUBUNGI
        </a>
      </div>
      <div className="flex lg:w-[50%] w-full justify-center items-center relative z-[1]">
        <div className="w-full h-full">
          <Image
            unoptimized
            className="w-full h-full rounded-xl"
            src="/images/about-img.jpg"
            alt="rafi"
            width={390}
            height={390}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
