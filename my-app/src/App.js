import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Mentee from './components/mentee/Mentee';
import Mentor from './components/mentor/Mentor';
import Matching from './components/matching/Matching';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Router>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/mentee' element={<Mentee/>}></Route>
          <Route path='/mentor' element={<Mentor/>}></Route>
          <Route path='/matching' element={<Matching/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;