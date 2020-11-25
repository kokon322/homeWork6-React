import {useDispatch, useSelector} from "react-redux";
import './index.css';
import {onCardVisibility} from "../../actions";

export const Card = () => {
    const card = useSelector(({card}) => card);
    const dispatch = useDispatch();
    const price = card.map(prod => prod.price);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumOfPrice = price.reduce(reducer)

    return (
        <div className="modal-backdrop">
            <div className="modal-body">
                <div className="div-card">
                    <button className="card" onClick={() => dispatch(onCardVisibility())}>close</button>
                </div>
                {card && card.length && (card.map(prod => <div key={prod.id}>
                    <div>id of product - {prod.id} <br/>
                        price - {prod.price}
                    </div>
                    <div><img src={prod.image} alt=""/></div>
                    <hr/>
                </div>))}
                <div className="price">all price: {sumOfPrice}</div>
            </div>
        </div>
    )
};