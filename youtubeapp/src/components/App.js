//class base components
import React from 'react'
import SearchBar from "./SearchBar"

class App extends React.Component {

    onTermSubmit = (term)=> {

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;