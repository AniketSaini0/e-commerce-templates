import React, { useEffect, useState, useRef } from "react";

const Customize = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [fadeState, setFadeState] = useState("visible");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.scrollY;
  //     setScroll  Position(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Listen for when the video is near the end
    const handleTimeUpdate = () => {
      // When video reaches 0.5 seconds before the end, start fading out
      if (video.currentTime > video.duration - 0.5 && fadeState === "visible") {
        setFadeState("fading-out");
      }

      // When the video has ended (or nearly ended)
      if (video.currentTime >= video.duration - 0.05) {
        // Quickly set the current time back to start
        video.currentTime = 0;
        // Start fading back in
        setFadeState("fading-in");

        // After fade in completes, reset to visible
        setTimeout(() => {
          setFadeState("visible");
        }, 500);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [fadeState]);

  // // Calculate parallax movement for text
  // const textTransform = `translateY(${-scrollPosition * 0.009}px)`;

  // // Determine the opacity based on fade state
  // let videoOpacity = 1;
  // if (fadeState === "fading-out") {
  //   videoOpacity = 0.4; // Fade out to 40% opacity
  // } else if (fadeState === "fading-in") {
  //   videoOpacity = 0.7; // Start at 70% when fading in
  // }

  return (
    <div
      ref={containerRef}
      className="relative h-[70vh] md:h-screen w-full overflow-hidden"
    >
      {/* Video Background with parallax effect */}
      <div
        className="absolute z-10 top-0 left-0 w-full h-full"
        // style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
      >
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          //   style={{ opacity: videoOpacity }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://collection.cloudinary.com/derorn0vi/815e0f9dc797809a8e96b756c3d74bcc"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to enhance text visibility */}
        <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>
      </div>

      {/* Floating Text Content */}
      <div
        className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        // style={{ transform: textTransform }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-100 mb-6 transition-transform duration-200">
          Discover premium men's ethnic and formal wear, tailored for your
          perfect day!
        </h1>

        <button className="bg-lime-200 hover:bg-lime-300 text-gray-800 font-semibold px-8 py-3 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105">
          Explore the collections
        </button>
      </div>

      {/* Create space after the hero for scrolling effect */}
      <div className="h-screen"></div>
    </div>
  );
};

export default Customize;

// import React, { useEffect, useState, useRef } from "react";

// const Customize = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [fadeState, setFadeState] = useState("visible");

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get the current scroll position
//       const position = window.scrollY;

//       // Check if container is actually in viewport before applying parallax
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           setScrollPosition(position);
//         }
//       } else {
//         setScrollPosition(position);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video) return;

//     // Listen for when the video is near the end
//     const handleTimeUpdate = () => {
//       // When video reaches 0.5 seconds before the end, start fading out
//       if (video.currentTime > video.duration - 0.5 && fadeState === "visible") {
//         setFadeState("fading-out");
//       }

//       // When the video has ended (or nearly ended)
//       if (video.currentTime >= video.duration - 0.05) {
//         // Quickly set the current time back to start
//         video.currentTime = 0;
//         // Start fading back in
//         setFadeState("fading-in");

//         // After fade in completes, reset to visible
//         setTimeout(() => {
//           setFadeState("visible");
//         }, 500);
//       }
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);
//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, [fadeState]);

//   // Determine the opacity based on fade state
//   let videoOpacity = 1;
//   if (fadeState === "fading-out") {
//     videoOpacity = 0.4; // Fade out to 40% opacity
//   } else if (fadeState === "fading-in") {
//     videoOpacity = 0.7; // Start at 70% when fading in
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden"
//     >
//       {/* Video Background with enhanced parallax effect */}
//       <div
//         className="absolute z-10 top-0 left-0 w-full h-full"
//         style={{
//           transform: `translateY(${scrollPosition * 0.05}px)`,
//           height: "120%", // Increase height to avoid edges showing
//           top: "-10%", // Move up to pre-position the content
//         }}
//       >
//         <video
//           ref={videoRef}
//           className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
//           style={{ opacity: videoOpacity }}
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="public/images/videos/bg-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay to enhance text visibility */}
//         <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>
//       </div>

//       {/* Floating Text Content - NOT affected by parallax */}
//       <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-100 mb-6 transition-transform duration-300">
//           Discover premium men's ethnic and formal wear, tailored for your
//           perfect day!
//         </h1>

//         <button className="bg-lime-200 hover:bg-lime-300 text-gray-800 font-semibold px-8 py-3 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105">
//           Explore the collections
//         </button>
//       </div>

//       {/* Create space after the hero for scrolling effect */}
//       <div className="h-screen"></div>
//     </div>
//   );
// };

// export default Customize;

// import React, { useEffect, useState, useRef } from "react";

// const Customize = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [fadeState, setFadeState] = useState("visible");

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get the current scroll position
//       const position = window.scrollY * 0.05;

//       // Check if container is actually in viewport before applying parallax
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           setScrollPosition(position);
//         }
//       } else {
//         setScrollPosition(position);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video) return;

//     // Listen for when the video is near the end
//     const handleTimeUpdate = () => {
//       // When video reaches 0.5 seconds before the end, start fading out
//       if (video.currentTime > video.duration - 0.5 && fadeState === "visible") {
//         setFadeState("fading-out");
//       }

//       // When the video has ended (or nearly ended)
//       if (video.currentTime >= video.duration - 0.05) {
//         // Quickly set the current time back to start
//         video.currentTime = 0;
//         // Start fading back in
//         setFadeState("fading-in");

//         // After fade in completes, reset to visible
//         setTimeout(() => {
//           setFadeState("visible");
//         }, 500);
//       }
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);
//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, [fadeState]);

//   // Determine the opacity based on fade state
//   let videoOpacity = 1;
//   if (fadeState === "fading-out") {
//     videoOpacity = 0.4; // Fade out to 40% opacity
//   } else if (fadeState === "fading-in") {
//     videoOpacity = 0.8; // Start at 70% when fading in
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden"
//     >
//       {/* Video Background with enhanced parallax effect */}
//       <div
//         className="absolute z-10 top-0 left-0 w-full h-full"
//         style={{
//           transform: `translateY(${scrollPosition * 0.02}px)`,
//           height: "120%", // Increase height to avoid edges showing
//           top: "-15%", // Move up to pre-position the content
//         }}
//       >
//         <video
//           ref={videoRef}
//           className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
//           style={{ opacity: videoOpacity }}
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/images/videos/bg-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay to enhance text visibility */}
//         <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>
//       </div>

//       {/* Floating Text Content - NOT affected by parallax */}
//       <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-100 mb-6 transition-transform duration-300">
//           Discover premium men's ethnic and formal wear, tailored for your
//           perfect day!
//         </h1>

//         <button className="bg-lime-200 hover:bg-lime-300 text-gray-800 font-semibold px-8 py-3 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105">
//           Explore the collections
//         </button>
//       </div>

//       {/* Create space after the hero for scrolling effect */}
//       <div className="h-screen"></div>
//     </div>
//   );
// };

// export default Customize;
