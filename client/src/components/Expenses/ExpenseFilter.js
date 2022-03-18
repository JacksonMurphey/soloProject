import { ExpContainer, ExpWrapper, ExpLabel, YearSelect } from "../Exp_Elements/FilterElements"

const ExpenseFilter = (props) => {

    const { filterYear, filterHandler, filterExpenses } = props

    const yearChangeHandler = (e) => {
        filterHandler(e.target.value)
        // filterExpenses(e.target.value)
    }


    return (
        <ExpContainer>
            <ExpWrapper>

                <ExpLabel>Filter By Year</ExpLabel>
                <YearSelect value={filterYear} onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </YearSelect>
            </ExpWrapper>
        </ExpContainer>
    )
}
export default ExpenseFilter