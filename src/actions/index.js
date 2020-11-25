import {ON_PRODUCTS_LOADED, ON_ITEM_IN_CARD_TOGGLE, ON_CARD_VISIBILITY} from "../action-types";

export const onProductsLoaded = (payload) => ({type: ON_PRODUCTS_LOADED, payload});
export const onItemInCardToggle = (payload) => ({type: ON_ITEM_IN_CARD_TOGGLE, payload});
export const onCardVisibility = () => ({type: ON_CARD_VISIBILITY});