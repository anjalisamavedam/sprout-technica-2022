import React from 'react';


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
            interests: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setName = this.setName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setCareerArea = this.setCareerArea.bind(this);
        this.setPronouns = this.setPronouns.bind(this);
        this.setEmail = this.setEmail.bind(this);
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

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div class="container">
                <div class="title">Matching Form</div>
                <form onSubmit={this.handleSubmit}>
                    <div> 
                        <label>Name: </label>
                        <input type="text" value={this.state.name} onChange={this.setName} />
                    </div>
                    <div> 
                        <label>Location: </label>
                        <input type="text" value={this.state.location} onChange={this.setLocation} />
                    </div>
                    <div> 
                        <label>Career Area: </label>
                        <input type="text" value={this.state.careerArea} onChange={this.setCareerArea} />
                    </div>
                    <div> Pronouns: 
                      <input type="text" value={this.state.pronouns} onChange={this.setPronouns} />
                    </div>
                    <div> Email: 
                      <input type="text" value={this.state.email} onChange={this.setEmail} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
          
        );
    }
}

export default MatchingForm;