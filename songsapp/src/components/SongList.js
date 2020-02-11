import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../action'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    render() {
        //this.props === {songs: state.songs}
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

//take state object (data in redux Store), and 
//run calculations on it that will make it show up as props inside our component
//state = current selected song and song list
const mapStateToProps = (state) => {
    //always returns an object that will show up as props inside component
    return {
        songs: state.songs,
        selectSong: state.selectSong
    }
}

//Connect function that reaches up and gets the list of songs
//connect is a function that returns a function
//Connect will always be called and component will always be second arg
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);


