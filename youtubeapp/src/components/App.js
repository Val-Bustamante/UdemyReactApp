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

    onVideoSelect = (video) => {
       
        this.setState({selectedVideo: {video}});
        console.log("app ", this.state.selectedVideo)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;