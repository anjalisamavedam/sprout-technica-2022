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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div> Name: 
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div> Location: 
              <input type="text" value={this.state.location} onChange={this.handleChange} />
            </div>
            <div> CareerArea: 
              <input type="text" value={this.state.careerArea} onChange={this.handleChange} />
            </div>
            <div> Pronouns: 
              <input type="text" value={this.state.pronouns} onChange={this.handleChange} />
            </div>
            <div> Email: 
              <input type="text" value={this.state.email} onChange={this.handleChange} />
            </div>
            <input type="submit" value="Submit" />
          </form>
        );
    }
}

export default MatchingForm;