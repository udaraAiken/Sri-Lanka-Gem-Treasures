import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GemModal from "./components/GemModal";
import Toast from "./components/Toast";

import { GemsProvider } from "./providers/GemProvider";
import { NotificationProvider } from "./providers/NotificationProvider";

import { useNotification } from "./hooks/useNotification";
import { useGems } from "./hooks/useGems";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <GemsProvider>
        <NotificationProvider>
          <div className="app-container">
            <AppContent />
          </div>
        </NotificationProvider>
      </GemsProvider>
    </BrowserRouter>
  );
}

const AppContent = () => {
  const { selectedGem, setSelectedGem } = useGems();
  const { toastMessage, isToastVisible, setIsToastVisible, showToast } =
    useNotification();
  return (
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
      <GemModal
        gem={selectedGem}
        onClose={() => setSelectedGem(null)}
        onInquirySuccess={showToast}
      />

      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
      <Footer />
    </div>
  );
};
