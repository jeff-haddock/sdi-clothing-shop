import React from 'react'
import Product from './Product'
import {
    Link,
    useRouteMatch
} from 'react-router-dom'

const ProductList = ({ productList }) => {
    const match = useRouteMatch();
    console.log("match: ", match);
    return(            
        <>
            <h3>Our product list</h3>
            <ul>
            {
                productList.map(product => {
                    return (
                        <li><Link to={`${match.url}/${product.id}`}>{product.name}</Link></li>                      
                    )
                })
            }
            </ul>                
        </>
    )
    
}

export default ProductList;


