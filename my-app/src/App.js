import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';

import Internship from './components/internship/Internship';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Router>
        <Link to="/internship">Internship</Link>
        
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/internship' element={<Internship />}></Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;