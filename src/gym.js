
import { useState,useEffect } from "react";
import './gym.css'
import Logout from "./logout";
// import { useNavigate } from "react-router-dom";
import Head from "./head";
const Dashboard1=()=>{
   
    const [c1,Setc1]=useState(30);
    const [c2,Setc2]=useState(30);
    const [c3,Setc3]=useState(30);
    


    // const Navigate = useNavigate();
    const co1=()=>{
        if(c1>0){
        Setc1(c1-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    const co2=()=>{
        if(c2>0){
        Setc2(c2-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    const co3=()=>{
        if(c3>0){
        setc3(Setc3-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    return<>
    <div className="head">
    
<Head/>
    <Logout/>
    <div  ></div>
    <div  ></div></div>
    <div className="head">
       <div className="a1">
        <h3>Aerobics</h3>
        <img  src="aerobic.jpg" alt="img"  height={" 176px"}  width={"300px"} />
        <div className="card">
        <div>Timing:12:00-02:00PM</div>
        <div>Booked Slot:{30-c1}</div>
        <div>Remaining Slot:{c1}</div>
        <div  className="butt" >{c1===30 ? ( <button onClick={co1} >BookSlot</button>) :<div><h1>your slot is booked</h1></div>}</div>
   
        </div>
        </div> 
       <div className="a1">
        <h3>cardio</h3>
        <img  src="cardio.jpg" alt="img"/>
        <div className="card">
        <div>Timing:02:00-04:00PM</div>
        <div>Booked Slot:{30-c2}</div>
        <div>Remaining Slot:{c2}</div>
        <div  className="butt" >{c2===30 ? ( <button onClick={co2} >BookSlot</button>) :<div><h1>your slot is booked</h1></div>}</div>
        
        </div>
        </div> 
       <div className="a1">
        <h3>Weight Lifting</h3>
        <img  src="weightlift.jpg" alt="img"/>
        <div className="card">
        <div>Timing:04:00-06:00PM</div>
        <div>Booked Slot:{30-c3}</div>
        <div>Remaining Slot:{c3}</div>
        <div  className="butt" >{c3===30 ? ( <button onClick={co3} >BookSlot</button>) :<div><h1>your slot is booked</h1></div>}</div>
        
        </div>
        </div> 
   
    </div>
    </>
}
export default Dashboard1;