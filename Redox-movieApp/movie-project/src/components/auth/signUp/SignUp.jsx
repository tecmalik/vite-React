import React from "react";
import CustomButton from "../../../reusable/CustomButton ";
import {useState} from 'react'
import {useSignUpMutation} from '../../../service/userAuthApi';
import {Link,useNavigate} from "react-router"; 

const SignUp = () => { 
    const navigate = useNavigate() 

    const userDetails = {
        email : "",
        password : "",
        nin: ""
    };
    const [ userData , setUserData ] = useState(userDetails);
    const [ signUp ,{isLoading,isError} ] = useSignUpMutation();

    const res = useSignUpMutation();
    console.log(userData)

    const handleInput =(e)=>{
        const {name ,value}= e.target;
        setUserData((prev)=>({...prev, [name]: value.trim()}))
    };
    const submitHandler = async(e)=>{
        e.preventDefault();

        try{
         const response = await signUp(userData).unwrap();
        console.log(response)
        if(response.success === true){
            navigate("/login")
        }
        }catch(error){

         console.log(error)

        }
        
    }

 
    return (
        
        <div> 
            <h1>SignUp</h1>
            <form onSubmit ={submitHandler}>
                <div>
                    <label 
                    htmlFor = "email">Email</label>
                    <br></br>
                    <input 
                    type = "text" 
                    name ="email" 
                    placeholder = "email"
                    onChange = {handleInput }
                    required ></input><br />
                </div>

                <label 
                htmlFor="nin">
                    NIN
                </label>
                <br></br>
                <input 
                type="text" 
                name ="nin" 
                onChange = {handleInput }
                placeholder = "enter your NIN" 
                required ></input><br></br>
                <label htmlor="password">Password</label>
                <br></br>
                <input 
                type="password" 
                name ="password" 
                onChange = {handleInput }
                placeholder = "password" 
                required ></input>

                <Link to ="/login"> Login</Link>

                <CustomButton text="SignUp"/>


            </form>
        </div>
    )
}

export default SignUp
