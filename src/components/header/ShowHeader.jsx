import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowHeader = ({ children }) => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/reset"
    ) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  return (
    <div className="sticky top-0 left-0 right-0">{showHeader && children}</div>
  );
};

export default ShowHeader;
