import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incCounter} from "./actions";
import React from "react";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {ProductItem} from "./components/product-item";


function App() {

    const product = useSelector((state) => state.products);
    const card = useSelector((state) => state.card);
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch()

    return (
        <div className="App">
            <Header/>
            <ProductList/>
            <ProductItem/>
            <div onClick={() => dispatch(incCounter())}>Hello{counter}</div>
        </div>
    );
}

export default App;
