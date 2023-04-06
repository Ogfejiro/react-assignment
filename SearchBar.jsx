import React from 'react'
import './styles/search.css';
import text from "./images/micc.png";
import camera from "./images/camera.png";




export default function SearchBar() {
  return (
    
    <div className="header">
            <form action="#">
                <input type="text"/>
               <>
               
                <button class="team">
                    <img src={text} alt="icon"class="after"/>
                    <img src={camera} alt ="camera" class="camera" />
                   
                </button>
                </>
            </form>
            </div>
  )
}
