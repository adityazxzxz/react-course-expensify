import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`edit/${id}`}><h5>{description}</h5></Link>
            
            <p>{numeral(amount).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}</p>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses:state.expenses
    }
}

export default connect(mapStateToProps)(ExpensesListItem);