import {INC, ON_ITEM_IN_CARD_TOGGLE, ON_PRODUCTS_LOADED} from "../action-types";

const initialState = {
    counter: 0,
    products: [],
    card: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC : {
            return {...state, counter: state.counter + 1};
        }
        case ON_PRODUCTS_LOADED: {
            return {...state, products: action.payload};
        }
        case ON_ITEM_IN_CARD_TOGGLE: {
            const updatedCard = state.card.filter(el => el.id !== action.payload.id);

            if (updatedCard.length === state.card.length) {
                updatedCard.push(action.payload)
            }

            return {...state, card: updatedCard};
        }
        default:
            return state;
    }
};