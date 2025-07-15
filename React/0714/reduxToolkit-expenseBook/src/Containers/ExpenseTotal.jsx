import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseTotal() {


    // 지출 목록 데이터
    const expenseList = useSelector((store) => {
        return store.EXPENSE.expenseList;
    });

    // 내 수익 데이터
    const income = useSelector((store) => {
        return store.EXPENSE.income;
    });

    const total = expenseList.reduce((total, expense) => {
        return total + expense.price
    }, 0);


    return (
        <>
            <div>총 지출: {total}</div>
            <div>통장 잔고: {income - total}</div>
        </>
    )
}
