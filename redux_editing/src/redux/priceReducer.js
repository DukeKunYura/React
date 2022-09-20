import { ADD_STRING, SET_POSITION, SET_PRICE } from './actions';

const initialState = {
    position: "",
    price: "",
    list: []
};

const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STRING:
            return {
                ...state, list: [...state.list, action.payload]
            }
        case SET_POSITION:
            return {
                ...state, position: action.payload
            }
        case SET_PRICE:
            return {
                ...state, price: action.payload
            }
        default: return state
    }
}

export default priceReducer

