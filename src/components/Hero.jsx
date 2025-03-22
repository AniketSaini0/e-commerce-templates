import React from "react";
import { useState, useEffect } from "react";
import { bannerImages } from "../assets/imagepaths";
// const Hero = ({ scrolled }) => {
//   return (
//     <div className="relative min-h-screen w-full md:w-screen bg-[#f5e7d5] overflow-hidden">
//       {/* Background image would be here in a real implementation */}
//       <div
//         className={`absolute -bottom-20 right-0 left-0 top-2 mt-10 sm:mt-16 flex-1 object-cover bg-no-repeat z-10 transition-all duration-700 ${
//           scrolled ? "-translate-y-20 " : " "
//         }`}
//         style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
//       ></div>
//       {/* background gradient for overlay */}
//       <div
//         className={`absolute -bottom-20 right-0 left-0 top-2 mt-10 sm:mt-16 z-20 pointer-events-none bg-[linear-gradient(to_bottom,#b3b3b3_0%,transparent_10%,transparent_75%,#ffe2b9_100%)] transition-all duration-900 ${
//           scrolled ? "-translate-y-20 " : " "
//         }`}
//       ></div>

//       {/* Banner content */}
//       <div className="relative flex flex-col z-20 mt-10 md:mt-0 justify-center items-center h-screen w-full px-6 md:px-16 lg:px-24">
//         <div className="sm:max-w-2xl md:max-w-4xl">
//           <p
//             className={`text-purple-900 font-[cheri] mb-0.5 text-xl md:text-2xl transition-all duration-900  ${
//               scrolled ? "opacity-10 -translate-y-10 " : "opacity-100 "
//             }`}
//             style={
//               scrolled
//                 ? { textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }
//                 : { textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9)" }
//             }
//           >
//             Since 1986
//           </p>
//           <h1
//             className={`text-white font-[GizaStencil]  tracking-widest justify-self-center text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 transition-all duration-900  ${
//               scrolled ? "opacity-10 -translate-y-10" : "opacity-100"
//             }`}
//             style={
//               scrolled
//                 ? { textShadow: "4px 4px 8px rgba(0, 0, 0, 0.9)" }
//                 : { textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }
//             }
//           >
//             Rakesh Tailers
//           </h1>
//           <p
//             className={`text-white font-[ovo] tracking-wide justify-self-center text-lg md:text-xl mb-8 max-w-xl transition-all duration-900  ${
//               scrolled ? "opacity-30 -translate-y-10" : "opacity-100"
//             }`}
//           >
//             Elevate your wedding look with timeless elegance and bespoke
//             craftsmanship.
//           </p>
//           <button
//             className={`bg-white cursor-pointer hover:bg-white/40  hover:border-gray-50 hover:border-2 flex justify-self-center text-gray-800 px-8 py-3 uppercase tracking-wider transition-all duration-900  ${
//               scrolled ? "opacity-40 -translate-y-10" : "opacity-100"
//             }`}
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Hero = ({ scrolled }) => {
//   return (
//     <div className="relative min-h-[90vh] w-full bg-[#f5e7d5] overflow-hidden">
//       {/* Background image */}
//       <img
//         className={`absolute inset-0 w-full h-full mt-15 object-cover z-10 transition-all duration-700 ${
//           scrolled ? "-translate-y-20" : ""
//         }`}
//         src="/images/hero-bg.webp"
//         alt="Hero Background"
//       />

//       {/* Background gradient for overlay */}
//       <div
//         className={`absolute inset-0 z-20 mt-5 pointer-events-none bg-[linear-gradient(to_bottom,#f5e7d5_0%,transparent_20%,transparent_95%,#ffe2b9_100%)] transition-all duration-700 ${
//           scrolled ? "" : " "
//         }`}
//       ></div>

//       {/* Banner content */}
//       <div className="relative flex flex-col z-20 mt-[40vh] justify-center items-center h-full w-full px-6 md:px-16 lg:px-24">
//         <div className="sm:max-w-2xl md:max-w-4xl text-center">
//           <h1
//             className={`text-white font-[GizaStencil] tracking-widest text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all duration-700 ${
//               scrolled ? "opacity-10 -translate-y-10" : "opacity-100"
//             }`}
//             style={{
//               textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)",
//             }}
//           >
//             So, what's special ?
//           </h1>
//           <p
//             className={`text-white font-[ovo] tracking-wide text-lg md:text-xl mb-8 max-w-xl transition-all duration-700 ${
//               scrolled ? "opacity-30 -translate-y-10" : "opacity-100"
//             }`}
//           >
//             Elevate your wedding look with timeless elegance and bespoke
//             craftsmanship.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = ({ scrolled }) => {
  // Dummy banner images array

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-[90vh] w-full bg-[#f5e7d5] overflow-hidden">
      {/* Background images carousel */}
      {bannerImages.map((image, index) => (
        <img
          key={image.id}
          className={`absolute bg-amber-50 inset-0 w-full h-full  mt-20 object-cover z-10 transition-all duration-500 ${
            scrolled ? "-translate-y-8" : ""
          } ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          src={image.src}
          // srcSet={`${image.src} 1x, ${image.src.replace(".jpg", "@2x.jpg")} 2x`}
          alt={image.alt}
          fetchPriority={index === 0 ? "high" : "auto"} // ✅ Only first image is high priority
        />
      ))}

      {/* Background gradient for overlay */}
      <div
        className={`absolute inset-0 z-20 mt-10 pointer-events-none bg-[linear-gradient(to_bottom,#f5e7d5_0%,transparent_20%,transparent_95%,#ffedd4_100%)] transition-all duration-700 ${
          scrolled ? "" : " "
        }`}
      ></div>

      {/* Banner content */}
      <div className="relative flex flex-col z-20 mt-[50vh] justify-center items-center h-full w-full px-6 md:px-16 lg:px-24">
        <div className="sm:max-w-2xl md:max-w-4xl text-center">
          {bannerImages.map((image, index) => (
            <div
              key={image.id}
              className={`transition-all duration-700 ${
                currentSlide === index ? "block" : "hidden"
              }`}
            >
              <h1
                className={`text-white font-[GizaStencil] tracking-widest text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all duration-700 ${
                  scrolled ? "opacity-10 -translate-y-4" : "opacity-100"
                }`}
                style={{
                  textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)",
                }}
              >
                {image.title}
              </h1>
              <p
                className={`text-white font-[ovo] tracking-wide text-lg md:text-xl mb-8 mx-auto transition-all duration-700 ${
                  scrolled ? "opacity-30 -translate-y-6" : "opacity-100"
                }`}
              >
                {image.description}
              </p>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
