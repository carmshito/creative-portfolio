import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
    <Sidebar />
     <Intro />
     <About />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
