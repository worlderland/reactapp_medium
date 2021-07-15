import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    render() {
        return (
            <div className="HelloWorld">
                Hello {this.props.name} {this.props.surname}
            </div>
        )
    }
}

export default HelloWorld