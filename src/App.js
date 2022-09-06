
import './App.css';
import About from './components/About/About';
import Header from './components/header/header';
import Hero, { Home } from './components/Hero/hero';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Reservation from './Reservations/Reservation';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Form/Contact';

function App() {
  return (
    <div className="App">
 
       <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
       </Router>  
    </div>
  );
}

export default App;
