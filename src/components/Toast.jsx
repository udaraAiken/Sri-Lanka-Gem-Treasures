import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="toast-container slide-in">
      <div className="toast-content">
        <CheckCircle className="toast-icon" size={24} />
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
