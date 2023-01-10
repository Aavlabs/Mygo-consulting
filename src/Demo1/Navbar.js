import React from "react";
import "./navbar.css";
import { BsBellFill } from "react-icons/bs";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import pic1 from "../Demo1/logo1.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        <div className="imgs">
          <img src={pic1} alt="" />
        </div>
        <div className="navbar">
          <div className="main1">
            <h4>Mygo Consulting Demo Apps</h4>
          </div>
          <div className="navlast">Welcome,Admin</div>
          <div>
            <BsBellFill size={20} />
          </div>
          <div>
            <BsFillQuestionOctagonFill size={20} />
          </div>
          <div>
            <FaPowerOff size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
