import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dummyApiUrl = 'https://dummyjson.com'

export const dummyApi= createApi({
    reducerPath : 'dummyApi' ,
    baseQuery : fetchBaseQuery({baseUrl :`${dummyApiUrl}`}),
    endpoints : (builder) =>({
        getAllproduct:builder.query({
            query:()=>`/products`
        })
    })
});

export const {useGetAllproductQuery} = dummyApi;
