import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const url = "http://localhost:8080/";
export const userAuthApiSlice = createApi({ // inbuilt api that takes in am object.

    reducerPath : "userAuth",
    baseQuery :fetchBaseQuery ({baseUrl:`${url}`}), // inital state from the end-point
    endpoints : (builder)=>({  //a function that takes in builder and returns an object
        signUp: builder.mutation({ // firt instruction
            query:(data)=>({
                url : "signup/users", // what you have in your backend
                method : "Post",
                header:{"content-Type" : "application/json"},
                body : data //the one h=that is cling through your input

            })
        })
    })
});



export const {useSignUpMutation} = userAuthApiSlice;






