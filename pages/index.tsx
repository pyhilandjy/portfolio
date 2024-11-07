// pages/index.tsx
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Stack from "../components/Stack";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <Header />
      <AboutMe />
      <Stack />
      <Projects />
    </div>
  );
};

export default Home;
