import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Body from "./Body";
/**
 * These are the things we are going to have in our project.
 * header
 *  -logo
 *  -nav items
 * body
 *  -search
 *  -restraurant container
 *      -rest. cards
 * footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */





const Restaurant = ({resData}) => (
    <div className="restaurant" style={{backgroundColor:"#f0f0f0"}}>
        <img className="food_logo" src={resData.image}/>
        <h3>{resData.name}</h3>
        <h4>{resData.rating}⭐</h4>
        <h5>{resData.deliveryTime}🕒</h5>
    </div>
)



const Appcontainer = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcontainer />)