import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    income : 0
}

const incomeSlice = createSlice({
    name: "income",
    initialState,
    reducers: {
        setIncome: (state, action) => {
            state.income = action.payload.income;
        }
     }
})

export const {setIncome} = incomeSlice.actions;

export default incomeSlice.reducer;