import React, { Component } from 'react';

export default class TimerExample extends Component {
    getInitialState () {
        return { elapsed: 0 };
    }
    //componentDidMount() is invoked immediately after a component is mounted. 
    // Initialization that requires DOM nodes should go here. 
    // If you need to load data from a remote endpoint, 
    // this is a good place to instantiate the network request. 
    // Setting state in this method will trigger a re-rendering.
    // We can set the interval here for the timer
    componentDidMount() {
        this.timer = setInterval(this.tick, 50);
    }
    //such as invalidating timers, 
    //canceling network requests, 
    //or cleaning up any DOM elements that were created in componentDidMount
    componentWillUnmount () {
        clearInterval(this.timer);
    }
    tick () {
        let currentTime = new Date();
        this.setState({ elapsed: currentTime - this.props.startTime });
    }
    render () {
        let elapsed = Math.round(this.state.elapsed / 100);
        let seconds = (elapsed / 10).toFixed(1);
        return <p>This example was started <b>{seconds} seconds </b> ago.</p>;
    }
}
