import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    avatar: null

};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        addAvatar: (state, action) => {

            if (state.avatar) { state.list = [state.avatar, ...state.list] };
            state.avatar = action.payload;

        },

    },
})


export const { addAvatar } = masterSlice.actions

export default masterSlice.reducer