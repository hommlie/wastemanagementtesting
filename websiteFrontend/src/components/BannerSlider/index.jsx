import React from "react";

const BannerSlider = () => {
  const images = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png",
    "/banner5.png",
  ];

  // Duplicate images to create infinite loop illusion
  const duplicatedImages = [...images, ...images];

  return (
    <div className="hidden sm:flex w-full justify-center">
      <div className="relative w-[1200px] h-[450px] overflow-hidden rounded-lg">

        {/* ⭐ Continuous Scrolling Wrapper */}
        <div
          className="flex h-full animate-slide-infinite"
          style={{
            width: `${duplicatedImages.length * 1200}px`,
          }}
        >
          {duplicatedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-[1200px] h-[450px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* ⭐ Tailwind Custom Animation Styles */}
      <style>{`
        @keyframes slideInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-slide-infinite {
          animation: slideInfinite 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
