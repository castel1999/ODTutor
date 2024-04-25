import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

const Auth = ({ onClose }) => {
  const [status, setStatus] = useState("login");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  if (status === "login") {
    return (
      <Login onClose={onClose} status={status} setStatus={handleStatusChange} />
    );
  } else if (status === "register") {
    return (
      <Register
        onClose={onClose}
        status={status}
        setStatus={handleStatusChange}
      />
    );
  } else {
    return (
      <ForgotPassword
        onClose={onClose}
        status={status}
        setStatus={handleStatusChange}
      />
    );
  }
};

export default Auth;
