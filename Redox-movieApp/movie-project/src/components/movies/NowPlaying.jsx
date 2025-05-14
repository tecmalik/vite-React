import React from 'react'
import { useGetNowPlayingMoviesQuery } from '../../service/movieApi';
import MovieCard from "../../reusable/MovieCard";


const NowPlaying = () => {

    const data = useGetNowPlayingMoviesQuery()

    return(
        <div> 
            <MovieCard data = {data} />
        </div>
    )
}
export default NowPlaying;

