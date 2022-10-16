import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Internship from './components/internship/Internship';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' exact element={<App/>}></Route> */}
          <Route path='/internship' element={<Internship/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
