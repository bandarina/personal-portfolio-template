import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Portfolio } from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <About />
        <Portfolio />
    </div>
  );
}

export default App;
