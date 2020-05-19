import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpensesListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`edit/${id}`}><h5>{description}</h5></Link>
            
            <p>{amount} - {createdAt}</p>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses:state.expenses
    }
}

export default connect(mapStateToProps)(ExpensesListItem);