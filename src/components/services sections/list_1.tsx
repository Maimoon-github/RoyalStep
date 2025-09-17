// import React from 'react';

// interface ServiceItem {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
// }

// const ServicesList1: React.FC = () => {
//     const services: ServiceItem[] = [
//         {
//             id: 1,
//             title: "Macbook Repair In Dubai",
//             description: "We're Bringing Solutions, Fixing Or Emails, And Zooming Processor, Digital World On Your MacBook Suddenly, Everything Can Be Busy.",
//             image: "/api/placeholder/400/300"
//         },
//         {
//             id: 2,
//             title: "iMac Repair In Dubai",
//             description: "Welcome To Rigel Step, Your Top Choice For Expert iMac Repair Services In Dubai Since The iMac's Debut In 1998, Apple Has Continuously Innovated.",
//             image: "/api/placeholder/400/300"
//         },
//         {
//             id: 3,
//             title: "iPad Repair In Dubai",
//             description: "Planning Is An Essential Service For Both Personal And Professional Tasks, Making Accidental Drops Or Water Damage To Your iPad Particularly Frustrating.",
//             image: "/api/placeholder/400/300"
//         },
//         {
//             id: 4,
//             title: "iPhone Repair In Dubai",
//             description: "Rigel Step Is Well-Known For Its Professional iPhone Repair Services In Dubai, Delivering A One-Stop Repair Solution For Different Versions Of iPhone Devices.",
//             image: "/api/placeholder/400/300"
//         },
//         {
//             id: 5,
//             title: "Hard Drive Data Recovery",
//             description: "Experienced Hard Drive Data Recovery Services In Dubai Are You Using A Hard Disk Or A Hard Drive To Store Large Volumes Of Data? If You Losing The Data.",
//             image: "/api/placeholder/400/300"
//         },
//         {
//             id: 6,
//             title: "IT Support Services",
//             description: "In General, The Setups, Installations, And Settings Need To Be Done Accurately When Building New Computers, Laptops, Or Workstations, Whether For The Home.",
//             image: "/api/placeholder/400/300"
//         }
//     ];

//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
//             {/* Background Blur Effects */}
//             <div className="absolute w-80 h-80 bg-pink-400 rounded-full blur-[320px] opacity-60 right-0 top-1/3 transform translate-x-1/2"></div>
//             <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-[350px] opacity-60 left-0 bottom-1/4 transform -translate-x-1/2"></div>
            
//             {/* Services Grid Container */}
//             <div className="relative z-10 container mx-auto px-4 py-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                     {services.map((service, index) => (
//                         <div
//                             key={service.id}
//                             className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
//                             style={{
//                                 width: '595px',
//                                 height: '620px',
//                                 maxWidth: '100%'
//                             }}
//                         >
//                             {/* Service Image */}
//                             <div className="relative h-64 overflow-hidden">
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                             </div>
                            
//                             {/* Service Content */}
//                             <div className="p-8 h-full flex flex-col justify-between">
//                                 <div>
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                                         {service.title}
//                                     </h3>
//                                     <p className="text-gray-600 leading-relaxed text-sm line-clamp-6">
//                                         {service.description}
//                                     </p>
//                                 </div>
                                
//                                 {/* Call to Action */}
//                                 <div className="mt-6">
//                                     <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-lg">
//                                         Learn More
//                                         <svg 
//                                             className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
//                                             fill="none" 
//                                             stroke="currentColor" 
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
                            
//                             {/* Hover Effect Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                         </div>
//                     ))}
//                 </div>
                
//                 {/* Bottom Section with Contact Info */}
//                 <div className="mt-16 text-center">
//                     <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
//                         <span className="text-blue-600 font-semibold text-lg">1928</span>
//                         <div className="w-px h-6 bg-gray-300"></div>
//                         <span className="text-blue-600 font-semibold text-lg">1371</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServicesList1;














// --------------------------------------------------























import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ServicesList1: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, title: "Macbook Repair In Dubai", description: "You’re buzzing along... Suddenly, disaster strikes. Your screen glitches or worse...", image: "/api/placeholder/800/540" },
    { id: 2, title: "iMac Repair In Dubai", description: "Welcome to Royal Step, your top choice for expert iMac repair services in Dubai...", image: "/api/placeholder/800/540" },
    { id: 3, title: "iPad Repair In Dubai", description: "Your iPad is essential for both personal and professional tasks…", image: "/api/placeholder/800/540" },
    { id: 4, title: "iPhone Repair In Dubai", description: "Royal Step is well-known for its professional iPhone repair service in Dubai…", image: "/api/placeholder/800/540" },
    { id: 5, title: "Hard Drive Data Recovery", description: "Guaranteed hard drive data recovery services in Dubai…", image: "/api/placeholder/800/540" },
    { id: 6, title: "IT Support Services", description: "Setups, installations, and settings done right—home or office…", image: "/api/placeholder/800/540" },
  ];

  return (
    <section className="relative bg-white">
      {/* subtle ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute left-6 top-10 h-72 w-72 rounded-full bg-[#1DAEEF] blur-[340px] opacity-40" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-[#FC4798] blur-[300px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition hover:shadow-lg"
            >
              <div className="relative aspect-[595/418] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-[#003B5A]">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60 line-clamp-4">{s.description}</p>

                <div className="mt-5">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-[#003B5A] px-4 py-2 text-white transition hover:bg-[#004A6B]">
                    Learn more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList1;
