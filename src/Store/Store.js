import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import noteSlice from './noteSlice';
import incomeSlice from './incomeSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        notes: noteSlice,
        income: incomeSlice
    }
});


export default store;