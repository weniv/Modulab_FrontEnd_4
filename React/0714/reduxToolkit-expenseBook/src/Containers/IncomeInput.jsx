import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIncomeAction } from '../store/expense/expenseSlice';

export default function IncomeInput() {

    const dispatch = useDispatch();

    const income = useSelector((store) => {
        return store.EXPENSE.income;
    });

    const setIncome = (event) => {
        dispatch(setIncomeAction(Number(event.target.value)));
    }

    return (
        <label htmlFor="">
            <input type="number" value={income} onChange={setIncome} />
        </label>
    )
}
