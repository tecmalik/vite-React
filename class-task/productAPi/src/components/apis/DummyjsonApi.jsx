import React from 'react'
import { useGetAllproductQuery} from '../../services/dummyjsonApi';
import ProductCard from "../../reuseable/ProductCard";


const Allproduct=()=> {

    const data = useGetAllproductQuery()

    return(
        <div> 
            <ProductCard data = {data} />
        </div>
    )
}
export default Allproduct;