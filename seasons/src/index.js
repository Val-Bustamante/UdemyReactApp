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
            latitude: null
        };
    }

    //according to react, render must always be defined
    render() {
        //find user's current location
        window.navigator.geolocation.getCurrentPosition(
            //Argument 1: success callback
            (position) => console.log(position),
            //Argument 2: failure callback
            (err) => console.log(err)

        )
        return <div> Latitude: </div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);