import React from "react";
import { NotificationContext } from "../context/GemContext";

export function NotificationProvider({ children }) {
  const [toastMessage, setToastMessage] = React.useState("");
  const [isToastVisible, setIsToastVisible] = React.useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const value = {
    toastMessage,
    setToastMessage,
    isToastVisible,
    setIsToastVisible,
    showToast,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
