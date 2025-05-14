import React from 'react'
import { UNSAFE_hydrationRouteProperties } from 'react-router'

const ImageBasedUrl = 'https://image.tmdb.org/t/p/w500';


const MovieCard = (props) => {
    const {data,isLoading} = props.data
    console.log(data)
    console.log(isLoading)
    if(isLoading){
        return(
            <div>loading...</div>
        )
    }
   
    return(
        <div>
        {
            data?.results.map((result)=>(
                <div key={result.id}>
                    <img src={`${ImageBasedUrl}${result.poster_path}`} alt ="" />
                    <p>{result.overview}</p>
                    <p>{result.title}</p>
                    <p>{result.vote_count}</p>
                    <p>{result.vote_average}</p>

                </div>
            ))
        }
        </div>
    )
}
export default MovieCard;

