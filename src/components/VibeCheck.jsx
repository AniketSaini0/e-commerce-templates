import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Occasion } from "../assets/imagepaths";

const VibeCheck = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-stone-200 md:min-h-[60vh] py-8  relative">
      {/* Title */}
      <h2 className="text-stone-600 justify-center mx-0 my-8 sm:my-3 md:my-6 flex text-2xl font-normal uppercase tracking-wide z-10 relative">
        What's your vibe ?
      </h2>

      {/* Desktop Layout */}
      <div className="hidden md:flex mt-4 ml-16 flex-row max-w-screen gap-4">
        {/* Fixed image on the left (40% on desktop) */}
        <div className="w-1/3 relative">
          <div className="aspect-auto min-h-[48vh]">
            <img
              src="images/Groom-Shervani.jpeg"
              alt="Santa Solana Fashion Week"
              className="absolute -top-5 w-[90%] h-full object-contain"
            />
          </div>

          {/* Royal Tag - Vertical Alignment */}
          <div className="absolute sm:-left-24 md:-left-40 lg:-left-50 top-1/2 -translate-y-1/2 flex flex-col -rotate-90 items-center text-stone-600">
            <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl tracking-wide origin-left">
              Look Royal
            </h3>
            {/* <p className="text-lg md:text-xl text-stone-500  origin-left mt-2">
              Fashion Week 2025
            </p> */}
          </div>
        </div>

        {/* Scrollable container for other images (60% on desktop) */}
        <div className="w-3/5 sm:mr-4 md:pt-11 relative">
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto w-full md:scale-[104%] min-h-[40vh] items-center gap-4 pb-3 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Scrollable images */}
            {Occasion.map((product, index) => (
              <div key={product.id || index} className="flex-none w-72">
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-medium text-stone-700">{product.name}</h3>
                  <p className="text-stone-500 text-sm">{product.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative pb-4 mb-10">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-10 h-full w-full">
          <div
            aria-label="Santa Solana Fashion Week"
            className="w-full h-full "
            style={{
              backgroundImage: `url("/images/Groom-Shervani.jpeg")`, // Ensure path is correct
              backgroundSize: "cover",
              //   backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute h-full  inset-0 z-20 bg-black/40 backdrop-blur-xs"></div>
        </div>

        {/* First image label for mobile */}
        <div className="hidden mb-6 relative z-30">
          <h3 className="font-medium text-stone-700">Santa Solana</h3>
          <p className="text-stone-500 text-sm">Fashion Week 2025</p>
        </div>

        {/* Scrollable row for mobile */}
        <div className="relative min-h-[50vh] top-[8vh] z-10">
          <div
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Scrollable images */}
            {Occasion.map((item, index) => (
              <div key={item.id || index} className="flex-none w-64">
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 bg-white/40 py-3 px-2">
                  <h3 className="font-medium text-stone-900">{item.name}</h3>
                  <p className="text-stone-700 text-sm">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibeCheck;
