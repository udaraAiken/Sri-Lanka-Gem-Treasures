import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";
import About from "./pages/About";

import Navbar from "./components/Navbar";

import "./App.css";
import { GemsProvider } from "./providers/GemProvider";

// const App = () => {

//   const [selectedGem, setSelectedGem] = useState(null);

//   // Toast State
//   const [toastMessage, setToastMessage] = useState("");
//   const [isToastVisible, setIsToastVisible] = useState(false);

//   const showToast = (message) => {
//     setToastMessage(message);
//     setIsToastVisible(true);
//   };

//   const renderHome = () => (

//   );

//   const renderCollection = () => (
//     <>
//       <div className="page-header">
//         <h1 className="page-title">Our Collection</h1>
//         <p className="page-subtitle">
//           A curated selection of Sri Lanka's most exceptional gemstones.
//         </p>
//       </div>
//       <section className="section">
//         <div className="gem-grid">
//           {gemsData.map((gem) => (
//             <GemCard key={gem.id} gem={gem} onClick={setSelectedGem} />
//           ))}
//         </div>
//       </section>
//     </>
//   );

//   const renderAbout = () => (

//   );

//   const renderContact = () => (

//   );

//   const renderVerify = () => (
//
//   );

//   return (
//     <div className="app-container">
//       <Navbar currentView={currentView} setView={setCurrentView} />

//       <main className="main-content">
//         {currentView === "home" && renderHome()}
//         {currentView === "collection" && renderCollection()}
//         {currentView === "about" && renderAbout()}
//         {currentView === "verify" && renderVerify()}
//         {currentView === "contact" && renderContact()}
//       </main>

//       <Footer />

//       <GemModal
//         gem={selectedGem}
//         onClose={() => setSelectedGem(null)}
//         onInquirySuccess={showToast}
//       />

//       <Toast
//         message={toastMessage}
//         isVisible={isToastVisible}
//         onClose={() => setIsToastVisible(false)}
//       />
//     </div>
//   );
// };

export default function App() {
  return (
    <BrowserRouter>
      <GemsProvider>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/verify" element={<Verify />} />
            </Routes>
          </main>
        </div>
      </GemsProvider>
    </BrowserRouter>
  );
}
