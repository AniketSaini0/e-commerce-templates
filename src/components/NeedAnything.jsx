import React from "react";

const NeedAnything = () => {
  return (
    <div className="relative w-full min-h-screen bg-neutral-100 flex flex-col justify-center">
      {/* Background image - we're using a placeholder but in production you'd use your actual image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/last-img.jpg"
          alt="Stylish clothing background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-10 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Need Anything?
          </h2>
        </div>

        {/* Info Items - Stacked with dividers */}
        <div className="max-w-3xl mx-auto">
          {/* FAQs */}
          <div className="flex justify-center items-center py-5 border-t border-white">
            <span className="text-xl md:text-2xl text-white font-light">
              Wedding Ethnic
            </span>
          </div>

          {/* Track my Parcel */}
          <div className="flex justify-center items-center py-5 border-t border-white">
            <span className="text-xl md:text-2xl text-white font-light">
              Ready made
            </span>
          </div>
          <div className="flex justify-center items-center py-5 border-t border-white">
            <span className="text-xl md:text-2xl text-white font-light">
              Tailor made formals and Ethnic
            </span>
          </div>

          {/* Email Address */}
          <div className="flex justify-evenly items-center py-5 border-t border-white">
            <span className="text-xl md:text-2xl text-white font-light">
              Email Address :
            </span>
            <a
              href="mailto:hello@reallygreatsite.com"
              className="text-lg md:text-xl text-white hover:text-neutral-200 transition-colors duration-300"
            >
              hello@reallygreatsite.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-evenly items-center py-5 border-t border-white border-b">
            <span className="text-xl md:text-2xl text-white font-light">
              Socials :
            </span>
            <a
              href="https://instagram.com/reallygreatsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-white hover:text-neutral-200 transition-colors duration-300"
            >
              @reallygreatsite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedAnything;
