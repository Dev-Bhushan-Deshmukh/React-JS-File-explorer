import React from 'react'
import { fileStructure } from '../../data'

import {useState} from 'react'
import { Filetab } from '../fileTab/Filetab'
export const Sidebar = () => {
    const[folderItem,setFolderItem]=useState(fileStructure);
    
  return (
    <div  style={{width:'20%',height:"100%",background:'white'}} >
{

    folderItem.map((file)=><Filetab file={file}/>)


}






    </div>
  )
}
