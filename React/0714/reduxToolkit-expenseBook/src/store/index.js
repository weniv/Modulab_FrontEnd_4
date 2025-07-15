import { configureStore } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expenseSlice';

const store = configureStore({
    reducer: {
        EXPENSE: expenseSlice.reducer
    }
});

export { store }