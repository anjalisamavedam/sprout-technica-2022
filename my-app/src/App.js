import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';

import Internship from './components/internship/Internship';

function App() {
  return (
    <div className="App">
        
      <Router>
        <Link to="/internship">Internship</Link>
        
        <Routes>
          <Route path='/internship' element={<Internship/>}></Route>
        </Routes>
      </Router>
      {/*  */}


    </div>
  );
}

export default App;
