export default (state = [], action) => {
    //same as a n if
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}