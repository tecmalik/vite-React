import { configureStore } from "@reduxjs/toolkit";
import {dummyApi} from "../services/dummyjsonApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useGetAllproductQuery } from "../services/dummyjsonApi";
import { FakeStoreApi } from "../services/fakestoreApi";

export const store = configureStore({
    reducer:{
        [dummyApi.reducerPath] : dummyApi.reducer,
        [FakeStoreApi.reducerPath] : FakeStoreApi.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat (dummyApi.middleware, 
            FakeStoreApi.middleware)
    )
})

setupListeners(store.dispatch)