import React from 'react';
import { Gem, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo">
            <Gem className="logo-icon" size={24} />
            <span className="logo-text">Ceylon Gems</span>
          </div>
          <p className="footer-description">
            Discover the world's most exquisite and ethically sourced gemstones direct from the jewel island of Sri Lanka.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>Ratnapura, Sri Lanka</span>
            </li>
            <li>
              <Mail size={18} />
              <span>inquiries@ceylongems.lk</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+94 77 123 4567</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ceylon Gems. All rights reserved.</p>
        <p className="ethics-notice">Committed to ethical mining and fair trade practices.</p>
      </div>
    </footer>
  );
};

export default Footer;
