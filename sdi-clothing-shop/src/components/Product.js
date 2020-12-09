import React from 'react'
import { useParams } from 'react-router-dom'

const Product = ({ productList }) => {
    const { productId } = useParams()

    const product = productList.find(product => product.id === Number(productId));
    console.log(product);

    return(
        <>
            <h3>{product.name}</h3>  
            <p>{product.description}</p>
            <div>
                Price: {product.default_price}
            </div>
            <p>{product.slogan}</p>
        </>
    )
}

export default Product