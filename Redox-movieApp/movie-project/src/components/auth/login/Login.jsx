import React from "react";
import CustomButton from "../../../reusable/CustomButton ";
import style from './login.module.css'
import {Link} from 'react-router';
import {useState} from 'react';

const Login =()=> {

    const loginDetails ={
        email:"",
        password:"",
    };
    const [loginData,setLoginData] = useState(loginDetails);

    const handelChange = (e) => {
        const {name , value} = e.terget
        setLoginData((prev) => ({...prev, [name]: value.trim()}))
    };

    return(
        
        
        <div> 
            <h1>Login</h1>
            <form action="" >
                <input 
                type="text" 
                name = "text"
                className = {style.emailBox}
                required></input><br></br>
                <label 
                for="password">Password</label>
                <br></br>
                <input type="text" className ={style.password} onClick={handelChange} value = "password" required></input>

                <Link to = "/signup"> Signup</Link>
                <CustomButton text = "Login"/>

            </form>
        </div>
        
    )
    
}
export default Login