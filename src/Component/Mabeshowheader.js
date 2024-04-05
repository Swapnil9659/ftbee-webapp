import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const Mabeshowheader = ({children}) => {
    const location= useLocation();
    const [showHeader, setShowHeader]= useState(false);

    useEffect(()=>{
        console.log('this is location',location)
        if(location.pathname==="/dashboard"){
            setShowHeader(false);
        }else if(location.pathname==="/recipemanager"){
            setShowHeader(false);
        }else if(location.pathname==="/blogmanager"){
            setShowHeader(false);
        }else if(location.pathname==="/tipsmanager"){
            setShowHeader(false);
        }else if(location.pathname==="/reviewmanager"){
            setShowHeader(false);
        }else{
            setShowHeader(true);
        }
    },[location])


  return (
    <div>
        {showHeader && children}
    </div>
  )
}

export default Mabeshowheader