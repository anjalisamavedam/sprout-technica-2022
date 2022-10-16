import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Internship from './components/internship/Internship';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/internship' element={<Internship/>}></Route>
        </Routes>
      </Router>
      {/* <a href="/internship">Internship</a> */}


    </div>
  );
}

export default App;
