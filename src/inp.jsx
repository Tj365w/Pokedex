import { useState } from "react";
import React from "react"
import "./App.css"


function Inp(){
    const [src,sets]=useState("arceus");
    function change(e){
            sets(src =>e.target.value)
    }

    return(
<>
<div>
    <input className="inputbox" onChange={change}></input>
    <button style={{position:"absolute",
     right: '10%',
     top:   '-72px',
    height:"20px",
    }}>
        search</button>
</div>
    <img src={`https://img.pokemondb.net/artwork/large/${src}.jpg`} className="search" />
</>
    )
}
export default Inp