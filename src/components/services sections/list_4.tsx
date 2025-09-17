// import React from 'react';

// interface ServiceCard {
//     id: string;
//     title: string;
//     description: string;
//     image: string;
//     alt: string;
// }

// const services: ServiceCard[] = [
//     {
//         id: 'cctv-services',
//         title: 'CCTV Services Dubai',
//         description: 'Royal Step Cctv Service Provider Protect Your Property With State-of-the-art Security Systems That Keep Your Home Or Business, You Want To Ensure...',
//         image: '/api/placeholder/400/300',
//         alt: 'CCTV installation and monitoring services'
//     },
//     {
//         id: 'computer-repair',
//         title: 'Computer Repair Sharjah',
//         description: 'In Today\'s Digital World, Businesses Heavily Rely On Their IT Infrastructure, Thinking And Maintaining The Complex Technology...',
//         image: '/api/placeholder/400/300',
//         alt: 'Computer repair technician working'
//     },
//     {
//         id: 'laptop-repair',
//         title: 'Laptop Repair In Dubai',
//         description: 'Home Service Computer Repair, Convenient, Reliable And Efficient. In Today\'s Tech-Driven World, Having A Functional Computer Is Essential For Both Personal...',
//         image: '/api/placeholder/400/300',
//         alt: 'Laptop repair services'
//     },
//     {
//         id: 'structured-cabling',
//         title: 'Structured Cabling Services In Dubai',
//         description: 'Your Trusted Partner For Structured Cabling Services In Dubai. In Dubai, Committed To Delivering...',
//         image: '/api/placeholder/400/300',
//         alt: 'Network cabling installation'
//     },
//     {
//         id: 'data-recovery',
//         title: 'Data Recovery Abu Dhabi',
//         description: 'Customized Hard Disk Data Recovery Service In Dubai: Are You Using A Hard Disk Or A Hard Drive To Store Large Volumes Of Data? It\'s When You Need...',
//         image: '/api/placeholder/400/300',
//         alt: 'Data recovery services'
//     },
//     {
//         id: 'buy-back-trade',
//         title: 'Buy Back Trade In UAE',
//         description: 'Your Trusted Partner For Buy Back Trade In UAE Royal Step Is A Leading Name In Buy Back Trade In The UAE Services, Whether You Have An iPhone, MacBook...',
//         image: '/api/placeholder/400/300',
//         alt: 'Electronic device trade-in services'
//     }
// ];

// const ServiceCard: React.FC<{ service: ServiceCard }> = ({ service }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <div className="relative h-48 overflow-hidden">
//                 <img
//                     src={service.image}
//                     alt={service.alt}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//             </div>
//             <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
//                     {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
//                     {service.description}
//                 </p>
//                 <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
//                     Learn More →
//                 </button>
//             </div>
//         </div>
//     );
// };

// const ServicesSection: React.FC = () => {
//     return (
//         <section className="relative bg-[#003B5A] py-20 px-4">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service) => (
//                         <ServiceCard key={service.id} service={service} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServicesSection;


















// --------------------------------------------------

























import React from "react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: ServiceCard[] = [
  { id: "cctv-services", title: "CCTV Services Dubai", description: "Protect your property with reliable CCTV & monitoring…", image: "/api/placeholder/800/540", alt: "CCTV services" },
  { id: "computer-repair-shj", title: "Computer Repair Sharjah", description: "Business-grade support and repairs you can trust…", image: "/api/placeholder/800/540", alt: "Computer repair" },
  { id: "laptop-repair", title: "Laptop Repair In Dubai", description: "Home service—convenient, reliable, efficient…", image: "/api/placeholder/800/540", alt: "Laptop repair" },
  { id: "structured-cabling", title: "Structured Cabling Services In Dubai", description: "Standards-compliant cabling for scale & reliability…", image: "/api/placeholder/800/540", alt: "Cabling" },
  { id: "data-recovery-auh", title: "Data Recovery Abu Dhabi", description: "Specialized hard disk & device recovery…", image: "/api/placeholder/800/540", alt: "Recovery" },
  { id: "buy-back-trade", title: "Buy Back Trade In UAE", description: "Trade-in your devices with transparent pricing…", image: "/api/placeholder/800/540", alt: "Trade in" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative bg-[#003B5A]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
              <div className="relative aspect-[595/418] w-full overflow-hidden">
                <img src={s.image} alt={s.alt} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 line-clamp-4">{s.description}</p>
                <button className="mt-5 text-sm font-medium text-blue-600 transition hover:text-blue-800">Learn more →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
