import React from "react";
import { router } from "../Routes";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarcontainer  ">
    <div className=" navbar  ">
      <div className="navbartop">
        <img
          className="logo"
          alt=""
          src="./rvzx2av.jpeg"
        ></img>
        <div className="searchdiv">
           <input className="searchbar" />
           <button className="searchbutton btn btn-outline-warning">Search</button>
        </div>
      </div>
      <div className="categories">
      {router.map((item,j)=>(
        item.isNavCategory&&
        (<Link className="category" key={j} to={item.path}>{item.id}</Link>)
      ))}      
      </div>
    </div>
    </div>
  );
}

export default Navbar;
