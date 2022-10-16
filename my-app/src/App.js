import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';

import Internship from './components/internship/Internship';
import Matching from './components/matching/Matching';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Router>

        <Routes>
<<<<<<< HEAD
          <Route path='/internship' element={<Internship/>}></Route>
          <Route path='/matching' element={<Matching />}></Route>
        </Routes>
      </Router>
      <a href="/internship">Internship</a>
      <a href="/matching">Matching</a>
=======
            <Route path='/' element={<App />}></Route>
            <Route path='/internship' element={<Internship />}></Route>
        </Routes>
      </Router>

>>>>>>> main


    </div>
  );
}

export default App;