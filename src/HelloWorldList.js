import React, { Component } from 'react';
import './HelloWorldList.css';

import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
    constructor(props) {
        super(props)
        this.state = { greetings: ['Jim', 'Sally', 'Bender'] }
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
            return name !== removeName;
        });
        this.setState({ greetings: filteredGreetings });
    }

    renderGreetings() {
        return this.state.greetings.map(name => ( //map -> loops over the array and call a function for each element in that array, storing the results in a new array
            <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} /> //React needs to know which element to modify/remove/etc when one of the elements in your list changes, it has to be able to uniquely identify which element it is, so here we’re just specifying the key (array index) as the name
        ))
    }

    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting} /> {/*Child Component of HelloWorldList*/}
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;