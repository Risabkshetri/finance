import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  try {
    const serializedState = localStorage.getItem('financialData');
    if (serializedState === null) {
      return { networth: 0, debit: 0, credit: 0 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { networth: 0, debit: 0, credit: 0 };
  }
};

const initialState = loadInitialState();

const financialSlice = createSlice({
    name: "financialData",
    initialState,
    reducers: {
        setNetworth: (state, action) => {
            state.networth = action.payload;
            localStorage.setItem('financialData', JSON.stringify(state));
        },
        setDebit: (state, action) => {
            state.debit = action.payload;
            localStorage.setItem('financialData', JSON.stringify(state));
        },
        setCredit: (state, action) => {
            state.credit = action.payload;
            localStorage.setItem('financialData', JSON.stringify(state));
        },
        updateAllFinancialData: (state, action) => {
            const { networth, debit, credit } = action.payload;
            state.networth = networth;
            state.debit = debit;
            state.credit = credit;
            localStorage.setItem('financialData', JSON.stringify(state));
        }
    }
});

export const { setNetworth, setDebit, setCredit, updateAllFinancialData } = financialSlice.actions;

export default financialSlice.reducer;