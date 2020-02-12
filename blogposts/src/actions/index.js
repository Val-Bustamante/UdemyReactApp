//action creator
import _ from 'lodash';
import jsonPlaceholder from "../api/jsonPlaceholder"

// with async await, the action creator is not returning
//a plain js object
//without async though, the action will be dispatched to reducers
//way before the request to the api is complete threfore not giving us access to data on time
export const fetchPosts = () => {

    //no getState in arg because it is not being utilized
    return async (dispatch) => {

        //request to api
        const response = await jsonPlaceholder.get('/posts')

        //manually dispatching action
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`./users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
}