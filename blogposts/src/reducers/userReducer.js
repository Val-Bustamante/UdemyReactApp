export default (state = [], action) => {
    //same as a n if
    switch(action.type){
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
}