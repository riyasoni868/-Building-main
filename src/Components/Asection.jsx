// import React from 'react'
// import { useEffect, useRef, useState } from "react";
// import {  Wallet, HardHat, CircleCheck} from 'lucide-react'
// import ab from '../assets/about1.webp'

// function Asection() {
//     const items = [
//     "Donec sodales porttitor vehicula",
//     "Pellentesque consectetur sem",
//     "Sed vestibulum lorem fermentum",
//   ];
//   const [start, setStart] = useState(false);
//   const sectionRef = useRef(null);
//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // check if section is visible
//       if (rect.top < windowHeight && rect.bottom > 0) {
//         setStart(true);
//         window.removeEventListener("scroll", handleScroll); // run only once
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run on load in case already visible
//      return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const [no, setNo] = useState(0);

//   useEffect(() => {
//     if (start && no < 287) {
//       const timer = setTimeout(() => setNo(no + 1), 100);
//       return () => clearTimeout(timer);
//     }
//   }, [no, start]);
//   return (
//     <div>
//        <div className="flex gap-20 mt-20">
//        <div className="mt-12"> 
//         <div>
//            <img src={ab} alt="about" />
//        </div> 
//        </div> 

//       {/* Main two-column block */}
//       <div ref={sectionRef} className="mt-12 ">
//         {/* Left column */}
//         <div className="w-2/3">
//           <div className="flex items-center">
         
//             <span className="w-3 h-3 rounded-full bg-orange-500 inline-block mr-2" />
//             <p className="text-gray-500">1984 PROYEK START JOURNEY</p>
//           </div>

//           <h1 className="text-6xl font-bold mt-4">
//             Dedicated to Building Excellence.
//           </h1>

//           <p className="text-gray-500 mt-5">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//             tincidunt tincidunt sem sed pharetra. <br />
//             Cras elementum, turpis id mollis ullamcorper, tortor massa faucibus
//             urna, sed vehicula sapien eros et urna.
//           </p>

//           {/* Features */}
//           <div className="flex gap-10 mt-10">
//             <div>
//               <div className="flex gap-5 items-start">
//                 <Wallet size={40} />
//                 <h2 className="text-xl font-bold">
//                   Affordable Price, <br />
//                   Certified Forwarders
//                 </h2>
//               </div>
//               <p className="text-gray-500 mt-2">Curabitur pellentesque tincidunt urna.</p>
//             </div>

//             <div>
//               <div className="flex gap-5 items-start">
//                 <HardHat size={40} />
//                 <h2 className="text-xl font-bold">
//                   Safe and Trusted <br />
//                   Company
//                 </h2>
//               </div>
//               <p className="text-gray-500 mt-2">Praesent dictum bibendum libero.</p>
//             </div>
//           </div>
//         </div>

//         {/* Right column */}
//         <div className=" flex gap-20 mt-12">
//           <div className="flex items-center mb-6">
//             <p className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-orange-500 bg-gray-50 font-bold text-xl">
//               {no}
//             </p>
//             <h2 className="ml-4 text-2xl font-bold">
//               Completed <br />
//               Project
//             </h2>
//           </div>

//           <div className="space-y-3">
//             {items.map((item, index) => (
//               <div key={index} className="flex items-center space-x-2 border-b pb-2">
//                 <CircleCheck size={18} className="text-orange-500" />
//                 <span className="text-gray-800">{item}</span>
//               </div>
//             ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Asection
import React, { useEffect, useRef, useState } from "react";
import { Wallet, HardHat, CircleCheck } from 'lucide-react';
import ab from '../assets/about1.webp';

function Asection() {
  const items = [
    "Donec sodales porttitor vehicula",
    "Pellentesque consectetur sem",
    "Sed vestibulum lorem fermentum",
  ];

  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);
  const [no, setNo] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setStart(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (start && no < 287) {
      const timer = setTimeout(() => setNo(no + 1), 10);
      return () => clearTimeout(timer);
    }
  }, [no, start]);

  return (
    <div className="px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img src={ab} alt="about" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Right Content */}
        <div ref={sectionRef} className="w-full lg:w-1/2" data-aos="fade-left">
          {/* Top Heading */}
          <div className="flex items-center mb-2">
            <span className="w-3 h-3 rounded-full bg-orange-500 inline-block mr-2" />
            <p className="text-gray-500 text-sm">1984 PROYEK START JOURNEY</p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Dedicated to Building Excellence.
          </h1>

          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt tincidunt sem sed pharetra. Cras elementum, turpis id
            mollis ullamcorper, tortor massa faucibus urna, sed vehicula sapien
            eros et urna.
          </p>

          {/* Features (Wallet, HardHat) */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="flex gap-4 items-start">
                <Wallet size={36} className="text-orange-500" />
                <div>
                  <h2 className="text-lg font-semibold">
                    Affordable Price <br /> Certified Forwarders
                  </h2>
                  <p className="text-gray-500 mt-1 text-sm">Curabitur pellentesque tincidunt urna.</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex gap-4 items-start">
                <HardHat size={36} className="text-orange-500" />
                <div>
                  <h2 className="text-lg font-semibold">
                    Safe and Trusted <br /> Company
                  </h2>
                  <p className="text-gray-500 mt-1 text-sm">Praesent dictum bibendum libero.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Counter & Checklist */}
          <div className="flex flex-col sm:flex-row gap-8 mt-10 items-start">
            {/* Animated Counter */}
            <div className="flex items-center">
              <p className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-4 border-orange-500 bg-gray-100 font-bold text-xl">
                {no}
              </p>
              <h2 className="ml-4 text-xl font-bold">
                Completed <br /> Projects
              </h2>
            </div>

            {/* Checklist */}
            <div className="space-y-3 mt-4 sm:mt-0">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 border-b pb-2">
                  <CircleCheck size={18} className="text-orange-500" />
                  <span className="text-gray-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asection;
