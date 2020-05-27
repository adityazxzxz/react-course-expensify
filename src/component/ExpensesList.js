import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import filterExpenses from '../selectors/expenses';

const ExpensesList = (props) => {
    console.log('prop',props.expenses)
    return (
        <div>
            <h1>Expenses List</h1>
            {props.expenses.map((expense) => {
               return <ExpensesListItem key={expense.id} {...expense}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses:filterExpenses(state.expenses, state.filters)
    }
}

// export function lalu mengkoneksikan store state dengan component expenseslist 
export default connect(mapStateToProps)(ExpensesList);
