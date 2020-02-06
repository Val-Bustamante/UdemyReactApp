//App component: location and month figuring out
//SeasonDisplay customizes itself based on what props App passes down

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    //find user's current location
    window.navigator.geolocation.getCurrentPosition(
        //Argument 1: success callback
        (position) => console.log(position),
        //Argument 2: failure callback
        (err) => console.log(err)

    )
    return (
        <div>
            Hi there!
        </div>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);