import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from "./components/Projects";

function App() {
  return (
    <div>
     <Intro />
     <About />
     <Projects />
    </div>
  );
}

export default App;
