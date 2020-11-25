import React, {Component} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {onCardVisibility} from "../../actions";

export const Header = () => {
    const card = useSelector(({card}) => card);
    const dispatch = useDispatch();
    return (
        <header>
            <button onClick={() => dispatch(onCardVisibility())}>Card: {card.length}</button>
        </header>
    )
}


