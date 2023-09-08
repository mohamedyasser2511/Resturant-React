import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Menu from './pages/Menu'
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      
        <Router>
        <Navbar/>
        <Routes>
        <Route path='/' Component={Home} />
        <Route path='/menu' Component={Menu}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
          
      
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
