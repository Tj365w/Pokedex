import images from "./assets/images/useful/BG@2x.png"
import bg from "./assets/images/useful/logo.png" 
import Anim from "./animation"
import Inp from "./inp"
import "./App.css"
import React,{useState} from "react"

const Main=()=>{
  
  return (
    <>
    <img src={images} className="bgimg">
  </img>
  <img src={bg} className="logo"></img>
  <Inp/>
  <Anim/>
    </>
  
)
}

export default Main;