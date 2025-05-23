import React from "react";

const ViewProduct =(result)=> {
    return (
        <div key={result.id} className = "productView">
            <img src={`${result.images}`} alt ="" />
            <p>{result.overview}</p>
            <p>{result.title}</p>
            <p>{result.price}</p>
            <p>{result.description}</p>
        </div>
    )
}
export default ViewProduct;