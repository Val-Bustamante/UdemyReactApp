import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    Authorization: 'Client-ID 48a1b69769b128d8943aeb8611257c8055820b4b8706e76c67fe19940997fa07'
}
)