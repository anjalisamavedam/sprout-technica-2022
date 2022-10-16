import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';

import Mentee from './components/mentee/Mentee';
import Mentor from './components/mentor/Mentor';


function App() {
  return (
    <div className="App">

      <Navbar/>

      <Router>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/mentee' element={<Mentee/>}></Route>
          <Route path='/mentor' element={<Mentor/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;