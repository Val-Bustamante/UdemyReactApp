import React from 'react'
import VideoItem from './VideoItem'

/*const VideoList = (props) => {
    return (
    <div>{props.videos.length}</div>
    )
}*/
//^^^same thing as this but with using the word props
const VideoList = ({videos}) => {
    const renderedList = videos.map((vid) => {
        return <VideoItem vid={vid} />
    })
    return (
    <div className="ui relaxed divided list">{renderedList}</div>
    )
}


export default VideoList