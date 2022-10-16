import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import image from './img/sprout.PNG';
import image1 from './img/squash.PNG';
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar';
import Mentee from './components/mentee/Mentee';
import Mentor from './components/mentor/Mentor';
import Matching from './components/matching/Matching';

function App() {
  return (
    //<div className="App" style={{ backgroundImage:`url(./img/sprout.PNG)` }}>
    <div>
      <Navbar/>

      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/mentee' element={<Mentee/>}></Route>
          <Route path='/mentor' element={<Mentor/>}></Route>
          <Route path='/matching' element={<Matching/>}></Route>
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;