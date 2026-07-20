import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cvFile from "../../assets/Sabbir Hossain Hridoy ATS CV.pdf";


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
        <a className="nav-btn" href={cvFile} download>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;
