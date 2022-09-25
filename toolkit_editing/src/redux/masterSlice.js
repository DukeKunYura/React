import { createSlice } from '@reduxjs/toolkit';
import priceList from '../components/priceList.js'

const initialState = {
    position: "",
    price: "",
    list: priceList,
    editing: false,
    editingStringId: null,
    filter: ""
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        addString: (state, action) => {
            state.list = [...state.list, action.payload]
        },
        setPosition: (state, action) => {
            state.position = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        editString: (state, action) => {
            state.editing = true;
            state.editingStringId = action.payload.editingStringId;
            state.position = action.payload.position;
            state.price = action.payload.price
        },
        deleteString: (state, action) => {
            if (!state.editing) {
                state.list = state.list.filter(list => list.id !== action.payload)
            }
            else {
                state.position = ""; state.price = ""
            }
        },
        saveString: (state) => {
            state.list = [...state.list.filter(list => list.id !== state.editingStringId),
            { "id": state.editingStringId, "position": state.position, "price": state.price }
            ];
            state.editing = false;
            state.position = "";
            state.price = ""
        },
        cancelEditing: (state) => {
            state.editing = false;
            state.position = "";
            state.price = ""
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})


export const { setFilter, deleteString, editString, cancelEditing, saveString, setPrice, setPosition, addString } = masterSlice.actions

export default masterSlice.reducer