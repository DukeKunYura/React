import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "",
    classHeaderSearch: "header-controls-search-form form-inline invisible",
    url: "http://localhost:7070/api/items",
    checkedCategories: ""

};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        setSearch: (state, action) => {
            state.search = action.payload
        },
        setClassHeaderSearch: (state) => {
            if (state.classHeaderSearch === "header-controls-search-form form-inline invisible") {
                state.classHeaderSearch = "header-controls-search-form form-inline"
            } else { state.classHeaderSearch = "header-controls-search-form form-inline invisible" }
        },
        setCheckedCategories: (state, action) => {
            if (action.payload !== "") {
                if (state.search !== "") {
                    state.url = 'http://localhost:7070/api/items?categoryId=' + action.payload + '&q=' + state.search;
                    state.checkedCategories = action.payload;
                } else {
                    state.url = 'http://localhost:7070/api/items?categoryId=' + action.payload;
                    state.checkedCategories = action.payload;
                }
            } else {
                if (state.search !== "") {
                    state.url = 'http://localhost:7070/api/items?q=' + state.search;
                    state.checkedCategories = "";

                } else {
                    state.url = 'http://localhost:7070/api/items';
                    state.checkedCategories = "";
                }
            }

        }

    }
})


export const { setSearch, rerenderCatalog, setClassHeaderSearch, setCheckedCategories } = masterSlice.actions

export default masterSlice.reducer