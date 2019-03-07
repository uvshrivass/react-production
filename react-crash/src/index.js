import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header"
import Register from "./components/register"

const App = ()=>{
    return (
        <div>
            
            <Header />
            <Register />
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
