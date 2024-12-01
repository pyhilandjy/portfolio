// pages/index.tsx
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Career from "../components/Career";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Career />
      <Projects />
    </>
  );
};

export default Home;
