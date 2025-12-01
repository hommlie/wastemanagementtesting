import React, { useEffect, useState } from "react";

const BannerSlider = () => {
  // ⭐ Add as many images as you want
  const images = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png",
    "/banner5.png",
    
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const redirectToService = () => {
    window.location.href =
      "/product/cockroach-control-services-in-bangalore";
  };

  return (
    <div className="-mt-15 hidden sm:flex w-full justify-center">
      <div className="relative rounded-lg overflow-hidden">

        {/* SLIDER IMAGES */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-[1200px] h-[450px] object-cover transition-all duration-700 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0 absolute top-0 left-0"}
            `}
          />
        ))}

        {/* ⭐ DOTS INDICATOR ⭐ */}
        <div className="
          absolute bottom-4 left-1/2 transform -translate-x-1/2 
          flex gap-3 z-20 
          drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]
        ">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 border-[2px]
                ${
                  current === index
                    ? "bg-white border-white scale-110"
                    : "bg-white/40 border-white/70"
                }
              `}
            ></div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BannerSlider;
