import "./App.css";
import {Routes, Route} from 'react-router-dom' ;
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import {Blog, BlogElement} from './Componets/Blog';
import NavigationBar from './Componets/NavigationBar'
import './CSS/style.css';
import myCompo1 from "./Componets/myCompo1";


function App() {
  return (
    <div> 
          <div className="NavPosition">
        <NavigationBar></NavigationBar>
      </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route  path="/About" element={ <About/> } />
        <Route path="/Contact" element={<Contact/>} />
        < Route path="/Blog" element={ <Blog/>} />
      </Routes>

      <div>
        <myCompo1/>
      </div>
    </div>
  )
}

export default App;
