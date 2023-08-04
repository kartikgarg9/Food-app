import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
  return (
    <div className="header">
    <div className="logo"> 
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1635051%2Fscreenshots%2F4291569%2Fsocio_curry_logo-01.png&tbnid=rqVTlhl4SvSvvM&vet=12ahUKEwiTiPmc766AAxXummMGHQXWCEAQMygBegUIARDOAQ..i&imgrefurl=https%3A%2F%2Fdribbble.com%2Fshots%2F4291569-Food-App-Logo&docid=jYbqjQ0sXUE2ZM&w=800&h=600&q=food%20app%20logo%20small%20size&ved=2ahUKEwiTiPmc766AAxXummMGHQXWCEAQMygBegUIARDOAQ"></img>
    </div>
    <div className="nav-items">
  <ul>
    <li>Home</li>
    <li>About Us </li>
    <li>Contact Us</li>
    <li>Cart </li>
  </ul>
    </div>
    </div>
  );
};

const styleCard=
{
  backgroundColor:"#f0f0f0"
}

const RestaurantCard=()=>
{
  return(
    <div className="res-card" style={styleCard}>
<h3>Meghana Foods</h3>
    </div>
  )

}

const Body=()=>
{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
   <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = ()=>{
  return (
    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
