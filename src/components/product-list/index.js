import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './index.css'
import {onProductsLoaded} from "../../actions";
import {ProductItem} from "../product-item";

export const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => products);
    const card = useSelector(({card}) => card);

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(onProductsLoaded(data));
    }


    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <div>
            {
                products && products.length && (
                    products.map(product =>
                        <ProductItem key={product.id} isAddedToCard={!!card.find(el => el.id === product.id)}
                                     productData={product}/>)
                )
            }

        </div>
    )
};