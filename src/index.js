//figure out how to make content appear

//1.) Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from "react-dom"

//2.) create react component
const App = () => {
    return <div>Hi there!</div>;
}

//3.) take react componet and show on the screen
ReactDOM.render(
    <App />,
    //native function in all browsers
    document.querySelector('#root')
);