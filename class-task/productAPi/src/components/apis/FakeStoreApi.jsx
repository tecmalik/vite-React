import React from 'react'
import { useGetAllFakeProductQuery} from '../../services/dummyjsonApi';
import fakeProductCard from "../../reuseable/FakeProductCard";


const AllFakeProduct=()=> {

    const data = useGetAllFakeProductQuery()

    return(
        <div> 
            <fakeProductCard data = {data} />
        </div>
    )
}
export default AllFakeProduct;