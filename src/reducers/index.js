import {ON_ITEM_IN_CARD_TOGGLE, ON_PRODUCTS_LOADED, ON_CARD_VISIBILITY} from "../action-types";

const initialState = {
    counter: 0,
    products: [],
    card: [],
    isCardOpen: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CARD_VISIBILITY: {
            return {...state, isCardOpen: !state.isCardOpen};
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