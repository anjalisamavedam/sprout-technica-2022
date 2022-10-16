import React from 'react';
import Matched from './Matched'

class MatchingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            pronouns: '',
            ethnicity: '',
            email: '',
            phoneNum: '',
            careerArea: '',
            interests: '',
            role: '',
            matched: false,
            profile: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setName = this.setName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setCareerArea = this.setCareerArea.bind(this);
        this.setPronouns = this.setPronouns.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhoneNum = this.setPhoneNum.bind(this);
        this.setInterests = this.setInterests.bind(this);
        this.setRole = this.setRole.bind(this);
        this.setJob = this.setJob.bind(this);
        this.setMatched = this.setMatched.bind(this);
        this.setProfile = this.setProfile.bind(this);
    }

    setProfile(match) {
        this.setState({profile: match})
    }


    setMatched() {
        this.setState({matched: true})
    }

    setName(event) {
        this.setState({name: event.target.value});
    }

    setLocation(event) {
        this.setState({location: event.target.value})
    }

    setCareerArea(event) {
        this.setState({careerArea: event.target.value})
    }

    setPronouns(event) {
        this.setState({pronouns: event.target.value})
    }

    setEmail(event) {
        this.setState({email: event.target.value})
    }

    setPhoneNum(event) {
        this.setState({phoneNum: event.target.value})
    }

    setInterests(event) {
        this.setState({interests: event.target.value})
    }

    setRole(event) {
        this.setState({role: event.target.value})
    }

    setJob(event) {
        this.setState({job: event.target.value})
    }

    handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "name": this.state.name,
                "careerArea": this.state.careerArea,
                "location": this.state.location,
                "email": this.state.email,
                "phoneNumber": this.state.phoneNum,
                "interests": this.state.interests,
                "role": this.state.role,
                "job": this.state.job
            })
        };
        fetch('http://127.0.0.1:5000/add_user', requestOptions)
            .then(response => response.json())
            .then(data => this.setProfile(data["match"]));

        this.setMatched()
        
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        if (this.state.matched) {
            if (this.state.role == "mentee"){
                return (<Matched role="mentor" name={this.state.profile.name} phoneNumber={this.state.profile.phone}/>);
            } else {
                return (<Matched role="mentee" name={this.state.profile.name} phoneNumber={this.state.profile.phone}/>);
            }
                
        } else {

        
            return (
                <div class="formcontainer">
                    <div class="title">Matching Form</div>
                    <form onSubmit={this.handleSubmit}>
                        <div> 
                            <label>Role: </label>
                            <input type="radio" name="role" value="mentor" onChange={this.  setRole}/>
                            <label>Mentor</label>
                            <input type="radio" name="role" value="mentee" onChange={this.  setRole}/> 
                            <label>Mentee</label>
                        </div>
                        <div> 
                            <label>Name: </label>
                            <input type="text" value={this.state.name} onChange={this.setName} />
                        </div>

                        <div> 
                            <label>Location: </label>
                            <input type="text" value={this.state.location} onChange={this.  setLocation} />
                        </div>
                        <div> 
                            <label>Career Area: </label>
                            <input type="text" value={this.state.careerArea} onChange={this.    setCareerArea} />
                        </div>
                        <div> 
                            <label>Job: </label>
                            <input type="text" value={this.state.job} onChange={this.setJob} />
                        </div>
                        <div> Pronouns: 
                          <input type="text" value={this.state.pronouns} onChange={this.    setPronouns} />
                        </div>
                        <div> Email: 
                          <input type="text" value={this.state.email} onChange={this.setEmail} />
                        </div>
                        <div> Phone Number: 
                          <input type="text" value={this.state.phoneNum} onChange={this.    setPhoneNum} />
                        </div>
                        <div> Interests: 
                          <input type="text" value={this.state.interests} onChange={this.   setInterests} />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            );
        }
    }
}

export default MatchingForm;