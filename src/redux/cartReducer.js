import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

const initialState = { cartItems: [], total: 0 };

const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.total, 0);
}

const pizzaReducer = (state = initialState, action) => {
    let newState;

    switch(action.type) {
        case ADD_TO_CART:
            newState = state.cartItems.concat(action.data);

            return {
                ...state,
                cartItems: newState,
                total: calculateTotal(newState)
            };
        case REMOVE_FROM_CART:
            newState = state.cartItems.filter(({ id }) => id !== action.id);

            return {
                ...state,
                cartItems: newState,
                total: calculateTotal(newState)
            }
        default:
            return state;
    }
}

export default pizzaReducer;
