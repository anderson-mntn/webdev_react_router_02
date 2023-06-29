import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, loginAction } from "./actions/loginActions";

export default function AuthButton(props){
    const login  = useSelector(state => state)
    const dispatch = useDispatch()

    return(login ?
        <button onClick={()=>{ dispatch(logoutAction())}}>
            logout
        </button> :
        <button onClick={()=>{ dispatch(loginAction())}}>login</button>
    )
}