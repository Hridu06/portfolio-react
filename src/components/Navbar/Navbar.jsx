import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">SH</div>

      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="nav-btn">Download CV</button>
    </header>
  );
};

export default Navbar;
