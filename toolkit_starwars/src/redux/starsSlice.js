import { createSlice } from '@reduxjs/toolkit';
import facts from '../data/facts.js'

const initialState = {
    quantity: 0,
    facts

};

export const starsSlice = createSlice({
    name: 'stars',
    initialState,
    reducers: {

        changeQuantity: (state, action) => {
            if (action.payload < 6 && action.payload > 0) {
                state.quantity = action.payload
            }

        }
    },
})


export const { changeQuantity } = starsSlice.actions

export default starsSlice.reducer