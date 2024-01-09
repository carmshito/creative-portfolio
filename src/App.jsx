import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Intro />
     <About />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
