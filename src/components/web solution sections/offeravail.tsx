// import React from 'react';

// const OfferAvail: React.FC = () => {
//     return (
//         <div className="relative w-full min-h-screen overflow-hidden bg-white font-montserrat">
//             {/* Background Decorative Ellipses */}
//             <div className="absolute inset-0 pointer-events-none">
//                 {/* Large Blurred Ellipses */}
//                 <div className="absolute w-[318px] h-[313px] left-[1648px] top-[1870px] bg-[#8A38F5] rounded-full blur-[450px]" />
//                 <div className="absolute w-[318px] h-[313px] left-[1637px] top-[2483px] bg-[#47FFFC] rounded-full blur-[400px]" />
//                 <div className="absolute w-[318px] h-[313px] left-[1610px] top-[2817px] bg-[#FFD23B] rounded-full blur-[450px]" />
//                 <div className="absolute w-[292px] h-[288px] left-[53px] top-[2441px] bg-[#0022FF] rounded-full blur-[450px]" />
//                 <div className="absolute w-[318px] h-[313px] left-[42px] top-[2566px] bg-[#FC4798] rounded-full blur-[450px]" />
//                 <div className="absolute w-[306px] h-[300px] left-[-66px] top-[1528px] bg-[#88C057] rounded-full blur-[500px]" />
//                 <div className="absolute w-[306px] h-[300px] left-[943px] top-[2810px] bg-[#96D696] rounded-full blur-[440px]" />
                
//                 {/* Small Accent Ellipses */}
//                 <div className="absolute w-[122px] h-[122px] left-[1873px] top-[2107px] bg-[#8A38F5] rounded-full blur-[10px]" />
//                 <div className="absolute w-[54px] h-[54px] left-[60px] top-[2685px] bg-[#FC4798] rounded-full blur-[15px]" />
//                 <div className="absolute w-[79px] h-[79px] left-[1753px] top-[2875px] bg-[#FFDC69] rounded-full blur-[15px] rotate-[-150deg]" />
//             </div>

//             {/* Main Content Container */}
//             <div className="relative z-10 max-w-7xl mx-auto px-4">
                
//                 {/* Left Content Section */}
//                 <div className="absolute left-[119px] top-[1188px]">
//                     {/* Main Heading */}
//                     <h1 className="w-[849px] h-[160px] font-bold text-[74px] leading-[80px] tracking-[-0.02em] capitalize text-[#003B5A]">
//                         What We Offer In Web Solutions
//                     </h1>
                    
//                     {/* Description Text */}
//                     <p className="w-[849px] h-[128px] mt-[90px] font-medium text-[26px] leading-[32px] capitalize text-black/50">
//                         Starting from designing and developing a website or app to marketing it through the right channels to gain you positive online exposure, we do everything and beyond. Our web solutions cover:
//                     </p>
                    
//                     {/* Services List */}
//                     <div className="w-[734px] h-[256px] mt-[14px] font-medium text-[26px] leading-[32px] capitalize text-black/50">
//                         <ul className="space-y-2">
//                             <li>Web design & development</li>
//                             <li>Mobile app development</li>
//                             <li>Digital marketing solutions</li>
//                             <li>Social media promotions</li>
//                             <li>Domain and web hosting services</li>
//                             <li>CMS development</li>
//                             <li>PHP development</li>
//                             <li>WordPress development</li>
//                         </ul>
//                     </div>
                    
//                     {/* Additional Info */}
//                     <p className="w-[849px] h-[96px] mt-[78px] font-medium text-[26px] leading-[32px] capitalize text-black/50">
//                         We also offer online payment solutions, software solutions, and more. Give us a call for a detailed consultation regarding your business needs and the scope of our services.
//                     </p>
//                 </div>

//                 {/* Vertical Divider Line */}
//                 <div className="absolute left-[1230px] top-[1183px] w-[5px] h-[1748px] bg-[#003B5A] transform rotate-90 origin-top-left" />

//                 {/* Right Content Section - Popular Services */}
//                 <div className="absolute left-[1353px] top-[1223px]">
//                     <h2 className="w-[434px] h-[50px] font-bold text-[42px] leading-[50px] tracking-[-0.02em] uppercase text-[#003B5A]">
//                         Popular Services
//                     </h2>
                    
//                     {/* Services List with Dividers */}
//                     <div className="mt-[65px] space-y-0">
//                         {/* Service Items */}
//                         <div className="relative">
//                             <p className="w-[318px] h-[36px] text-center font-normal text-[24px] leading-[32px] capitalize text-black/70">
//                                 Network and wifi services
//                             </p>
//                             <div className="w-[381px] h-[1px] bg-black/30 mt-[210px] ml-[26px]" />
//                         </div>
                        
//                         <div className="relative pt-[58px]">
//                             <p className="w-[381px] h-[70px] text-center font-normal text-[24px] leading-[32px] capitalize text-black/70">
//                                 Website Development Company in Dubai
//                             </p>
//                             <div className="w-[381px] h-[1px] bg-black/30 mt-[22px]" />
//                         </div>
                        
//                         <div className="relative pt-[34px]">
//                             <p className="w-[279px] h-[36px] text-center font-normal text-[24px] leading-[32px] capitalize text-black/70 ml-[51px]">
//                                 Laptop repair in Dubai
//                             </p>
//                         </div>
                        
//                         {/* Arabic Services */}
//                         <div className="relative pt-[70px]">
//                             <p className="w-[381px] h-[92px] text-center font-bold text-[26px] leading-[42px] capitalize text-[#003B5A]">
//                                 نظام ميكنة (أتمتة) المنازل: تبني مستقبل الحياة الذكية
//                             </p>
//                         </div>
                        
//                         <div className="relative pt-[22px]">
//                             <p className="w-[381px] h-[71px] text-center font-normal text-[24px] leading-[32px] capitalize text-black/70">
//                                 Data Recovery Services in Dubai
//                             </p>
//                             <div className="w-[381px] h-[1px] bg-black/30 mt-[62px]" />
//                         </div>
                        
//                         <div className="relative pt-[70px]">
//                             <p className="w-[249px] h-[47px] text-center font-bold text-[26px] leading-[42px] capitalize text-[#003B5A] ml-[66px]">
//                                 اصلاح اي فون في دبي
//                             </p>
//                         </div>
                        
//                         <div className="relative pt-[22px]">
//                             <p className="w-[275px] h-[35px] text-center font-normal text-[24px] leading-[32px] capitalize text-black/70 ml-[53px]">
//                                 Buy Back Trade in UAE
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Why Avail Section */}
//                 <div className="absolute left-[120px] top-[2236px]">
//                     <h2 className="w-[848px] h-[160px] font-bold text-[74px] leading-[80px] tracking-[-0.02em] capitalize text-[#003B5A]">
//                         Why Avail Our Web Solutions in Dubai?
//                     </h2>
                    
//                     <div className="w-[848px] h-[320px] mt-[40px] font-medium text-[26px] leading-[32px] capitalize text-black/50">
//                         <ul className="space-y-4">
//                             <li>We provide our esteemed clients with custom solutions for their diverse business requirements.</li>
//                             <li>Our team comprises experienced professionals with niche expertise and knowledge.</li>
//                             <li>You can benefit from our competitive quotes that vary depending on the scope of the project.</li>
//                             <li>We are always available for our clients to guide them, even after the project has been delivered.</li>
//                             <li>We uphold the highest industry standards in quality and customer service.</li>
//                         </ul>
//                     </div>
                    
//                     <p className="w-[848px] h-[96px] mt-[33px] font-medium text-[26px] leading-[32px] capitalize text-black/50">
//                         Call us for a quote or to schedule a consultation with our experts. We will help you accomplish your online business goals with innovative and actionable web solutions.
//                     </p>
//                 </div>

//                 {/* Additional Services Section */}
//                 <div className="absolute left-[1379px] top-[2300px] space-y-8">
//                     <div className="text-center">
//                         <p className="w-[273px] h-[46px] font-bold text-[26px] leading-[42px] capitalize text-[#003B5A] ml-[54px]">
//                             صلاح الكمبيوتر المحمول
//                         </p>
//                         <p className="w-[222px] h-[35px] font-normal text-[24px] leading-[32px] capitalize text-black/70 mt-[55px] ml-[80px]">
//                             iMac Repair Dubai
//                         </p>
//                     </div>
                    
//                     <div className="text-center mt-[88px]">
//                         <p className="w-[135px] h-[42px] font-bold text-[26px] leading-[42px] capitalize text-[#003B5A] ml-[123px]">
//                             إعادة الشراء
//                         </p>
//                         <p className="w-[229px] h-[32px] font-normal text-[24px] leading-[32px] capitalize text-black/70 mt-[20px] ml-[76px]">
//                             Additional Services
//                         </p>
//                     </div>
                    
//                     <div className="text-center mt-[64px]">
//                         <p className="w-[381px] h-[84px] font-bold text-[26px] leading-[42px] capitalize text-[#003B5A]">
//                             خدمات إصلاح البيانات المتنقلة في دبي
//                         </p>
//                         <p className="w-[248px] h-[32px] font-normal text-[24px] leading-[32px] capitalize text-black/70 mt-[20px] ml-[67px]">
//                             iPad Repair in Dubai
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OfferAvail;




















// -----------------------------------------------------------------
















import React from 'react';

const OfferAvail: React.FC = () => {
  const offerIntro =
    'Starting from designing and developing a website or app to marketing it through the right channels to gain you positive online exposure, we do everything and beyond. Our web solutions cover:';

  const offers = [
    'Web design & development',
    'Mobile app development',
    'Digital marketing solutions',
    'Social media promotions',
    'Domain and web hosting services',
    'CMS development',
    'PHP development',
    'WordPress development',
  ];

  const offerOutro =
    'We also offer online payment solutions, software solutions, and more. Give us a call for a detailed consultation regarding your business needs and the scope of our services.';

  const whyPoints = [
    'We provide our esteemed clients with custom solutions for their diverse business requirements.',
    'Our team comprises experienced professionals with niche expertise and knowledge.',
    'Benefit from competitive quotes that vary with the project scope.',
    'We support you even after project delivery.',
    'We uphold the highest industry standards in quality and customer service.',
  ];

  const popular: Array<{ label: string; strong?: boolean }> = [
    { label: 'Network and WiFi Services' },
    { label: 'Website Development Company in Dubai' },
    { label: 'Laptop Repair in Dubai' },
    { label: 'نظام ميكنة (أتمتة) المنازل: تبني مستقبل الحياة الذكية', strong: true },
    { label: 'Data Recovery Services in Dubai' },
    { label: 'اصلاح اي فون في دبي', strong: true },
    { label: 'Buy Back Trade in UAE' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ambient rings & blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[5%] top-[38%] h-72 w-72 rounded-full bg-[#8A38F5]/60 blur-[420px]" />
        <div className="absolute right-[7%] top-[64%] h-72 w-72 rounded-full bg-[#47FFFC]/60 blur-[380px]" />
        <div className="absolute right-[10%] top-[78%] h-72 w-72 rounded-full bg-[#FFD23B]/70 blur-[420px]" />
        <div className="absolute left-[6%] top-[62%] h-72 w-72 rounded-full bg-[#0022FF]/60 blur-[420px]" />
        <div className="absolute -left-6 top-[46%] h-72 w-72 rounded-full bg-[#88C057]/60 blur-[520px]" />
        <div className="absolute left-[46%] top-[88%] h-72 w-72 rounded-full bg-[#96D696]/60 blur-[420px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">
          {/* left column */}
          <div className="space-y-12">
            <header className="space-y-4">
              <h2 className="font-montserrat text-3xl font-extrabold leading-tight tracking-tight text-[#003B5A] sm:text-4xl md:text-5xl">
                What We Offer In Web Solutions
              </h2>
              <p className="max-w-[75ch] text-base leading-7 text-black/60 sm:text-lg md:text-xl">{offerIntro}</p>
            </header>

            {/* list of offerings */}
            <ul className="grid max-w-3xl grid-cols-1 gap-3 text-black/70 sm:grid-cols-2">
              {offers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 sm:text-lg">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#003B5A]" />
                  <span className="capitalize">{item}</span>
                </li>
              ))}
            </ul>

            <p className="max-w-[75ch] text-base leading-7 text-black/60 sm:text-lg md:text-xl">{offerOutro}</p>

            <div className="space-y-6 pt-6">
              <h3 className="font-montserrat text-3xl font-extrabold leading-tight tracking-tight text-[#003B5A] sm:text-4xl md:text-5xl">
                Why Avail Our Web Solutions In Dubai?
              </h3>
              <ul className="max-w-[75ch] list-disc space-y-3 pl-5 marker:text-[#003B5A]">
                {whyPoints.map((p) => (
                  <li key={p} className="text-base leading-7 text-black/60 sm:text-lg">
                    <span className="capitalize">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="max-w-[75ch] text-base leading-7 text-black/60 sm:text-lg md:text-xl">
                Call us for a quote or to schedule a consultation with our experts. We will help you accomplish your
                online business goals with innovative and actionable web solutions.
              </p>
            </div>
          </div>

          {/* right column (Popular services) */}
          <aside className="lg:border-l-[5px] lg:border-[#003B5A] lg:pl-10">
            <h4 className="font-montserrat text-2xl font-extrabold uppercase tracking-tight text-[#003B5A]">
              Popular Services
            </h4>

            <div className="mt-6 divide-y divide-black/30 rounded-xl bg-white/60 shadow-sm backdrop-blur">
              {popular.map((s, idx) => (
                <div key={idx} className="px-5 py-6">
                  <p
                    className={`text-center capitalize ${
                      s.strong ? 'font-semibold text-[#003B5A]' : 'text-black/70'
                    }`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OfferAvail;
