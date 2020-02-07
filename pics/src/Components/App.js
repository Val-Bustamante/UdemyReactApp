//App component
//Makes api request

import React from 'react'
import unsplash from '../API/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID 48a1b69769b128d8943aeb8611257c8055820b4b8706e76c67fe19940997fa07'
                }
            });
        //another option for handling a promise: .then((response) => {console.log(response.data.results)})

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container">
                {/*onSubmit here is not a special name since it is the name of the
                property of a component I created*/}
                < SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div >
        );
    }
}
export default App;