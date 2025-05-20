import React from "react";
import CustomButton from "../../../reusable/CustomButton ";
import style from './login.module.css'
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Login =()=> {

    const loginDetails ={
        email:"",
        password:"",
    };
    const [loginData,setLoginData] = useState(loginDetails);

    const handelChange = (e) => {
        const {name , value} = e.target
        setLoginData((prev) => ({...prev, [name]: value.trim()}))
    };

    return(
        
        
        <div> 
            <h1>Login</h1>
            <form action="" >
                <input 
                type="email" 
                name = "email"
                className = {style.emailBox}
                value = {loginData.email}
                onchange={handelChange}
                required></input><br></br>
                <label 
                for="password">Password</label>
                <br></br>
                <input type="password" 
                className ={style.password} 
                onClick={handelChange} 
                value = {loginData.password} 
                required></input>

                <Link to = "/signup"> Signup</Link>
                <CustomButton text = "Login"/>

            </form>
        </div>
        
    )
    
}
export default Login