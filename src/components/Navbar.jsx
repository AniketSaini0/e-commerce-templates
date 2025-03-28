import React from "react";

const Navbar = ({ scrolled }) => {
  return (
    // <nav
    //   className={`fixed flex items-center top-2 left-18 right-18 py-4 z-50 rounded-3xl min-h-1/12 transition-all duration-300 ${
    //     scrolled
    //       ? "bg-[#f3dbbc]/70 shadow-md translate-y-2 "
    //       : "bg-[#f3dbbc]/50   "
    //   }`}
    // >
    //   <div className="container font-[GizaStencil] font-medium tracking-wide mx-auto px-4 sm:px-6 flex items-center relative">
    //     <div
    //       className={`text-purple-800 font-bold text-xl  ${
    //         scrolled ? "opacity-100" : "opacity-0 "
    //       }`}
    //     >
    //       Rakesh Tailers
    //     </div>
    //     <div className="absolute font-[catchymager] font-bold tracking-wider left-1/2 transform -translate-x-1/2 flex space-x-32">
    //       <a
    //         href="#ethnic"
    //         className={`hover:text-gray-50  transition-all duration-300 ${
    //           scrolled ? "text-gray-900 hover:text-gray-600 " : "text-gray-700"
    //         }`}
    //       >
    //         Ethnic
    //       </a>
    //       <a
    //         href="#groom"
    //         className={`hover:text-gray-50  transition-all duration-300 ${
    //           scrolled ? "text-gray-900 hover:text-gray-600 " : "text-gray-700"
    //         }`}
    //       >
    //         Groom
    //       </a>
    //       <a
    //         href="#western"
    //         className={`hover:text-gray-50  transition-all duration-300 ${
    //           scrolled ? "text-gray-900 hover:text-gray-600 " : "text-gray-700"
    //         }`}
    //       >
    //         Western
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className={`fixed top-0 left-0 right-0 z-50 rounded-2xl mx-3 sm:mt-0.5 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-sm shadow-md translate-y-2"
          : "bg-transparent"
      }`}
    >
      <div className=" mx-auto px-4 py-0 sm:py-1 md:py-3 lg:py-5">
        {/* Logo centered */}
        <div className="relative flex items-baseline justify-center gap-4 pt-3 pb-1 md:pb-3 ">
          <div className=" absolute top-[45%] tracking-wider max-h-2 right-[1%] md:top-[47%] md:left-[1%] text-purple-900 font-[corsiva-italic] font-stretch-50%  text-xs md:text-lg lg:text-xl">
            Since 1986
          </div>{" "}
          <h1
            className={`text-[#e69113] font-[DreamAvenue] tracking-[.12em] text-2xl md:text-3xl lg:text-4xl font-bold           
              ${scrolled ? "scale-[102%] text-amber-800" : "scale-100"}`}
            style={
              scrolled
                ? { textShadow: "1.2px 1.2px 6px rgba(249, 207, 141, 0.8)" }
                : {}
            }
          >
            Rakesh Tailers
          </h1>
        </div>

        {/* Navigation items */}
        <div
          className={`flex justify-center font-[catchymager] space-x-10 md:space-x-32 pb-2 `}
        >
          <a
            href="#ethnic"
            className={`hover:text-amber-400 font-light text-xl transition-all duration-300 ${
              scrolled ? "text-gray-900 " : "text-neutral-600"
            }`}
          >
            Ethnic
          </a>
          <a
            href="#groom"
            className={`hover:text-amber-400 font-light text-xl transition-all duration-300 ${
              scrolled ? "text-gray-900  " : "text-neutral-600"
            }`}
          >
            Groom
          </a>
          <a
            href="#western"
            className={`hover:text-amber-400 font-light text-xl transition-all duration-300 ${
              scrolled ? "text-gray-900 " : "text-neutral-600"
            }`}
          >
            Western
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
