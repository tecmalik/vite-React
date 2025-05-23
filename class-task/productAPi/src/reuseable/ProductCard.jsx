import React from 'react'
import Style from './productcard.module.css'
import { UNSAFE_hydrationRouteProperties } from 'react-router'
import {Link} from "react-router"
import ViewProduct from './ProductView'



const ImageBasedUrl = "https://dummyjson.com/products";


const HandleDescription = (result) =>{
    return (
        <ViewProduct/>
    )
}


const ProductCard = (props) => {
    const {data,isLoading} = props.data
    console.log(data)
    console.log(isLoading)
    if(isLoading){
        return(
            <div>loading...</div>
        )
    }
   console.log(data);
    return(
        <div className ={Style.products}>
        {
            data?.products.map((result)=>(
                <div key={result.id} className = {Style.productCard} >
                    <img src={`${result.images}`} alt ="" />
                    <p>{result.overview}</p>
                    <p>{result.title}</p>
                    <p>{result.price}</p>
                    {/* <p>{result.description}</p> */}
                    <button classNAme = {Style.button} onClick={HandleDescription(result)}> More info... </button>

                </div>
            ))
        }
        </div>
    );
};
export default ProductCard;
