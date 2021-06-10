import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          CoWin Vaccination Slot Checker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menubar"
        >
          <span className="navbar-toggler-icon border-none"></span>
        </button>
        <div className="collapse navbar-collapse" id="menubar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
