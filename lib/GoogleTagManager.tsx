"use client";
import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    // Tambahkan script async ke header
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10857947855";
    script1.async = true;
    document.head.appendChild(script1);

    // Tambahkan script konfigurasi gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10857947855');
    `;
    document.head.appendChild(script2);
  }, []);

  return null; // Komponen ini hanya untuk menambahkan script ke header
};

export default GoogleTagManager;
