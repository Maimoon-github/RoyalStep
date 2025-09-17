// import React from 'react';

// const QuickAppointment: React.FC = () => {
//     const services = [
//         'Laptop Hard Drive Data Recovery',
//         'Desktop Hard Drive Data Recovery',
//         'Raid Hard Drive Data Recovery',
//         'MacBook Hard Drive Data Recovery',
//         'External Hard Drive Data Recovery',
//     ];

//     const osLeft = [
//         'DOS',
//         'Windows XP/Vista',
//         'Windows 7, 8, 8.1, 10',
//         'Linux',
//         'Ubuntu',
//         'NetWare',
//     ];

//     const osRight = ['VMware', 'OpenSUSE', 'Fedora', 'Mandriva', 'Debian'];

//     const UnderlinedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//         <span className="relative inline-block">
//             {children}
//             <span className="absolute -bottom-2 left-0 h-1 w-full bg-cyan-400"></span>
//         </span>
//     );

//     return (
//         <div className="relative font-montserrat text-gray-800 overflow-x-hidden">
//             {/* Background Blobs */}
//             <div className="absolute top-[1012px] left-[715px] w-[47px] h-[47px] bg-red-400/50 rounded-full filter blur-[15px] transform matrix(0.87, 0.5, 0.5, -0.87, 0, 0) opacity-50"></div>
//             <div className="absolute top-[1619px] left-[34px] w-[292px] h-[288px] bg-blue-200/50 rounded-full filter blur-[325px] opacity-50"></div>
//             <div className="absolute top-[1832px] left-[162px] w-[292px] h-[318px] bg-yellow-300/50 rounded-full filter blur-[400px] opacity-50"></div>
//             <div className="absolute top-[1611px] right-[calc(50%-405px)] w-[306px] h-[300px] bg-blue-700/50 rounded-full filter blur-[475px] opacity-50"></div>
//             <div className="absolute top-[2344px] left-[-4px] w-[292px] h-[288px] bg-orange-500/50 rounded-full filter blur-[400px] opacity-50"></div>
//             <div className="absolute top-[2183px] right-[calc(50%-451px)] w-[306px] h-[300px] bg-pink-500/50 rounded-full filter blur-[550px] opacity-50"></div>
//             <div className="absolute top-[2930px] left-[34px] w-[292px] h-[288px] bg-purple-300/50 rounded-full filter blur-[300px] opacity-50"></div>
//             <div className="absolute top-[2922px] right-[calc(50%-405px)] w-[306px] h-[300px] bg-cyan-400/50 rounded-full filter blur-[440px] opacity-50"></div>
//             <div className="absolute top-[3179px] left-[34px] w-[54px] h-[54px] bg-pink-500/50 rounded-full filter blur-[15px] opacity-50"></div>

//             <div className="container mx-auto px-6 md:px-12 py-24 relative">
//                 {/* Section 1: Quick Data Recovery */}
//                 <section className="mb-32 md:mb-48">
//                     <h2 className="text-5xl md:text-7xl font-bold text-[#003B5A] leading-tight tracking-tighter capitalize mb-12">
//                         Quick Data Recovery At <UnderlinedText>Pocket-Friendly</UnderlinedText> <UnderlinedText>Price</UnderlinedText>
//                     </h2>
//                     <p className="text-xl md:text-2xl text-black/50 leading-relaxed capitalize mb-8">
//                         Royal Step Provides Hard-Drive Data Recovery Services To Both Individuals And Organizations. We Adopt Modern Tools And Techniques To Ensure Delivering Quality Services To Our Clients. Whether Your System Is Crashed Or Corrupted, Our Technicians Diagnose The Problem And Help You Recover The Data Without Causing A Delay.
//                     </p>
//                     <p className="text-xl md:text-2xl text-black/50 leading-relaxed capitalize mb-6">
//                         Our Affordable Hard Drive Data Recovery Services In Dubai Include:
//                     </p>
//                     <ul className="list-disc list-inside text-xl md:text-2xl text-black/50 leading-relaxed capitalize mb-8 space-y-2">
//                         {services.map((service, index) => (
//                             <li key={index}>{service}</li>
//                         ))}
//                     </ul>
//                     <p className="text-xl md:text-2xl text-black/50 leading-relaxed capitalize mb-8">
//                         We Also Offer Online Payment Solutions, Software Solutions, And More. Give Us A Call For A Detailed Consultation Regarding Your Business Needs And The Scope Of Our Services.
//                     </p>
//                     <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-xl md:text-2xl text-black/50 leading-relaxed capitalize mb-12">
//                         <ul className="list-disc list-inside space-y-2">
//                             {osLeft.map((os, index) => (
//                                 <li key={index}>{os}</li>
//                             ))}
//                         </ul>
//                         <ul className="list-disc list-inside space-y-2">
//                             {osRight.map((os, index) => (
//                                 <li key={index}>{os}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <p className="text-xl md:text-2xl text-black/50 leading-relaxed capitalize">
//                         No Matter What Device You Own, You Can Hire Us To Get The Deleted Data Without A Hassle. Do You Have Any Queries? Feel Free To Call Us.
//                     </p>
//                 </section>

//                 {/* Section 2: Book An Appointment */}
//                 <section>
//                     <h2 className="text-5xl md:text-7xl font-bold text-[#003B5A] leading-tight tracking-tighter capitalize mb-12">
//                         Book An <UnderlinedText>Appointment</UnderlinedText> For A <UnderlinedText>Complete Hard</UnderlinedText> <UnderlinedText>Drive Data Recovery</UnderlinedText>
//                     </h2>
//                     <p className="text-xl md:text-2xl text-black/50 leading-relaxed capitalize">
//                         Royal Step Is Well-Known For Its Excellent Hard Disk Data Recovery Services In Dubai. If You Choose Us, We Will Provide You With A Free Pick-Up And Timely Delivery Service At An Affordable Price. The Best Thing Is That You Can Reach Out To Us Whenever You Want. It Is Because Our Experts Work Round The Clock To Serve Clients With Excellence. So, If You Have Recently Experienced Hard Drive Failure And Data Loss, Schedule An Appointment With Us. We Will Help You Get Rid Of The Problem With Our Effective Services.
//                     </p>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default QuickAppointment;














// ------------------------------------------------------------------------------




















import React from "react";

const Underlined: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline-block">
    {children}
    <span className="absolute left-0 right-0 -bottom-2 h-1 bg-cyan-400 rounded"></span>
  </span>
);

const QuickAppointment: React.FC = () => {
  const services = [
    "Laptop Hard Drive Data Recovery",
    "Desktop Hard Drive Data Recovery",
    "Raid Hard Drive Data Recovery",
    "MacBook Hard Drive Data Recovery",
    "External Hard Drive Data Recovery",
  ];

  const osLeft = ["DOS", "Windows XP/Vista", "Windows 7, 8, 8.1, 10", "Linux", "Ubuntu", "NetWare"];
  const osRight = ["VMware", "OpenSUSE", "Fedora", "Mandriva", "Debian"];

  return (
    <section className="relative overflow-hidden font-montserrat">
      {/* BG blobs for lower section */}
      <div className="pointer-events-none absolute -z-10 top-[1832px] left-[162px] w-[292px] h-[318px] rounded-full bg-[#FFDC69] blur-[400px]" />
      <div className="pointer-events-none absolute -z-10 top-[2183px] right-[calc(50%-451px)] w-[306px] h-[300px] rounded-full bg-[#FC4798] blur-[550px]" />
      <div className="pointer-events-none absolute -z-10 top-[2344px] left-[-4px] w-[292px] h-[288px] rounded-full bg-[#EA6248] blur-[400px]" />
      <div className="pointer-events-none absolute -z-10 top-[2449px] right-[180px] w-[318px] h-[313px] rounded-full bg-[#6FFFD9] blur-[430px]" />
      <div className="pointer-events-none absolute -z-10 top-[2896px] right-[140px] w-[79px] h-[79px] rotate-[-150deg] rounded-full bg-[#FFDC69] blur-[15px]" />
      <div className="pointer-events-none absolute -z-10 top-[2922px] left-[810px] w-[306px] h-[300px] rounded-full bg-[#73B6D5] blur-[440px]" />
      <div className="pointer-events-none absolute -z-10 top-[2930px] left-[34px] w-[292px] h-[288px] rounded-full bg-[#A485BE] blur-[300px]" />
      <div className="pointer-events-none absolute -z-10 top-[3040px] right-[220px] w-[318px] h-[313px] rounded-full bg-[#FB6609] blur-[550px]" />
      <div className="pointer-events-none absolute -z-10 top-[3179px] left-[34px] w-[54px] h-[54px] rounded-full bg-[#FC4798] blur-[15px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Services + OS support */}
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#003B5A] leading-tight tracking-tighter capitalize">
            Book An <Underlined>Appointment</Underlined> For A{" "}
            <Underlined>Complete Hard</Underlined> <Underlined>Drive Data Recovery</Underlined>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-black/50 leading-relaxed capitalize">
            Royal Step Is Well-Known For Its Excellent Hard Disk Data Recovery Services In Dubai.
            If You Choose Us, We Will Provide You With A Free Pick-Up And Timely Delivery Service
            At An Affordable Price. The Best Thing Is That You Can Reach Out To Us Whenever You Want.
            It Is Because Our Experts Work Round The Clock To Serve Clients With Excellence. So, If
            You Have Recently Experienced Hard Drive Failure And Data Loss, Schedule An Appointment
            With Us. We Will Help You Get Rid Of The Problem With Our Effective Services.
          </p>

          {/* Spacer to visually echo the Figma rhythm */}
          <div className="h-10" />

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#003B5A] mb-3">
                Our Data Recovery Services Include
              </h3>
              <ul className="list-disc list-inside text-lg md:text-2xl text-black/50 leading-relaxed capitalize space-y-2">
                {services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#003B5A] mb-3">
                Supported Operating Systems
              </h3>
              <div className="flex gap-12">
                <ul className="list-disc list-inside text-lg md:text-2xl text-black/50 leading-relaxed capitalize space-y-2">
                  {osLeft.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside text-lg md:text-2xl text-black/50 leading-relaxed capitalize space-y-2">
                  {osRight.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-lg md:text-2xl text-black/50 leading-relaxed capitalize">
                No Matter What Device You Own, You Can Hire Us To Get The Deleted Data Without A
                Hassle. Do You Have Any Queries? Feel Free To Call Us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAppointment;
