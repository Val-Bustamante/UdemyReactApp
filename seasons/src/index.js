//App component: location and month figuring out
//SeasonDisplay customizes itself based on what props App passes down

import React from 'react';
import ReactDOM from 'react-dom';

//subclassing React.Component to utilize its functionality
class App extends React.Component {

    //according to js, this is necessary
    constructor(props) {

        //since the Component class is being overwritten, we must refrence its contsructor function using super
        super(props);
        this.state = {
            latitude: null,
            errorMessage: null
        };

        //find user's current location
        window.navigator.geolocation.getCurrentPosition(
            //Argument 1: success callback
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            },
            //Argument 2: failure callback
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        )
    }

    //according to react, render must always be defined
    render() {
        return (
            <div> Latitude: {this.state.latitude} <br />
                Error: {this.state.errorMessage}</div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);