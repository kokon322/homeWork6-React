import React, {Component} from 'react';
import './index.css'
import {useSelector} from "react-redux";

export const Header = () => {
    const card = useSelector(({card}) => card);
    return (
        <header>
            <button>Card: {card.length}</button>
        </header>
    )
}


