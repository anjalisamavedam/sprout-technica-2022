import image from '../../img/sprout.PNG';
import image1 from '../../img/squash.PNG';
import "./Home.css";

function Home() {
  return (
    <div>

      <img className="pot" src={image} alt="background" height={100} width={100}></img>

      <div className="missionStatement">
        <h3 className="claim">Supporting Professionals in Reaching <br></br>Our Underrepresented Talents</h3>
        <p className="slogan">The aim of Supporting Professionals in Reaching Our Underrepresented Talents was created in order to foster a tight-knit community among the underrepresented people of the technology industry. Through Sprout, metees and mentor are able to connect with partners and form profound connections that can provide unique opportunities to the mentee and a fresh perspective to the mentor. Additionally, the mentee has access to resources that emphasize financial literacy and career opportunities. Similarly, the mentor has opportunities to stay engage in the field through awareness of part time roles within the industry. </p>

      </div> 

      <br/>
      <br/>
      <br/>

      <div className="squash">
        <h3 className="imposter-syndrome">✨<i>Squash</i> Imposter Syndrome✨</h3>
        <img className="squash-img" src={image1} alt="squash" height={100} width={100}></img>

      </div>
      
    </div>

  );
}

export default Home;