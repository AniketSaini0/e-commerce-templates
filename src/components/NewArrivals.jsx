// components/NewArrivals.js
import React, { useEffect, useState, useRef } from "react";
import { newArrivals } from "../assets/imagepaths";

const NewArrivals = () => {
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
        threshold: 0.2, // 20% of the section must be visible
      }
    );

    // Starting point of useEffect
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
    <section ref={sectionRef} className="bg-[#feedd5] relative py-16 md:py-24">
      {/* background gradient for overlay */}
      <div className="absolute z-10 inset-0 pointer-events-none bg-gradient-to-b from-[#e6cdad] via-transparent to-transparent"></div>

      <div className="relative z-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl py-8 mx-0 max-w-full bg-[#dc841f] font-light text-center text-stone-200 mb-12 md:mb-16">
          New Arrivals
        </h2>

        {/* Mobile scrollable container */}
        <div className="md:hidden overflow-x-auto pb-8 scrollbar-hide">
          <div
            className="flex space-x-6 px-4"
            style={{ minWidth: "max-content" }}
          >
            {newArrivals.map((product, index) => (
              <div
                key={product.id}
                className="relative hover:scale-[102%] transition duration-400 flex-shrink-0 cursor-pointer group"
                style={{ width: "290px" }}
              >
                {/* Image container */}
                <div
                  className={`w-full h-[50vh] bg-cover bg-center transition-transform duration-700 ease-in-out ${
                    isVisible ? "translate-y-0" : "translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>

                {/* Text below image */}
                <div
                  className={`mt-4 font-semibold pl-2 text-black text-2xl transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 mx-10 gap-6">
          {newArrivals.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className={`relative hover:scale-[102%] transition duration-400 overflow-hidden min-h-[400px] cursor-pointer group ${
                index % 2 === 0 ? "bottom-6" : "top-6"
              }`}
            >
              {/* Image container */}
              <div
                className={`w-full h-[400px] bg-cover bg-center transition-transform duration-700 ease-in-out ${
                  isVisible ? "translate-y-0" : "translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>

              {/* Text below image */}
              <div
                className={`mt-4 font-semibold pl-2 text-black text-2xl md:text-3xl transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {" "}
                <span className="text-amber-600 text-xl md:text-2xl">
                  Shop for{" "}
                </span>{" "}
                <br />
                {product.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-[#fff4dc]"></div>
    </section>
  );
};

export default NewArrivals;
