import React from "react";
import "../Demo1/loginpage.css";
// import{FaSearch} from 'react-icons/fa';
import { FaDatabase } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import pic1 from "../Demo1/logo.png";

import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Loginpage = () => {
  return (
    <>
      <Navbar />
      <div className="top">
        <div className="maincard">
          <div className="innercard">
            <div className="logo">
              <GrTransaction size={30} />
            </div>

            <NavLink style={{ textDecoration: "none" }} to={"/home1"}>
              <div className="second"> Transactional App </div>
            </NavLink>
          </div>
          <div className="innercard">
            <div className="logo">
              <GrAnalytics size={30} />{" "}
            </div>
            <div className="second">
              {" "}
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://genuine-cocada-730bb3.netlify.app/"
              >
                Analytical App
              </a>
            </div>
            {/* <div className='third'> 131 Insights  &emsp;  &emsp;    &emsp;  &emsp;    #po </div> */}
          </div>
          <div className="innercard">
            <div className="logo">
              <FaDatabase size={30} />{" "}
            </div>
            <div className="second"> Data Cockpit</div>
            {/* <div className='third'> 51 Insights  &emsp;  &emsp;    &emsp;  &emsp;  &emsp;     #po </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
