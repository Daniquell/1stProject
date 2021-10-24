import React,{useState} from "react";
import './MyButton.css'


const MyButton=(props)=>{
    const[count, setCount]=useState(0)
    
    return (
    <>
    <button className="MyButton" onClick={()=>setCount(console.log('Okay'))}> 
        Okay
    </button>

    <button className="MyButton1" onClick={()=>setCount(console.log('Cancel'))}>
    Cancel
    </button>

    <input className="Inputy" placeholder="Enter something good"></input>
    </>
    )
    }


export default MyButton;