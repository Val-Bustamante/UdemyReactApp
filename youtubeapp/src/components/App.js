//class base components
import React from 'react'
import SearchBar from "./SearchBar"
import youtube from "../API/youtube"
import VideoList from "./VideoList"

class App extends React.Component {

    state = { videos: [], selectedVideo: "" }
    onTermSubmit = async (term) => {
        //telling youtube what term was searched
        const response = await youtube.get("./search", {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;