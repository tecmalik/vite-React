import {configureStore} from "@reduxjs/toolkit" ;
import { userAuthApiSlice } from "../service/userAuthApi";
import { movieApi } from "../service/movieApi";
import { setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer:{
        [userAuthApiSlice.reducerPath ] : userAuthApiSlice.reducer ,
        [movieApi.reducerPath] : movieApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat (userAuthApiSlice.middleware,
            movieApi.middleware)
    )
})      

setupListeners(store.dispatch)