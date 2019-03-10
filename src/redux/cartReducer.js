import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';
import { calculateTotal } from '../pureFunctions';

const initialState = { cartItems: [], total: 0 };

export default function pizzaReducer(state = initialState, action) {
    let cartItems;

    switch(action.type) {
        case ADD_TO_CART:
            cartItems = state.cartItems.concat(action.data);

            return {
                ...state,
                cartItems,
                total: calculateTotal(cartItems)
            };
        case REMOVE_FROM_CART:
            cartItems = state.cartItems.filter(({ id }) => id !== action.id);

            return {
                ...state,
                cartItems,
                total: calculateTotal(cartItems)
            };
        default:
            return state;
    }
}
