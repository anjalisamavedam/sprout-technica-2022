import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Internship from './components/internship/Internship';
import Matching from './components/matching/Matching';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/internship' element={<Internship/>}></Route>
          <Route path='/matching' element={<Matching />}></Route>
        </Routes>
      </Router>
      <a href="/internship">Internship</a>
      <a href="/matching">Matching</a>


    </div>
  );
}

export default App;
