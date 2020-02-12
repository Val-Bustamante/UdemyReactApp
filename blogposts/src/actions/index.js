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

//only action creator that will be called
export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    //must dispatch the result of calling the action creator
    //await = will make sure that when we dispatch the action creator
    //and the inner func gets called, we wait for the api request to
    //complete before doing anything else within this action creator
    await dispatch(fetchPosts());

    //using lolash map func, will create an array of all userids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)))

}
/*export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}

//memoize outside the action creator so it only gets memoized one time
//Where we will make a request and dispatch an action
//fetches user one time
// _ = private function that should not be accessed outside this file
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`./users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
})*/


