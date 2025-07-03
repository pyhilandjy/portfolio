// pages/index.tsx
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="career">
        <Career />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
