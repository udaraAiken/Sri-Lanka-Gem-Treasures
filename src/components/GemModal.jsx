import React, { useState } from 'react';
import { X, ZoomIn, Info, Send, Loader2 } from 'lucide-react';
import { submitInquiry } from '../firebase';

const GemModal = ({ gem, onClose, onInquirySuccess }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!gem) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitInquiry({
        ...formData,
        gemId: gem.id,
        gemName: gem.name
      });
      onInquirySuccess("Inquiry sent successfully! We will contact you soon.");
      onClose();
    } catch (error) {
      console.error(error);
      alert("There was an error sending your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-grid">
          {/* Left Column: Imagery */}
          <div className="modal-gallery">
            <div 
              className={`main-image-container ${isZoomed ? 'zoomed' : ''}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img 
                src={gem.images[activeImageIndex]} 
                alt={gem.name} 
                className="main-image"
              />
              {!isZoomed && (
                <div className="zoom-hint">
                  <ZoomIn size={20} />
                  <span>Click to zoom</span>
                </div>
              )}
            </div>
            
            <div className="thumbnail-list">
              {gem.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`${gem.name} view ${idx + 1}`}
                  className={`thumbnail ${activeImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Details & Form */}
          <div className="modal-info">
            <h2 className="modal-title">{gem.name}</h2>
            <p className="modal-scientific">{gem.scientificName} • {gem.category}</p>
            
            <div className="modal-description">
              <p>{gem.description}</p>
              
              <div className="fun-fact">
                <Info size={18} className="fact-icon" />
                <p><strong>Did you know?</strong> {gem.funFact}</p>
              </div>
            </div>

            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Color</span>
                <span className="spec-value">{gem.color}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Hardness</span>
                <span className="spec-value">{gem.hardness} Mohs</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Refractive Index</span>
                <span className="spec-value">{gem.refractiveIndex}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Origin</span>
                <span className="spec-value">{gem.origin}</span>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="inquiry-section">
              <h3>Inquire About This Gem</h3>
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="I am interested in learning more about this piece..." 
                    rows="3" 
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemModal;
