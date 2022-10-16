import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import image from './img/sprout.PNG';
import image1 from './img/squash.PNG';
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
          <Route path='/' element={<App/>}></Route>
          <Route path='/mentee' element={<Mentee/>}></Route>
          <Route path='/mentor' element={<Mentor/>}></Route>
          <Route path='/matching' element={<Matching/>}></Route>
        </Routes>
      </Router>
      <img src={image} height={100} width={100}></img>

      <div class="missionStatement">
        <h3>Supporting Professionals in Reaching <br></br>Our Underrepresented Talents</h3>
        <p>The aim of Supporting Professionals in Reaching Our Underrepresented Talents was created in order to foster a tight-knit community among the underrepresented people of the technology industry. Through Sprout, metees and mentor are able to connect with partners and form profound connections that can provide unique opportunities to the mentee and a fresh perspective to the mentor. Additionally, the mentee has access to resources that emphasize financial literacy and career opportunities. Similarly, the mentor has opportunities to stay engage in the field through awareness of part time roles within the industry. </p>

      </div> 

      <div class="squash">
        <h3><i>Squash</i> Imposter Syndrome</h3>
        <img src={image1} height={100} width={100}></img>

      </div>
      
    </div>

  );
}

export default App;