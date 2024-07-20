import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import noteSlice from './noteSlice';
import financialSlice from './financeSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        notes: noteSlice,
        finance: financialSlice,
    }
});


export default store;