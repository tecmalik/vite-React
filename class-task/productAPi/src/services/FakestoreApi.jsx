import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fakeStoreUrl = 'https://fakestoreapi.com/'

export const fakeStoreApi= createApi({
    reducerPath : 'fakeStoreApi',
    baseQuery : fetchBaseQuery({baseUrl :`${fakeStoreUrl}`}),
    endpoints : (builder) =>({
        getAllFakeProduct:builder.query({
            query:()=>`products`
        })
    })
})

export const {useGetAllFakeProductQuery} = fakeStoreApi;