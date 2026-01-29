import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Left */}
      <div className="nav-left">
        <img src={logo} alt="Hridoy Logo" className="nav-logo" />
      </div>

      {/* Center */}
      <nav className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#my-work">My Work</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Right */}
      <div className="nav-right">
        <button className="nav-btn">Download CV</button>
      </div>
    </header>
  );
};

export default Navbar;
