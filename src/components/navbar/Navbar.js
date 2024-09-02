import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/StoreContext";

export default function Navbar({setShowLogin}) {
    const [menu , setMenu]=useState(" ");
    const {getTotalCartAmount}=useContext(storeContext);
    console.log(getTotalCartAmount  > 0);
    
    function handelmenu(prev){
        setMenu(prev)
    }
  return (
    <div className="navbar">
      <Link to={"/"} ><img src={assets.logo} className="logo" alt="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>handelmenu("home")} className={menu==="home" ? "active" :""}>home</Link>
        <a href="#explore-menu" onClick={()=>handelmenu("menu")} className={menu==="menu" ? "active" :""}>menu</a >
        <a href="#app-download" onClick={()=>handelmenu("mobile-app")} className={menu==="mobile-app" ? "active" :""}>mobile-app</a >
        <a href="#footer" onClick={()=>handelmenu("contact-us")} className={menu==="contact-us" ? "active" :""}>contact us</a >
      </ul>
      <div className="navbar-right">
        <img style={{cursor:"pointer"}} src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <Link to={"/cart"} >
          <img src={assets.basket_icon} alt="basket" />
          </Link>
          <div className={getTotalCartAmount() > 0? "dot" : ""}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}
