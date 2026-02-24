import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </Layout>
  );
}

export default App;
