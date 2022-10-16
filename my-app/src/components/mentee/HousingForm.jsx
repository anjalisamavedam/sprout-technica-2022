import React from 'react';
import Housing from './Housing'

class HousingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: "",
            cardPayment: "",
            carPayment: "",
            loanPayment: "",
            appraisedValue: "",
            downPayment: "",
            loanAmount: "",
            mortgagePayment: "",
            creditScore: "",
            result: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setIncome = this.setIncome.bind(this);
        this.setAppraisedValue = this.setAppraisedValue.bind(this);
        this.setCardPayment = this.setCardPayment.bind(this);
        this.setCarPayment = this.setCarPayment.bind(this);
        this.setLoanPayment = this.setLoanPayment.bind(this);
        this.setDownPayment = this.setDownPayment.bind(this);
        this.setLoanAmount = this.setLoanAmount.bind(this);
        this.setMortgagePayment = this.setMortgagePayment.bind(this);
        this.setCreditScore = this.setCreditScore.bind(this);
        this.setResult = this.setResult.bind(this);
        
    }

    setIncome(event) {
        this.setState({income: event.target.value})
    }

    setCardPayment(event) {
        this.setState({cardPayment: event.target.value})
    }

    setCarPayment(event) {
        this.setState({carPayment: event.target.value})
    }

    setLoanPayment(event) {
        this.setState({loanPayment: event.target.value})
    }

    setAppraisedValue(event) {
        this.setState({appraisedValue: event.target.value})
    }

    setDownPayment(event) {
        this.setState({downPayment: event.target.value})
    }

    setLoanAmount(event) {
        this.setState({loanAmount: event.target.value})
    }

    setMortgagePayment(event) {
        this.setState({mortgagePayment: event.target.value})
    }

    setCreditScore(event) {
        this.setState({creditScore: event.target.value})
    }

    setResult(value) {
        this.setState({result: value})
    }

    
    handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "monthlyIncome": this.state.income,
                "cardPayment": this.state.cardPayment,
                "carPayment": this.state.carPayment,
                "loanPayment": this.state.loanPayment,
                "appraisedValue": this.state.appraisedValue,
                "downPayment": this.state.downPayment,
                "loanAmount": this.state.loanAmount,
                "mortgagePayment": this.state.mortgagePayment,
                "creditScore": this.state.creditScore
            })
        };
        fetch('http://127.0.0.1:5000/housing', requestOptions)
            .then(response => response.json())
            .then(data => this.setResult(data["result"]));

        console.log(this.state)

        event.preventDefault();
    }

    render() {
        if (this.state.result != "") {
           return (<Housing result={this.state.result}/>)

        } else {
            return (
                <div class="formcontainer">
                    <div class="title">Housing Form</div>
                    <form onSubmit={this.handleSubmit}>
                        <div> 
                            <label>Gross Monthly Income: </label>
                            <input type="text" value={this.state.income} onChange={this.setIncome} />
                        </div>
                        <div>Credit Card Payment:
                          <input type="text" value={this.state.cardPayment} onChange={this.setCardPayment} />
                        </div>
                        <div> 
                            <label>Car Payment: </label>
                            <input type="text" value={this.state.carPayment} onChange={this.  setCarPayment} />
                        </div>
                        <div> 
                            <label>Student Loan Payments: </label>
                            <input type="text" value={this.state.loanPayment} onChange={this. setLoanPayment} />
                        </div>
                        <div> 
                            <label>Appraised Value: </label>
                            <input type="text" value={this.state.appraisedValue} onChange={this.setAppraisedValue} />
                        </div>
                        
                        <div>Down Payment: 
                          <input type="text" value={this.state.downPayment} onChange={this.setDownPayment} />
                        </div>
                        <div>Loan Amount: 
                          <input type="text" value={this.state.loanAmount} onChange={this.setLoanAmount} />
                        </div>
                        <div>Monthly Mortgage Payment: 
                          <input type="text" value={this.state.mortgagePayment} onChange={this.setMortgagePayment} />
                        </div>
                        <div>Credit Score: 
                          <input type="text" value={this.state.creditScore} onChange={this.creditScore} />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            );
        }
    }
}

export default HousingForm;