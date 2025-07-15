import ExpenseInput from "./Containers/ExpenseInput"
import ExpenseList from "./Containers/ExpenseList"
import IncomeInput from "./Containers/IncomeInput"
import ExpenseTotal from "./Containers/ExpenseTotal"

function App() {

    return (
        <>
            <IncomeInput />
            <ExpenseInput />
            <ExpenseList />
            <ExpenseTotal />
        </>
    )
}

export default App
