import axios from 'axios'

const KEY = "AIzaSyBpXJkKCKdsfM8qPgbM9b9RspQpFQv2bhM"

//make a preconfigured instance of axios that already has a base url
//and default params loaded into it
//query will be configured wheneber instance is used so do not
//preconfigure
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});

//youtube.get("./search") 
//will later be appended to url