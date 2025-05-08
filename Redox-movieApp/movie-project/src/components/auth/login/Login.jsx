import React from "react";
import CustomButton from "../../../reusable/CustomButton ";
import style from './login.module.css'

const Login =()=> {

    const loginDetails ={
        email:"",
        password:"",
    };
    const [loginData,setLoginData] = useState(loginDetails);

    const handelChange = (e) => {
        const {name , value} = e.terget
        setLoginData((prev) => ({...prev, [name]: value.trim()}))


    return(
        <>
        
        <div> 
            <h1>Login</h1>
            <form action="" >
                <input 
                type="text" 
                className ="emailBox" 
                value = "enter your email" 
                required></input><br></br>
                <label 
                for="password">Password</label>
                <br></br>
                <input type="text" className ="password" onClick={handelChange} value = "password" required></input>
                <CustomButton text="SugnUp"/>

            </form>
        </div>
        </>
        
        )
    }
}
export default Login