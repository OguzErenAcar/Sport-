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
          src="https://t4.ftcdn.net/jpg/00/82/02/77/360_F_82027785_Cl6iuS9TeMD1EUHgPh2ptUYidZpuhjkk.jpg"
        ></img>
        <div className="searchdiv">
          <input className="searchbar" />
          <button className="searchbutton">Search</button>
        </div>
      </div>
      {router.map((item,j)=>(
        item.isNavCategory&&
        (<Link key={j} to={item.path}>{item.id}</Link>)
      ))}      
    </div>
    </div>
  );
}

export default Navbar;
