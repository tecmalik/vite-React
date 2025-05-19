import { configureStore } from "@reduxjs/toolkit";
import {dummyApi} from "../services/dummyjsonApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useGetAllproductQuery } from "../services/dummyjsonApi";
import { fakeStoreApi } from "../services/fakestoreApi";

export const store = configureStore({
    reducer:{
        [dummyApi.reducerPath] : dummyApi.reducer,
        [fakeStoreApi.reducerPath] : fakeStoreApi.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat (dummyApi.middleware, 
            fakeStoreApi.middleware)
    )
})

setupListeners(store.dispatch)