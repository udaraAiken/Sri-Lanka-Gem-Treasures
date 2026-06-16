import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GemCard from './components/GemCard';
import GemModal from './components/GemModal';
import MapSection from './components/MapSection';
import Toast from './components/Toast';
import VerifyCertificate from './components/VerifyCertificate';
import { gemsData } from './data/gemsData';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedGem, setSelectedGem] = useState(null);
  
  // Toast State
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const renderHome = () => (
    <>
      <section className="hero">
        <img 
          src="/assets/hero_gem.jpg" 
          alt="Ceylon Gems Background" 
          className="hero-bg" 
        />
        <div className="hero-content">
          <h1 className="hero-title">Discover Sri Lanka's Treasures</h1>
          <p className="hero-subtitle">
            Explore the world's finest sapphires, rubies, and exotic gemstones from the legendary Ratnadeepa—the Island of Gems.
          </p>
          <button className="btn-primary" onClick={() => setCurrentView('collection')}>
            Explore Our Collection
          </button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Gemstones</h2>
        <div className="gem-grid">
          {gemsData.slice(0, 3).map(gem => (
            <GemCard key={gem.id} gem={gem} onClick={setSelectedGem} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => setCurrentView('collection')}>
            View All Gems
          </button>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <h2 className="section-title">The Gem Island</h2>
        <MapSection />
      </section>
    </>
  );

  const renderCollection = () => (
    <>
      <div className="page-header">
        <h1 className="page-title">Our Collection</h1>
        <p className="page-subtitle">A curated selection of Sri Lanka's most exceptional gemstones.</p>
      </div>
      <section className="section">
        <div className="gem-grid">
          {gemsData.map(gem => (
            <GemCard key={gem.id} gem={gem} onClick={setSelectedGem} />
          ))}
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <>
      <div className="page-header">
        <h1 className="page-title">About Ceylon Gems</h1>
        <p className="page-subtitle">The rich history of Ratnadeepa.</p>
      </div>
      <section className="section" style={{ maxWidth: '800px' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>A Legacy of Brilliance</h3>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
          For over 2,000 years, Sri Lanka has been renowned as the "Island of Jewels." Historically known as Serendib and Ceylon, this small island nation produces an astonishing variety of high-quality gemstones.
        </p>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
          Ancient royalty, including King Solomon and the Pharaohs, reportedly sought Ceylon gems. Today, Sri Lankan blue sapphires are considered the gold standard, famously adorning the engagement ring of Diana, Princess of Wales.
        </p>
        
        <h3 style={{ fontSize: '2rem', margin: '2rem 0 1rem', color: 'var(--color-text-primary)' }}>Ethical Sourcing</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
          Unlike massive industrialized mining operations, Sri Lankan gem mining remains a largely artisanal endeavor. Mining is highly regulated to protect the environment. Pits are dug by hand and must be refilled and replanted once mining concludes, ensuring sustainable practices and fair livelihoods for local communities.
        </p>
      </section>
      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <MapSection />
      </section>
    </>
  );

  const renderContact = () => (
    <>
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We would love to hear from you.</p>
      </div>
      <section className="section" style={{ maxWidth: '600px' }}>
        <form 
          className="inquiry-form" 
          onSubmit={(e) => { 
            e.preventDefault(); 
            showToast("Message sent successfully!"); 
            e.target.reset(); 
          }}
        >
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
            <textarea rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </section>
    </>
  );

  const renderVerify = () => (
    <>
      <div className="page-header">
        <h1 className="page-title">Certificate Verification</h1>
        <p className="page-subtitle">Confirm the authenticity of your gemstone.</p>
      </div>
      <section className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <VerifyCertificate />
      </section>
    </>
  );

  return (
    <div className="app-container">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="main-content">
        {currentView === 'home' && renderHome()}
        {currentView === 'collection' && renderCollection()}
        {currentView === 'about' && renderAbout()}
        {currentView === 'verify' && renderVerify()}
        {currentView === 'contact' && renderContact()}
      </main>

      <Footer />

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
    </div>
  );
};

export default App;
