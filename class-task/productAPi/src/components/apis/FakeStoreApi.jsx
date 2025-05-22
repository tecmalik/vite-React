import React from 'react'
import { useGetAllFakeProductQuery} from '../../services/fakestoreApi';
import FakeProductCard from "../../reuseable/FakeProductCard";


const AllFakeProduct=()=> {

    const data = useGetAllFakeProductQuery()

    return(
        <div> 
            <FakeProductCard data = {data} />
        </div>
    )
}
export default AllFakeProduct;