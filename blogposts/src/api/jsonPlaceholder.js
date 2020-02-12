import axios from 'axios'

export default axios.create({
    //no /posts at the end because we want to specify the end point
    //once we make the actual request
    baseURL: "https://jsonplaceholder.typicode.com",

})