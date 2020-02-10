import React from 'react'
import VideoItem from './VideoItem'

/*const VideoList = (props) => {
    return (
    <div>{props.videos.length}</div>
    )
}*/
//^^^same thing as this but with using the word props
const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />
    })
    return (
    <div className="ui relaxed divided list">{renderedList}</div>
    )
}


export default VideoList