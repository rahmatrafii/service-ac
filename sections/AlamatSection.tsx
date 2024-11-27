import React from "react";
import { BsPhone } from "react-icons/bs";
import { FaMapLocation, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type Props = {};
const layanan = [
  "Cuci AC",
  "Isi Freon",
  "Bongkar Pasang",
  "Pemasangan Baru",
  "Maintenance",
  "Perawatan",
  "Perbaikan",
  "Ganti Spare Part",
  "Jual Beli dan Tukar Tambah AC",
];
const jangkauan = [
  "Perkantoran",
  "Rumah sakit",
  "Sekolah",
  "Kampus",
  "Mall",
  "Rumah pribadi",
  "Tempat umum lainnya",
];
const AlamatSection = (props: Props) => {
  return (
    <section id="alamat" className="px-7 py-10 bg-white ">
      <h1 className="text-black text-[30px] md:text-[40px] text-center font-bold mb-10">
        ALAMAT
      </h1>
      <div className="flex flex-col md:flex-row text-black justify-between max-w-[1200px] mx-auto ">
        <div className="mb-7">
          <h5 className="text-uppercase mb-4 text-xl">About company</h5>
          <div className="mb-4">
            <h3 className="text-lg mb-1 font-medium">Layanan Kami</h3>
            <div>
              {layanan.map((item) => (
                <p className="text-base font-light" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg mb-1 font-medium">Jangkauan Kami</h3>
            <div>
              {jangkauan.map((item) => (
                <p key={item} className="text-base font-light">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-7">
          <p>
            <FaMapLocation className="inline mr-2" /> Komplek Ruko Taman
            Niaga,Batam
          </p>
          <p>
            <MdEmail className="inline mr-2" /> ronaldosefri22@gmail.com
          </p>
          <p>
            <FaPhone className="inline mr-2" /> 081261771623
          </p>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4282.376139639353!2d104.09126016338207!3d1.1182508750885487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d988a224147be3%3A0x80b4fba053354a61!2sRuko%20Niaga%20Taras%20Batam%20Centre!5e0!3m2!1sen!2sid!4v1732144579549!5m2!1sen!2sid"
            width="300"
            height="350"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default AlamatSection;
