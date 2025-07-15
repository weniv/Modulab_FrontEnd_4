import React, { useState, useActionState } from 'react'
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../store/expense/expenseSlice';

export default function ExpenseInput() {

    const dispatch = useDispatch();

    function addExpense(prevState, formData) {
        const expenseName = formData.get('expenseName');
        const expensePrice = formData.get('expensePrice');

        dispatch(addExpenseAction({ name: expenseName, price: expensePrice }));
    }

    const [state, formAction, isPending] = useActionState(addExpense);

    return (
        <form action={formAction}>
            <input type="text" placeholder='물건: "coffee"' name='expenseName' />
            <input type="number" step='0.01' placeholder='가격: 1000' name='expensePrice' />
            <button type='submit' disabled={isPending}>{isPending ? '추가하는 중...' : '추가하기'}</button>
        </form>
    )
}
