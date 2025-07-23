import React from "react";
import "../styles/FormStyles.css";

const Navbar = ({ onRouteChange, currentPage }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">User Portal</h1>
      <div className="nav-links">
        <button
          className={currentPage === "register" ? "active" : ""}
          onClick={() => onRouteChange("register")}
        >
          Register
        </button>
        <button
          className={currentPage === "verify" ? "active" : ""}
          onClick={() => onRouteChange("verify")}
        >
          Verify
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
