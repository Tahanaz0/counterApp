// import { useState } from "react";
import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const handle =() =>{
        setCount(count +1)
    }
    const handlee = () =>{
        setCount(count -1)
    }
  return (

    <div className='main'>
      

        <h1 className='text-center fc-10' style={{fontSize:'500%'}}>{count}</h1>
      
      <div className='mid'> 
       <button className='btn' onClick={handle}>Increase</button>
      <button className='btn' onClick={handlee}>Decrease</button>
      </div>
    </div>
  )
}
