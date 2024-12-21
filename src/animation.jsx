import React,{useState} from "react";
import { useEffect } from "react";
import data from "./animation.json"
import "./App.css"

function Anim(){
    const [i,seti]=useState(0);

useEffect(()=>{
    setTimeout(()=>{
            if(i!=data.length-1){
                seti(i=>i+1)
            }else{
                seti(0);
            }
        },1000/30);
},[i])
    
    
return (
    <img src={data[i]}className="ani"/>
)

    }
export default Anim;