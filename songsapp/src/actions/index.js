//action creator
//returns an action
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }

}

//allows us to export many different functions from a single file
