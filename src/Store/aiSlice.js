import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aichatscount: 0
}

const aiSlice = createSlice({
    name: "aichats",    
    initialState,
    reducers: {
        chatsCount: (state) => {
            state.aichatscount = state.aichatscount + 1;
        },
        
     }
})

export const { chatsCount } = aiSlice.actions;

export default aiSlice.reducer;
