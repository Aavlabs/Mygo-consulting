import React from "react";
import AL from "./Popup2.module.css";

const Alertpop2 = ({ toogle, setToogle }) => {
  const toogleHandler = () => {
    setToogle(!toogle);
  };
  return (
    <>
      <div className={AL.alertcontp}>
        <div className={AL.alerttitle}>
          <h4 style={{ paddingTop: "10px" }} className={AL.title1}>
            Messages
          </h4>
        </div>
        <div className={AL.alertbody}>
          <h4 style={{ paddingTop: "10px" }}>Cycle Account Added</h4>
          <button style={{ marginTop: "20px" }} className={AL.btn1}>
            Okay
          </button>
        </div>
      </div>
    </>
  );
};

export default Alertpop2;
