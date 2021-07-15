import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props) { //constructor() is a special function to perform some actions when the class is used (usually referred to as “instantiation”)
        super(props); //call out to its parent constructor
        this.state = { greeting: 'Ciao' }; //sets a property on the class called “state”
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name} {this.props.surname}
            </div>
        )
    }
}

export default HelloWorld