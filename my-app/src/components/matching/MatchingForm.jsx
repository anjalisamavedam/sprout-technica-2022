import React from 'react';


class MatchingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

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
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div> Location:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div> Location:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <input type="submit" value="Submit" />
          </form>
        );
    }
}

export default MatchingForm;