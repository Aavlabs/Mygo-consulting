import {React , useState}  from 'react';
import Alertpop from './Alertpop';
import FOR from "./form1.module.css";

const Form1 = () => {
    const [toggleT1,setToggleT1] = useState(false);
  const toggleHandlerT1 =(event)=>{
    event.preventDefault();
    setToggleT1(!toggleT1);
  }

  return (
    <>
    <div className={FOR.f1cont}>
        <form>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>WH :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Product :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>GTIN :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Variant :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Lot :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>From loc :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Quantity :</label>
                <input  className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}> To Loc. :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div>
                <button className={FOR.btn2} onClick={toggleHandlerT1}>Submit</button>
            </div>
            {toggleT1?<Alertpop/>:null}

            
        </form>
    </div>
    </>

  )
}

export default Form1;