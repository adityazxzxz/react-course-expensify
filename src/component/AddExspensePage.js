import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


const AddExspensePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={(callback) => {
                props.dispatch(addExpense(callback))
                props.history.push('/') //redirect
            }}/>
        </div>
    )
}

export default connect()(AddExspensePage);