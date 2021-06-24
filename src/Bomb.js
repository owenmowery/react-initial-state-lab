import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft !== 0) {
            return (
                <div>
                    <p>{this.state.secondsLeft} seconds left before I go boom!</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>Boom!</p>
                </div>
            )
        }
    };
};

export default Bomb
