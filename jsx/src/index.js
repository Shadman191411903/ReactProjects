//Getting content to the screen

//1. Import the react and reactDom libraries

import React from 'react'
import ReactDOM from 'react-dom'

//function
function returnButtonName(){
    return 'Click on me'
}

//2. Create a react component/ function

const App=()=>{
    return (
    <div>
        <label className="label" htmlFor="name"> Enter Name: </label>
        <input id="name" type="text">
            </input>
        <button type="submit" style={{backgroundColor:"blue",color:"white"}}>{returnButtonName()}</button> 
    </div>
    );
}
//3. Take the react component and show it on the screen

ReactDOM.render(<App/>,document.querySelector('#root'))