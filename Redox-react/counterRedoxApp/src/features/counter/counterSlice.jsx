import {createSlice} from "@reduxjs/toolkit";



export const counterSlice = createSlice ({
    name: "counter",  //this means ican have many slices with diffrent names 
    initialState: {value : 0},
    reducers:{  //set of intructions that manipulates your state
        increment:(state)=>{
           state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        reset:(state)=>{
            state.value = 0
        }  
    } 
})

export const {increment, decrement ,reset} = counterSlice.actions; 
export default counterSlice.reducer// reducer is a function in the toolkit. returing the reducer action. 



