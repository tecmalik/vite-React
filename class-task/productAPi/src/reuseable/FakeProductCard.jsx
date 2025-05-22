import React from 'react'
import { UNSAFE_hydrationRouteProperties } from 'react-router'

const ImageBasedUrl = 'https://fakestoreapi.com/products';


const fakeProductCard = (props) => {
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
            data?.map((result)=>(
                
                <div key={result.id}>
                    <img src={`${result.image}`} alt ="" />
                    <p>{result.title}</p>
                    <p>{result.price}</p>
                    <p>{result.description}</p>

                </div>
            ))
        }
        </div>
    )
}
export default fakeProductCard;
