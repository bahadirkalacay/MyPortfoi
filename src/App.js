import Navbar from './pages/Navbar';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollButton from './pages/ScrollButton';
import "./scss/main.scss";

function App() {
  return (
    <div className="container-fluid">
      <ScrollButton /> 
      <Navbar /> 
      <LandingPage /> 
      <AboutMe /> 
      <Projects /> 
      <Contact /> 
    </div>
  );
}

export default App;
