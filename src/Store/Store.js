import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import noteSlice from './noteSlice';
import financialSlice from './financeSlice';
import progressSlice from './progressSlice';
import aiSlice from './aiSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        notes: noteSlice,
        finance: financialSlice,
         progress: progressSlice,
         aichats: aiSlice,
         search: searchSlice
    }
});


export default store;