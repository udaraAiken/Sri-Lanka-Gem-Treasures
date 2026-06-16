import { useState } from "react";
import { Gem, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "collection", label: "Collection" },
    { id: "about", label: "About Sri Lanka" },
    { id: "verify", label: "Verify Cert" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={() => handleNavClick("home")}>
          <Gem className="logo-icon" size={28} />
          <span className="logo-text">Ceylon Gems</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item active`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item active`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
