"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {
    link: "#home",
    name: "Home",
  },
  {
    link: "#tentang",
    name: "Tentang",
  },
  {
    link: "#layanan",
    name: "Layanan",
  },
  {
    link: "#galeri",
    name: "Galeri",
  },
  {
    link: "#alamat",
    name: "Alamat",
  },
];

const Navbar = () => {
  const [mobilNav, setMobilNav] = useState(false);
  return (
    <nav className="bg-blue-100 px-5 lg:px-12 py-4">
      <div className="flex justify-between">
        <Link href={"/"} className="flex items-center">
          <Image
            className="rounded-full w-[50px] h-[50px] mr-3"
            src={"/images/logoo.png"}
            alt="logo"
            width={300}
            height={300}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600">
            Cipta Teknik AC
          </h1>
        </Link>

        <div className="flex items-center">
          <div className="hidden lg:flex items-center gap-x-10 text-black">
            {links.map((item) => (
              <Link key={item.link} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobilNav(!mobilNav)}
            className="flex lg:hidden flex-col "
          >
            <span className="w-[30px] h-[4px] rounded-full bg-black mb-[5px]"></span>
            <span className="w-[30px] h-[4px] rounded-full bg-black mb-[5px]"></span>
            <span className="w-[30px] h-[4px] rounded-full bg-black"></span>
          </button>
        </div>
      </div>
      <div
        className={`flex lg:hidden flex-col items-center justify-center gap-x-10  text-black ${
          mobilNav ? "h-[250px]" : "h-[0px]"
        } overflow-hidden transition-all duration-300`}
      >
        {links.map((item) => (
          <Link className="mb-4" key={item.link} href={item.link}>
            {item.name}{" "}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
