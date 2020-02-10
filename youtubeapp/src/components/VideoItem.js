import React from 'react'


const VideoItem = ({ vid }) => {
    return (
        <div className="item">
            <img className="ui image" src={vid.snippet.thumbnails.high.url}></img>
            <div>
                <div className="header">{vid.snippet.title}</div>
            </div>

        </div>
    )
}

export default VideoItem;