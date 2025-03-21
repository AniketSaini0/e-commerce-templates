import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const branches = [
    {
      name: "Rakesh Tailers",
      address: "123 Anywhere St., Any City ST 12345",
      phone: "1123-456-7890",
      email: "hello@reallygreatsite.com",
    },
    {
      name: "Rakesh Ethnic Studio",
      address: "123 Anywhere St., Any City ST 12345",
      phone: "1123-456-7890",
      email: "hello@reallygreatsite.com",
    },
    {
      name: "Style & Play",
      address: "123 Anywhere St., Any City ST 12345",
      phone: "1123-456-7890",
      email: "hello@reallygreatsite.com",
    },
  ];

  const hours = [
    { days: "Monday to Friday", time: "9:00 am to 6:00 pm" },
    { days: "Saturday", time: "9:00 am to 12:00 noon" },
  ];

  return (
    <footer className="w-full bg-[#6b4636] text-white py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-6">The Branches</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="border border-white/30 p-6 rounded-sm flex flex-col space-y-4"
            >
              <h3 className="text-xl font-medium mb-4">{branch.name}</h3>

              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span>{branch.address.split(",")[0]},</span>
                  <span>{branch.address.split(",")[1]}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{branch.phone}</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{branch.email}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="border border-white/30 p-6 rounded-sm">
            {hours.map((schedule, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <p className="font-medium">{schedule.days}</p>
                <p>{schedule.time}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/30 p-6 rounded-sm flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#6b4636] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#6b4636] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#6b4636] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            <button className="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-[#6b4636] transition-colors">
              Tag us in your photos!
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
