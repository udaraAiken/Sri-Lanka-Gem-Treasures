import React from "react";
import { GemsContext } from "../context/GemContext";

export function GemsProvider({ children }) {
  const [selectedGem, setSelectedGem] = React.useState(null);
  const [toastMessage, setToastMessage] = React.useState("");
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [activePage, setActivePage] = React.useState("home");

  const value = {
    selectedGem,
    setSelectedGem,
    toastMessage,
    setToastMessage,
    isToastVisible,
    setIsToastVisible,
    activePage,
    setActivePage,
  };

  return <GemsContext.Provider value={value}>{children}</GemsContext.Provider>;
}
