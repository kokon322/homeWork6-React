import React from 'react';
import './index.css'
import {useDispatch} from "react-redux";
import {onItemInCardToggle} from "../../actions";

export const ProductItem = ({productData, isAddedToCard}) => {
    const {id, title, price, image} = productData;


    const dispatch = useDispatch();

    const onAddToCard = () => {
        dispatch(onItemInCardToggle(productData))
    }

    return (
        <div>
            id = {id} <br/>
            title = {title} <br/>
            price = {price} <br/>
            <img src={image}/> <br/>
            <button onClick={onAddToCard}>
                {isAddedToCard ? 'remove from card' : 'add to card'}
            </button>
            <hr/>

        </div>
    )
}