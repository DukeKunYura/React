import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "",
    searchStart: 0,
    classHeaderSearh: "header-controls-search-form form-inline invisible"

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
        },
        setclassHeaderSearh: (state) => {
            if (state.classHeaderSearh === "header-controls-search-form form-inline invisible") {
                state.classHeaderSearh = "header-controls-search-form form-inline"
            } else { state.classHeaderSearh = "header-controls-search-form form-inline invisible" }
        }

    }
})


export const { setSearch, rerenderCatalog, setclassHeaderSearh } = masterSlice.actions

export default masterSlice.reducer