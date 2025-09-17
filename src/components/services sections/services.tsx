// import React from 'react';

// const ServicesSection: React.FC = () => {
//     return (
//         <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-orange-50">
//             {/* Background decorative elements */}
            
//             {/* Large blue blur - top right */}
//             <div className="absolute w-[392px] h-[398px] left-[904px] top-[-50px] bg-[#0022FF] rounded-full blur-[400px] opacity-60"></div>
            
//             {/* Orange blur - left side */}
//             <div className="absolute w-[306px] h-[300px] left-[70px] top-[20px] bg-[#FF8952] rounded-full blur-[225px] opacity-70"></div>
            
//             {/* Orange blur - far right */}
//             <div className="absolute w-[236px] h-[232px] left-[1794px] top-[-25px] bg-[#FF7230] rounded-full blur-[225px] opacity-70"></div>
            
//             {/* Yellow circle - top right */}
//             <div className="absolute w-[122px] h-[122px] left-[1712px] top-[-25px] bg-[#FFDD94] rounded-full blur-[10px] opacity-80"></div>
            
//             {/* Pink circle - bottom left */}
//             <div className="absolute w-[122px] h-[122px] left-[222px] top-[280px] bg-pink-500 rounded-full blur-[10px] opacity-80"></div>
            
//             {/* Small blue circle - right */}
//             <div className="absolute w-[54px] h-[54px] left-[1807px] top-[140px] bg-[#73B6D5] rounded-full blur-[15px] opacity-70"></div>
            
//             {/* Small orange circle - bottom left */}
//             <div className="absolute w-[54px] h-[54px] left-[142px] top-[240px] bg-[#FB6609] rounded-full blur-[15px] opacity-70 transform -rotate-[150deg]"></div>
            
//             {/* Main content */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full">
//                 {/* Services title */}
//                 <h1 className="font-montserrat font-bold text-[74px] leading-[80px] tracking-[-0.02em] capitalize text-[#003B5A]">
//                     Services
//                 </h1>
                
//                 {/* Description text */}
//                 <p className="mt-8 w-[1147px] font-montserrat font-normal text-[26px] leading-[34px] text-center capitalize text-black/70">
//                     We Are Here For Your Service At Anytime In Dubai. Having Any Issue With Your Device Or Gadgets? Just Contact Us Instantly!
//                 </p>
                
//                 {/* Go Back button */}
//                 <div className="mt-12">
//                     <button className="w-[222px] h-[66px] bg-[#003B5A] hover:bg-[#004d73] transition-colors duration-300 rounded-[33px] flex items-center justify-center text-white font-montserrat font-medium text-lg group">
//                         Go Back
//                         <svg 
//                             className="ml-2 w-5 h-5 transform transition-transform duration-300" 
//                             fill="none" 
//                             stroke="currentColor" 
//                             viewBox="0 0 24 24"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServicesSection;





// --------------------------------------------------



















import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-pink-50">
      {/* decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-6 h-72 w-72 rounded-full bg-[#FF8952] blur-[220px]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-6 h-60 w-60 rounded-full bg-[#FF7230] blur-[220px]" />
      <div aria-hidden className="pointer-events-none absolute top-24 right-24 h-28 w-28 rounded-full bg-[#FFDD94] blur-[10px]/" />
      <div aria-hidden className="pointer-events-none absolute top-36 left-24 h-14 w-14 rounded-full bg-[#FB6609] blur-[15px] -rotate-[150deg]" />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#0022FF] blur-[380px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24 text-center">
        <h1 className="font-montserrat text-4xl font-extrabold tracking-tight text-[#003B5A] sm:text-5xl md:text-6xl">
          Services
        </h1>

        <p className="mx-auto mt-5 max-w-[60ch] text-base leading-7 text-black/70 sm:text-lg md:text-xl">
          We are here for your service at any time in Dubai. Having an issue with your
          device or gadgets? Just contact us instantly!
        </p>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#003B5A] px-6 py-3 text-white transition-colors hover:bg-[#004d73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5A]"
          >
            Go back
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
