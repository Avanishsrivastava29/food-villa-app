import React from "react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import image from "./download.webp"
import UserContext from "../Utils/UserContext";
 




const Title = () => (
  <a href="/">
    <img className="logo" src={image} alt="Food villa Logo"  height="80px" width="80px"/>
  </a>
);



// Header component for header section: Logo, Nav Items
const Header = () => {

  const [loggedUser, SetLoggedUser] = useState(true);
  const {user}=useContext(UserContext)

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> <Link to="/" className="link">Home</Link></li>
          <li> <Link to="/About" className="link">About</Link></li>
          <li><Link to="/Contact" className="link">Contact</Link></li>


       <li><Link to ="/instamart" className="link">
          Instamart
        </Link></li> 
        </ul>
      </div>
     

      <Link to ="/Loginform">
      {loggedUser ? (<button className="login-btn" onClick={() =>
        SetLoggedUser(false)}>login</button>) : (<button className="login-btn"
          onClick={() =>
            SetLoggedUser(true)
          }>logout</button>)}</Link>


    </div>
  );
};
export default Header;