import {INC, ON_PRODUCTS_LOADED, ON_ITEM_IN_CARD_TOGGLE} from "../action-types";

export const incCounter = () => ({type: INC});
export const onProductsLoaded = (payload) => ({type: ON_PRODUCTS_LOADED, payload});
export const onItemInCardToggle = (payload) => ({type: ON_ITEM_IN_CARD_TOGGLE, payload});