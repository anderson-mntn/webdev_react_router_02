import React from "react";
import { useSelector } from "react-redux";
import { Movies } from "../pages/Movies";
import { SignUp } from "../pages/SignUp";


export default function PrivateRoute({children, ...rest}){
    
    const login = useSelector(state=>state)
  
    return(
        login ? <Movies/> : <SignUp/>
    )
}