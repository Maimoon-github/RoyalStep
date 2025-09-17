// import React from 'react';
// import Wbsolutions from '../components/web solution sections/websolutions';
// import Footer from '../components/layout/Footer';
// import Header from '../components/layout/Header';

// const WebSolutions: React.FC = () => {
//   return (
//     <div className="relative overflow-x-hidden">
//       {/* Main Content - header moved into Hero component to avoid duplication */}
//       <main>
//         <Header />
//         <Wbsolutions />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default WebSolutions;







//  ---------------------------------------------------------------------------------



























import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Wbsolutions from '../components/web solution sections/websolutions';
import OfferAvail from '../components/web solution sections/offeravail';

const WebSolutionsPage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-pink-50">
      <Header />
      <main>
        <Wbsolutions />
        <OfferAvail />
      </main>
      <Footer />
    </div>
  );
};

export default WebSolutionsPage;
