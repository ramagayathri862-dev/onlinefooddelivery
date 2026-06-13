import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] =
    useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.body.classList.toggle(
      "dark-mode"
    );
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        🍔 FoodExpress
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/restaurants">
          Restaurants
        </Link>

        <Link to="/menu">
          Menu
        </Link>

        <Link to="/cart">
          Cart
        </Link>

        <button
          className="dark-btn"
          onClick={toggleDarkMode}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;