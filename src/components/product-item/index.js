import React from 'react';
import './index.css'
import {useDispatch} from "react-redux";
import {onItemInCardToggle} from "../../actions";

export const ProductItem = ({productData}) => {
    const title = productData.title;
    console.log(productData);

    const dispatch = useDispatch();

    const onAddToCard = () =>{
        dispatch(onItemInCardToggle(productData))
    }

    return (
        <div>
            {/*id = {id} <br/>*/}
            {/*title = {title} <br/>*/}
            {/*price = {price} <br/>*/}
            {/*<img src={image}/>*/}
            {/*<button onClick={onAddToCard}>add item to card</button>*/}
            {/*<hr/>*/}

        </div>
    )
}