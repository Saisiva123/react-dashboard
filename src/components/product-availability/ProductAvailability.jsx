import React,{useEffect} from 'react';
import "./ProductAvailability.css";

function ProductAvailability() {

    useEffect(() => {
        console.log("product availability loaded")
       
    }, [])

    return (
        <div className = "prodAvail">
            <p>Product Availability</p>
        </div>
    )
}

export default ProductAvailability
