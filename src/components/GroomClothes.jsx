import React, { useEffect, useState, useRef } from "react";

const GroomClothes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    const currentRef = sectionRef.current;

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col md:min-h-[60vh] lg:min-h-[70vh] md:flex-row"
    >
      {/* Left side - Text content (Overlapping on small screens) */}
      <div
        className="absolute bottom-12 left-0 w-full h-2/5 bg-opacity-20 z-20 text-black
               md:flex md:flex-col md:bottom-0 items-center p-8 md:relative md:min-w-3/5 md:h-auto
               md:bg-neutral-50 md:text-black md:pt-[25vh]
               "
      >
        <div className="sm:max-w-sm md:min-w-md">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-700 lg:mt-10 lg:mb-4">
              Clothes for Groom
            </h2>
            <p className="sm:text-sm md:text-lg text-stone-600 mb-10">
              Look dashing while on the go with our casual wear items.
            </p>
            <button className="w-full md:max-w-md justify-center bg-amber-800 text-white px-6 py-3 uppercase tracking-wider hover:bg-purple-900 transition-colors flex items-center">
              EXPLORE
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:min-w-1/4 bg-neutral-50 md:min-h-md relative">
        <img
          className={`md:relative right-0 w-full h-full object-cover transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-20"
          }`}
          src="/images/modern.jpeg"
          alt="Modern Attire"
          loading="lazy"
        />
      </div>
    </section>

    // <section ref={sectionRef} className="relative w-full">
    //   {/* Mobile Layout (Only visible on small screens) */}
    //   <div className="md:hidden relative w-full flex flex-col items-center">
    //     <div
    //       className={`transition-all duration-700 ${
    //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    //       }`}
    //     >
    //       {/* Image */}
    //       <img
    //         src="/images/modern.jpeg"
    //         alt="Modern Attire"
    //         className="w-full h-screen object-cover"
    //       />

    //       {/* Overlapping Text Section */}
    //       <div className="absolute bottom-0 left-0  bg-black/20 w-full h-2/5 text-white flex flex-col items-center justify-center p-6">
    //         <h2 className="text-3xl font-normal text-amber-800 mb-4">
    //           Clothes for Groom
    //         </h2>
    //         <p className="text-sm text-white mb-6">
    //           Look dashing while on the go with our casual wear items.
    //         </p>
    //         <button className="bg-amber-800 text-white px-6 py-3 uppercase tracking-wider hover:bg-purple-900 transition-colors flex items-center">
    //           EXPLORE
    //           <svg
    //             className="ml-2 w-4 h-4"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M5 12H19M19 12L12 5M19 12L12 19"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Desktop Layout (Only visible on md+ screens) */}
    //   <div className="hidden md:flex w-full min-h-[60vh] lg:min-h-[70vh] flex-row">
    //     {/* Left Side - Text */}
    //     <div
    //       className={`transition-all duration-700 ${
    //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    //       }`}
    //     >
    //       <div className="flex h-full flex-col justify-center items-center p-8 min-w-3/5 bg-neutral-50 text-black">
    //         <div className="md:min-w-md">
    //           <h2 className="text-5xl lg:text-6xl font-light text-stone-700 lg:mt-10 lg:mb-4">
    //             Clothes for Groom
    //           </h2>
    //           <p className="text-lg text-stone-600 mb-10">
    //             Look dashing while on the go with our casual wear items.
    //           </p>
    //           <button className="w-full md:max-w-md justify-center bg-amber-800 text-white px-6 py-3 uppercase tracking-wider hover:bg-purple-900 transition-colors flex items-center">
    //             EXPLORE
    //             <svg
    //               className="ml-2 w-4 h-4"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M5 12H19M19 12L12 5M19 12L12 19"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Side - Image */}
    //     <div className="w-2/5 h-full flex bg-neutral-50">
    //       <img
    //         src="/images/modern.jpeg"
    //         alt="Modern Attire"
    //         className="w-full h-full  object-cover"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default GroomClothes;
