import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []

};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        addAvatar: (state, action) => {
            state.list = [...state.list, action.payload]
        },

    },
})


export const { addAvatar } = masterSlice.actions

export default masterSlice.reducer