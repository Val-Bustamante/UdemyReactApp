//App component: location and month figuring out
//SeasonDisplay customizes itself based on what props App passes down

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            Hi there!
        </div>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);