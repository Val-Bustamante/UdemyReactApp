//figure out how to make content appear

//1.) Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from "react-dom"


//2.) create react component
const App = () => {
    const buttonText = { text: 'Click Me!' };
    return (
        <div>
            <label className="label" for="name" style={{ color: "pink", weight: "bold", marginRight: "7px" }}>ENTER NAME</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "pink", font: "Times New Roman" }}>
                {buttonText.text}
            </button>
        </div>
    );
}

//3.) take react componet and show on the screen
ReactDOM.render(
    <App />,
    //native function in all browsers
    document.querySelector('#root')
);

