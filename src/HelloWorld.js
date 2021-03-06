import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props) { //constructor() is a special function to perform some actions when the class is used (usually referred to as “instantiation”)
        super(props); //call out to its parent constructor
        this.state = { greeting: 'Hello' }; //sets a property on the class called “state”
        this.frenchify = this.frenchify.bind(this); //This tells Javascript “Hey, any time you see a reference to 'this' inside of the frenchify function, I want you specifically to refer to ME.”
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' })
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name} {this.props.surname}!
                <br />
                <button className="HelloWorldBtn" onClick={this.frenchify}>Frenchify!</button>
                <br />
                <button onClick={this.removeGreeting}>Remove</button>
            </div>
        )
    }
}

export default HelloWorld