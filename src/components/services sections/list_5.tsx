// import React from 'react';

// interface ServiceCard {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     imageAlt: string;
// }

// const List5: React.FC = () => {
//     const services: ServiceCard[] = [
//         {
//             id: 1,
//             title: "CCTV Installation Company In Dubai",
//             description: "Your Trusted Partner For CCTV Installation Service In Dubai Is Here! Dedicated To Delivering...",
//             image: "/api/placeholder/400/300", // Replace with actual image path
//             imageAlt: "CCTV Installation Service"
//         },
//         {
//             id: 2,
//             title: "Website Development Company In Dubai",
//             description: "Your Trusted Partner For Web Solutions In Dubai. Digital Work, Proud To Be Known As The Best Website...",
//             image: "/api/placeholder/400/300", // Replace with actual image path
//             imageAlt: "Website Development Service"
//         }
//     ];

//     return (
//         <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 overflow-hidden py-20">
//             {/* Background Blur Effects */}
//             <div className="absolute inset-0">
//                 {/* Ellipse 18 - Blue */}
//                 <div 
//                     className="absolute w-[481px] h-[474px] bg-blue-600 rounded-full opacity-30"
//                     style={{
//                         left: '-1px',
//                         top: '6840px',
//                         filter: 'blur(500px)',
//                         transform: 'translateY(-6500px)'
//                     }}
//                 />
                
//                 {/* Ellipse 19 - Purple */}
//                 <div 
//                     className="absolute w-[481px] h-[474px] bg-purple-400 rounded-full opacity-30"
//                     style={{
//                         left: '1335px',
//                         top: '7053px',
//                         filter: 'blur(500px)',
//                         transform: 'translateY(-6500px)'
//                     }}
//                 />
                
//                 {/* Ellipse 20 - Green */}
//                 <div 
//                     className="absolute w-[481px] h-[474px] bg-green-400 rounded-full opacity-30"
//                     style={{
//                         left: '66px',
//                         top: '7401px',
//                         filter: 'blur(500px)',
//                         transform: 'translateY(-6500px)'
//                     }}
//                 />
                
//                 {/* Ellipse 17 - Light Green */}
//                 <div 
//                     className="absolute w-[481px] h-[474px] bg-green-500 rounded-full opacity-20"
//                     style={{
//                         left: '790px',
//                         top: '7046px',
//                         filter: 'blur(1000px)',
//                         transform: 'translateY(-6500px)'
//                     }}
//                 />
                
//                 {/* Ellipse 16 - Orange */}
//                 <div 
//                     className="absolute w-[481px] h-[474px] bg-orange-500 rounded-full opacity-30"
//                     style={{
//                         left: '1580px',
//                         top: '6816px',
//                         filter: 'blur(500px)',
//                         transform: 'translateY(-6500px)'
//                     }}
//                 />
//             </div>

//             {/* Geometric Circles Overlay */}
//             <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full opacity-20" />
//                 <div className="absolute top-40 right-40 w-48 h-48 border-2 border-blue-300 rounded-full opacity-30" />
//                 <div className="absolute bottom-32 left-20 w-80 h-80 border-2 border-green-200 rounded-full opacity-15" />
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 container mx-auto px-4">
//                 <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//                     {services.map((service, index) => (
//                         <div
//                             key={service.id}
//                             className="group relative"
//                             style={{
//                                 width: index === 0 ? '595px' : '591px',
//                                 height: '620px',
//                                 left: index === 0 ? '119px' : '734px',
//                                 transform: 'translateX(-50px)'
//                             }}
//                         >
//                             <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group-hover:scale-105">
//                                 {/* Image Container */}
//                                 <div className="relative h-80 overflow-hidden">
//                                     <img
//                                         src={service.image}
//                                         alt={service.imageAlt}
//                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                                 </div>

//                                 {/* Content */}
//                                 <div className="p-8 h-60 flex flex-col justify-between">
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                                             {service.title}
//                                         </h3>
//                                         <p className="text-gray-600 leading-relaxed mb-6">
//                                             {service.description}
//                                         </p>
//                                     </div>
                                    
//                                     <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-lg w-fit">
//                                         Learn More
//                                         <svg 
//                                             className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
//                                             fill="none" 
//                                             stroke="currentColor" 
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom Counter */}
//                 <div className="flex justify-center mt-16">
//                     <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
//                         2062 / 1078
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default List5;
























//  ----------------------------------------------------























import React from "react";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const List5: React.FC = () => {
  const services: ServiceCard[] = [
    { id: 1, title: "CCTV Installation Company In Dubai", description: "Your trusted partner for CCTV installation—designed, deployed, maintained…", image: "/api/placeholder/1000/640", imageAlt: "CCTV Installation Service" },
    { id: 2, title: "Website Development Company In Dubai", description: "Custom websites, blazing performance, clean UX—done right…", image: "/api/placeholder/1000/640", imageAlt: "Website Development Service" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-orange-50">
      {/* geometric rings */}
      <div aria-hidden className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full border-2 border-blue-200" />
      <div aria-hidden className="pointer-events-none absolute right-10 top-20 h-40 w-40 rounded-full border-2 border-blue-300" />
      <div aria-hidden className="pointer-events-none absolute -left-10 bottom-10 h-72 w-72 rounded-full border-2 border-blue-200" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.id} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition hover:shadow-lg">
              <div className="relative aspect-[595/418] w-full overflow-hidden md:aspect-[16/9]">
                <img src={s.image} alt={s.imageAlt} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{s.description}</p>
                <div className="mt-5">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-[#003B5A] px-5 py-2.5 text-white transition hover:bg-[#004A6B]">
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

        <div className="mt-12 flex justify-center">
          <span className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white">All services, one roof</span>
        </div>
      </div>
    </section>
  );
};

export default List5;
