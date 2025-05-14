import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieApiKey = import.meta.env.VITE_MOVIE_API_KEY;
console.log(movieApiKey)

const movieApiUrl = "https://api.themoviedb.org/3/movie";

export const movieApi = createApi({
    reducerPath : 'movieApi',
    baseQuery : fetchBaseQuery({baseUrl:`${movieApiUrl}`}),
    endpoints : (builder)=>({
        getNowPlayingMovies:builder.query({
            query:()=>`/now_playing?api_key=${movieApiKey}`
        })
    })
})
export const {useGetNowPlayingMoviesQuery} = movieApi