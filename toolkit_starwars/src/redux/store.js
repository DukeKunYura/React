import { configureStore } from '@reduxjs/toolkit';
import starsReducer from '../redux/starsSlice'

export const store = configureStore({
    reducer: {
        stars: starsReducer
    },
})