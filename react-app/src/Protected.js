import React,{useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import Header from './Header'
function Login(props) {
    let Cmp = props.Cmp
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            history.push('./register')
        }
    },[])
    const history = useHistory();

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Login