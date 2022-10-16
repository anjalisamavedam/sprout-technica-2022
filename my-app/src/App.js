import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar';
import Mentee from './components/mentee/Mentee';
import Mentor from './components/mentor/Mentor';
import Matching from './components/matching/Matching';

function App() {
  return (
    <div>
      <Navbar/>

      <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/mentee' element={<Mentee/>}></Route>
          <Route path='/mentor' element={<Mentor/>}></Route>
          <Route path='/matching' element={<Matching/>}></Route>
        </Routes>
      </Router>

      <div className="footer">
        <br/>
        <p className="footertext">Technica 2023 Project: Sprout</p>
      </div>

    </div>
  );
}

export default App;