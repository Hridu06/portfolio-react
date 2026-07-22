import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import MyWork from "../sections/MyWork/MyWork";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
