import { createBrowserRouter } from "react-router";
import SignUp from "../components/auth/signUp/SignUp";


// NOTE: if i create my router i shoule ensure that my app is aware 
// and for me to provide it i need to export it from here 

const router = createBrowserRouter([
    // {   //to make it my first page by default 
    // path: "",
    // element :  <SignUp/>
    // },
    {
        path: "/signup",
        element :  <SignUp/>
        }
])

export default router;
