// pages/index.tsx
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
