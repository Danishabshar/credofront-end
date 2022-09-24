import React from "react";
import { useState,useEffect } from "react";
import { json } from "react-router-dom";
import './Head.css'



const Head=()=>{
const[item,setitem]=useState([])

useEffect(()=>{
    const items=(localStorage.getItem("usertype"))
    console.log(items)
    setitem([(items)])
    console.log(item)
},[])

return(
    <> 
        <div  className="flex" >
        {
            item.map((e,i)=>{
                return(
                   <div  key={i} >
                    <h2> {e}</h2>
                   </div>
                )
            })
        }

        </div>
    </>

)



}

export default Head;