//App component: location and month figuring out
//SeasonDisplay customizes itself based on what props App passes down

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

//subclassing React.Component to utilize its functionality
class App extends React.Component {

    //according to js, this is necessary
    /* constructor(props) {
 
         //since the Component class is being overwritten, we must refrence its contsructor function using super
         super(props);
         this.state = {
             latitude: null,
             errorMessage: ''
         };
     }*/

    state = { latitude: null, errorMessage: '' }


    componentDidMount() {
        //find user's current location
        window.navigator.geolocation.getCurrentPosition(
            //Argument 1: success callback
            (position) => this.setState({ latitude: position.coords.latitude }),
            //Argument 2: failure callback
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {

        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude} />
        }
        return (
            <Spinner message="Please Accept Location Request" />
        )

    }
    //according to react, render must always be defined
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);