import image from '../../img/sprout.PNG';
import image1 from '../../img/squash.PNG';

import helen from '../../img/helen.jpeg';
import anjali from '../../img/anjali.jpeg';
import jennifer from '../../img/jennifer.jpeg';
import beatrice from '../../img/beatrice.jpeg'

import "./Home.css";

function Home() {
  return (
    <div>

      <img className="pot" src={image} alt="background" height={100} width={100}></img>

      <div className="missionStatement">
        <h3 className="claim">Supporting Professionals in Reaching <br></br>Our Underrepresented Talents</h3>
        <p className="slogan">The aim of Supporting Professionals in Reaching Our Underrepresented Talents was created in order to foster a tight-knit community among the underrepresented people of the technology industry. Through Sprout, mentees and mentor are able to connect with partners and form profound connections that can provide unique opportunities to the mentee and a fresh perspective to the mentor. Additionally, the mentee has access to resources that emphasize financial literacy and career opportunities. Similarly, the mentor has opportunities to stay engage in the field through awareness of part time roles within the industry. </p>

      </div>

      <br />
      <br />
      <br />

      <h3 className="team">Meet the Team</h3>
      <div className="headshot-rows">
        <div className="headshot-div">
          <a target="_blank" href={helen}>
            <img className="headshot" src={helen} alt="Helen Gu" />
          </a>
          <p><strong>Helen Gu</strong></p>
          <p>Backend Developer</p>
        </div>
        <div className="headshot-div">
          <a target="_blank" href={anjali}>
            <img className="headshot" src={anjali} alt="Anjali Samavedam" />
          </a>
          <p><strong>Anjali Samavedam</strong></p>
          <p>Backend Developer</p>
        </div>
        <div className="headshot-div">
          <a target="_blank" href={jennifer}>
            <img className="headshot" src={jennifer} alt="Jennifer Li" />
          </a>
          <p><strong>Jennifer Li</strong></p>
          <p>Frontend Developer</p>
        </div>
        <div className="headshot-div">
          <a target="_blank" href={beatrice}>
            <img className="headshot" src={beatrice} alt="Beatrice Chung" />
          </a>
          <p><strong>Beatrice Chung</strong></p>
          <p>Frontend Developer</p>
        </div>
      </div>

      <br />
      <br />
      <br />


      <div className="squash">
        <h3 className="imposter-syndrome">✨<i>Squash</i> Imposter Syndrome✨</h3>
        <img className="squash-img" src={image1} alt="squash" height={100} width={100}></img>

      </div>

    </div >

  );
}

export default Home;