import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

const initialState = { cartItems: [], total: 0 };

const pizzaReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.concat(action.data),
                total: state.total + action.data.total
            };
        default:
            return state;
    }
}

export default pizzaReducer;
