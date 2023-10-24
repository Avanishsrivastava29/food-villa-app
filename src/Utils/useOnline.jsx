import React from "react";
import { useState,useEffect } from "react";


const useOnline =()=>{
    const [onlineStatus, setOnline] =useState(true);
    useEffect(()=>{
    const handleonline=()=>{
        setOnline(true);}

        const handleoffline=()=>{
            setOnline(false);}




        window.addEventListener("online",handleonline
        )
        window.addEventListener("offline",handleoffline)
        
        

        return()=>{
            window.removeEventListener('online',handleonline);
            window.removeEventListener('offline',handleoffline)
        };}

                                                                               
   , [])
    return onlineStatus;


}
export default useOnline;