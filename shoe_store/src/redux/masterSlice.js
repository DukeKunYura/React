import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "",
    searchStart: 0


};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        setSearch: (state, action) => {
            state.search = action.payload
        },
        rerenderCatalog: (state, action) => {
            state.searchStart = state.searchStart + action.payload
        }

    }
})


export const { setSearch, rerenderCatalog } = masterSlice.actions

export default masterSlice.reducer