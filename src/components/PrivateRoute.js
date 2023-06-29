import React from "react";
import { useSelector } from "react-redux";
import {  Route, Navigate } from "react-router-dom";


export default function PrivateRoute({children, ...rest}){
    
    const login = useSelector(state=>state)
  
    return(
        <Route {...rest} 
            render = {({location}) => 
                login ? (children) :
                <Navigate to = {{
                    path: "/home",
                    state: {from: location},
                }}></Navigate>
            }
        />
           
            
    )
}