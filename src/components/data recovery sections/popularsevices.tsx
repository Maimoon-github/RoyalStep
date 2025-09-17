// import React from 'react';

// interface Service {
//     arabicTitle: string;
//     englishServices: string[];
// }

// const servicesData: Service[] = [
//     {
//         arabicTitle: 'نظام ميكنة (لأتمتة) المنازل: تبني مستقبل الحياة الذكية',
//         englishServices: [
//             'Network And Wifi Services',
//             'Website Development Company in Dubai',
//             'Laptop Repair In Dubai',
//             'Data Recovery Services in Dubai',
//         ],
//     },
//     {
//         arabicTitle: 'اصلاح اي فون في دبي',
//         englishServices: [
//             'Buy Back Trade in UAE',
//             'Data Recovery Abu Dhabi',
//             'Computer Repair Service in Dubai',
//         ],
//     },
//     {
//         arabicTitle: 'صلاح الكمبيوتر المحمول',
//         englishServices: ['iMac Repair Dubai'],
//     },
//     {
//         arabicTitle: 'إعادة الشراء',
//         englishServices: ['Additional Services'],
//     },
//     {
//         arabicTitle: 'خدمات إصلاح البيانات المتنقلة في دبي',
//         englishServices: ['iPad Repair In Dubai'],
//     },
// ];

// const PopularServices: React.FC = () => {
//     return (
//         <div className="relative overflow-hidden bg-white py-24 sm:py-32">
//             {/* Background blur elements */}
//             <div
//                 aria-hidden="true"
//                 className="absolute inset-0 -z-10"
//             >
//                 <div className="absolute left-[50%] top-[10%] h-[322px] w-[326px] -translate-x-1/2 bg-[#47FFFC] opacity-50 blur-[300px]" />
//                 <div className="absolute left-[60%] top-[30%] h-[313px] w-[318px] -translate-x-1/2 bg-[#8A38F5] opacity-30 blur-[450px]" />
//                 <div className="absolute left-[45%] top-[55%] h-[122px] w-[122px] -translate-x-1/2 bg-[#8A38F5] opacity-40 blur-[10px]" />
//                 <div className="absolute left-[55%] top-[70%] h-[313px] w-[318px] -translate-x-1/2 bg-[#47FFFC] opacity-50 blur-[400px]" />
//                 <div className="absolute left-[40%] top-[90%] h-[313px] w-[318px] -translate-x-1/2 bg-[#FFD23B] opacity-30 blur-[450px]" />
//             </div>

//             <div className="container mx-auto max-w-2xl px-4 text-center">
//                 <h2 className="font-montserrat text-4xl font-bold uppercase tracking-tight text-[#003B5A] sm:text-5xl">
//                     Popular Services
//                 </h2>

//                 <div className="mt-16 space-y-12">
//                     {servicesData.map((service, index) => (
//                         <div key={index}>
//                             {index !== 0 && (
//                                 <hr className="mx-auto mb-12 w-full max-w-md border-t border-black/30" />
//                             )}
//                             <h3 className="font-montserrat text-2xl font-bold capitalize text-[#003B5A] leading-relaxed">
//                                 {service.arabicTitle}
//                             </h3>
//                             <div className="mt-4 space-y-2">
//                                 {service.englishServices.map((item, itemIndex) => (
//                                     <p
//                                         key={itemIndex}
//                                         className="font-montserrat text-xl capitalize text-black/70"
//                                     >
//                                         {item}
//                                     </p>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopularServices; 



















// -------------------------------------------------------------------------

















import React from "react";

const Underlined: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline-block">
    {children}
    <span className="absolute left-0 right-0 -bottom-2 h-1 bg-cyan-400 rounded"></span>
  </span>
);

const PopularServices: React.FC = () => {
  // right column list is grouped with divider lines, matching the design
  const groups: Array<Array<string>> = [
    [
      "network and wifi services",
      "Website Development Company in Dubai",
      "laptop repair in Dubai",
    ],
    [
      "نظام ميكنة (أتمتة) المنازل: تبني مستقبل الحياة الذكية",
      "Data Recovery Services in Dubai",
      "إصلاح اي فون في دبي",
    ],
    [
      "Buy Back Trade in UAE",
      "Data Recovery Abu Dhabi",
      "Computer repair service in Dubai",
    ],
    [
      "iMac Repair Dubai",
      "صلاح الكمبيوتر المحمول",
      "Additional Services",
    ],
    [
      "إعادة الشراء",
      "iPad Repair in Dubai",
      "خدمات إصلاح البيانات المتنقلة في دبي",
    ],
  ];

  return (
    <section className="relative overflow-hidden font-montserrat">
      {/* BG blobs for mid-section */}
      <div className="pointer-events-none absolute -z-10 top-[566px] left-[810px] w-[306px] h-[300px] rounded-full bg-[#EADED9] blur-[400px]" />
      <div className="pointer-events-none absolute -z-10 top-[1611px] left-[810px] w-[306px] h-[300px] rounded-full bg-blue-700/70 blur-[475px]" />
      <div className="pointer-events-none absolute -z-10 top-[1669px] right-[154px] w-[318px] h-[313px] rounded-full bg-[#FFD23B] blur-[450px]" />
      <div className="pointer-events-none absolute -z-10 top-[1870px] right-[160px] w-[318px] h-[313px] rounded-full bg-[#FB6609] blur-[400px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1px)_1fr] gap-10 md:gap-16">
          {/* Left content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#003B5A] leading-tight tracking-tighter capitalize">
              Quick Data Recovery At <Underlined>Pocket-Friendly</Underlined>{" "}
              <Underlined>Price</Underlined>
            </h2>

            <p className="mt-6 text-lg md:text-2xl text-black/50 leading-relaxed capitalize">
              Royal Step Provides Hard-Drive Data Recovery Services To Both
              Individuals And Organizations. We Adopt Modern Tools And
              Techniques To Ensure Delivering Quality Services To Our Clients.
              Whether Your System Is Crashed Or Corrupted, Our Technicians
              Diagnose The Problem And Help You Recover The Data Without Causing
              A Delay. Our Affordable Hard Drive Data Recovery Services In Dubai
              Include:
            </p>

            <ul className="mt-6 list-disc list-inside text-lg md:text-2xl text-black/50 leading-relaxed capitalize space-y-2">
              {[
                "Laptop hard drive data recovery",
                "Desktop hard drive data recovery",
                "Raid hard drive data recovery",
                "MacBook hard drive data recovery",
                "External hard drive data recovery",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-6 text-lg md:text-2xl text-black/50 leading-relaxed capitalize">
              We Also Offer Online Payment Solutions, Software Solutions, And
              More. Give Us A Call For A Detailed Consultation Regarding Your
              Business Needs And The Scope Of Our Services.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-[#003B5A]/100 w-px mx-auto rounded" />

          {/* Right column: Popular services */}
          <div>
            <h3 className="text-[42px] leading-[50px] font-extrabold tracking-tight uppercase text-[#003B5A]">
              popular services
            </h3>

            <div className="mt-10">
              {groups.map((items, gi) => (
                <div key={gi}>
                  {items.map((text, i) => (
                    <p
                      key={i}
                      className="text-center text-[24px] leading-8 text-black/70 capitalize py-3"
                    >
                      {text}
                    </p>
                  ))}
                  {/* Divider lines as in design */}
                  {gi !== groups.length - 1 && (
                    <hr className="my-2 border-t border-black/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
