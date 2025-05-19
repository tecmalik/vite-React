import React from 'react'
import { UNSAFE_hydrationRouteProperties } from 'react-router'

const ImageBasedUrl = "https://dummyjson.com/products";


const ProductCard = (props) => {
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
            data?.products.map((result)=>(
                <div key={result.id}>
                    <img src={`${result.images}`} alt ="" />
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
export default ProductCard;
