import React from "react";

//Loading external styles
import "../css/styles.css"

// // Declaring variable that will can be accessed later
// const info = {
//     fname : "Ujjwal",
//     lname : "Shrivas"
// }


// Using ES5 method, i.e without using class
// const Header = ()=>{
//     return (
//     <div>
//     <h1>I am from Header component. </h1>
//     <p>Your first name is {info.fname} and your last name is {info.lname}.</p>
//     </div>
//     )
// }


// Using ES6 method, i.e using class
// class Header  extends React.Component{
//     render(){
//         return(
//             <div>
//             <h1>I am from Header component. </h1>
//             <p>Your first name is {info.fname} and your last name is {info.lname}.</p>
//             </div>
//         )
//     }
// }


class Header  extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            title : "",
            
        }
    }
    // Without arrow function use .bind(this) method
    // onChangeHandler (e) {
    //     this.setState({
    //         title : e.target.value
    //     })
    // }

    //     render(){
    //         return(
    //             <header>
    //                 <div className='logo'>Logo</div>
    //                 <div className="flex">
    //                 <p className="p_inline">Search</p>
    //                 <input id="inp" onChange={this.onChangeHandler.bind(this)} type="text" />
                    
    //                 </div>
    //                 <div id='title'>{this.state.title}</div>
                    
    //             </header>
    //         )
    //     }
    // }



    // With arrow function, dont need to use .bind(this) method
    onChangeHandler = (e) =>{
        this.setState({
            title : e.target.value
        })
    }

    render(){
        return(
            <header>
                
                <div className='logo'>Logo</div>
                
                <div className="flex">
                <p className="p_inline">Search</p>
                <input id="inp" onChange={this.onChangeHandler} type="text" />
                </div>
                
                <div id='title'>{this.state.title}</div>
                
            </header>
        )
    }
}
export default Header;

