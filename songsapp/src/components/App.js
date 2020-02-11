//not a class based component because we're not making use of state
/* Reducers: SongList, and SelectedSong (saving state)
ActionCreator: SelectedSong (change of state)
Components: SongList, SongDetail
*/
import React from 'react'
//import { selectSong } from '../actions'
//{} says we want to import a named export

//functional component because we're storing data inside of redux instead of state within react components
const App = () => {
    return <div>App</div>
};

export default App;