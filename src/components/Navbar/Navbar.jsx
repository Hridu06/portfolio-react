import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left */}
      <div className="nav-left">
        <span className="nav-logo">SH</span>
      </div>

      {/* Center */}
      <nav className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
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
