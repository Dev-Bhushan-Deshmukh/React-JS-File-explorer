import React from 'react'
import { fileStructure } from '../../data'
import {useState} from 'react';
export const Filetab = ({file}) => {
    const[show,setShow]=useState(false);
  return (
  
    <div>
      -{file.name}- {file.child &&   <button onClick={()=>setShow(!show)}>show</button>}
  <div style={{width:'100%',background:'red',paddingLeft:'20%'}}>

  {file.child && show &&  file.child.map((item)=><Filetab file={item} />)}
  </div>
    
    </div>
  )
}
