import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cvFile from "../../assets/Sabbir Hossain Hridoy ATS CV.pdf";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Center */}
      <nav className={`nav-center ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        <a href="#my-work" onClick={() => setIsMobileMenuOpen(false)}>My Work</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
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
