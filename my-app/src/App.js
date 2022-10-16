import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';

import Mentee from './components/mentee/Mentee';
import Mentor from './components/mentor/Mentor';
<<<<<<< HEAD
=======
import Internship from './components/internship/Internship';
import Matching from './components/matching/Matching';
>>>>>>> 9b7d42eeeee8085886396b793fad1538ad7b3726


function App() {
  return (
    <div className="App">

      <Navbar/>

      <Router>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/mentee' element={<Mentee/>}></Route>
          <Route path='/mentor' element={<Mentor/>}></Route>
<<<<<<< HEAD
=======
          <Route path='/internship' element={<Internship/>}></Route>
          <Route path='/matching' element={<Matching/>}></Route>
>>>>>>> 9b7d42eeeee8085886396b793fad1538ad7b3726
        </Routes>
      </Router>

    </div>
  );
}

export default App;