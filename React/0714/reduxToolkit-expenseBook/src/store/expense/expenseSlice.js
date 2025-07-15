import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [{ name: 'coffee', price: 500 }, { name: 'computer', price: 3000 }],
        income: 0
    },
    reducers: {
        addExpenseAction: (currentSlice, action) => {
            console.log('add Action!!');

            currentSlice.expenseList.push(action.payload);
        },
        setIncomeAction: (currentSlice, action) => {
            currentSlice.income = action.payload;
        }
    }
});

const { addExpenseAction, setIncomeAction } = expenseSlice.actions;


export { expenseSlice, addExpenseAction, setIncomeAction }