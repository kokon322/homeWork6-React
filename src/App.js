import './App.css';
import React from "react";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {Card} from "./components/card";
import {useSelector} from "react-redux";

function App() {
    const isCardOpen = useSelector(({isCardOpen}) => isCardOpen);

    return (
        <div className="App">
            <Header/>
            <ProductList/>
            {!!isCardOpen && <Card/>}
        </div>
    );
}

export default App;
