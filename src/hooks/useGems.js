import React from "react";
import { GemsContext } from "../context/GemContext";

export const useGems = () => {
  const context = React.useContext(GemsContext);
  if (!context) {
    throw new Error("useGems must be used within a GemsProvider");
  }
  return context;
};
