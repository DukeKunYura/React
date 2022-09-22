import {
    ADD_STRING,
    SET_POSITION,
    SET_PRICE,
    EDIT_STRING,
    DELETE_STRING,
    SAVE_STRING,
    CANCEL_EDITING,
    SET_FILTER
} from './actions';

import priceList from '../components/priceList.js'

const initialState = {
    position: "",
    price: "",
    list: priceList,
    editing: false,
    editingStringId: null,
    filter: ""
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
        case EDIT_STRING:
            return {
                ...state,
                editing: true,
                editingStringId: action.payload.editingStringId,
                position: action.payload.position,
                price: action.payload.price
            }
        case DELETE_STRING:
            if (!state.editing)
                return {
                    ...state, list: state.list.filter(list => list.id !== action.payload)
                }
            else return {
                ...state, position: "", price: ""
            }
        case SAVE_STRING:
            return {
                ...state,
                list: [
                    ...state.list.filter(list => list.id !== state.editingStringId),
                    { "id": state.editingStringId, "position": state.position, "price": state.price }
                ],
                editing: false,
                position: "",
                price: ""
            }
        case CANCEL_EDITING:
            return {
                ...state, editing: false, position: "", price: ""
            }
        case SET_FILTER:
            return {
                ...state, filter: action.payload
            }
        default: return state
    }
}

export default priceReducer

