import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imagesArray = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className="image-list" >{imagesArray}</div>
}

export default ImageList