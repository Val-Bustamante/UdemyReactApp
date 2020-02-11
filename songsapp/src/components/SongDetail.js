import React from 'react'
import { connect } from 'react-redux'

//functional component
const SongDetail = ({selectedSong}) => {
    
    if (!selectedSong) {
        return <div>Select a song!</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {selectedSong.title}</p>
            <p>Duartion: {selectedSong.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);