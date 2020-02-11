//Reducers: SongList, SelectedSong

//returns a static list of sings 
import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: "Smells Like Teen Spirit", duration: "3:05"},
        {title: "No Scrubs", duration: "2:05"},
        {title: "Hips Don't Lie", duration: "4:05"},
    ]
}

const selectSongReducer = (selectedSong=null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

}

//will allow any file to have access to list of combined reducers
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
})