import { React, useState } from "react";
import Alertpop2 from "./Alertpop2";

import FOR from "./form3.module.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Form3 = () => {
  const [toggleT1, setToggleT1] = useState(false);
  const toggleHandlerT1 = (event) => {
    event.preventDefault();
    setToggleT1(!toggleT1);
  };

  return (
    <>
      <Navbar />
      <div className={FOR.f1cont}>
        <div className={FOR.f1btn}>
          <NavLink to={"/home1"}>
            <button type="text">Back to home</button>
          </NavLink>
        </div>
        <form>
          <div className={FOR.inputf}>
            <label className={FOR.label1}>WH :</label>
            <input className={FOR.input1} type="text"></input>
          </div>
          <div className={FOR.inputf}>
            <label className={FOR.label1}>Location:</label>
            <input className={FOR.input1} type="text"></input>
          </div>
          <div className={FOR.inputf}>
            <label className={FOR.label1}>Product:</label>
            <input className={FOR.input1} type="text"></input>
          </div>
          <div className={FOR.inputf}>
            <label className={FOR.label1}>Lot :</label>
            <input className={FOR.input1} type="text"></input>
          </div>
          <div className={FOR.inputf1}>
            <label className={FOR.label2}>Quantity :</label>
            <input className={FOR.input2} type="text"></input>
            <input
              style={{ paddingLeft: "10px" }}
              className={FOR.input3}
              type="text"
            ></input>
          </div>

          <div>
            <button className={FOR.btn2} onClick={toggleHandlerT1}>
              Submit
            </button>
          </div>
          {toggleT1 ? (
            <Alertpop2 toggleT1={toggleT1} setToggleT1={setToggleT1} />
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Form3;
