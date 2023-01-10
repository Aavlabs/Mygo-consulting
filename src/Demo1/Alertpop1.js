import React from "react";
import AL from "./alert1.module.css";

const Alertpop1 = ({ toogle, setToogle }) => {
  const toogleHandler = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <div className={AL.alertcont}>
        <div className={AL.alerttitle}>
          <h4 style={{ paddingTop: "10px" }} className={AL.title1}>
            Messages
          </h4>
        </div>
        <div className={AL.alertbody}>
          <h4 style={{ paddingTop: "10px" }}>Inventory moved in PRMS</h4>
          <div>
            {toogle ? (
              <button onClick={toogleHandler} className={AL.btn1}>
                Okay
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alertpop1;
