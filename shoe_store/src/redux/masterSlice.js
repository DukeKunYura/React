import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "uuu"

};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        setSearch: (state, action) => {
            state.search = action.payload
        }

    }
})


export const { setSearch } = masterSlice.actions

export default masterSlice.reducer