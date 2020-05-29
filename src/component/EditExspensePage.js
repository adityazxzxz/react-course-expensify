import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';


class EditExspensePage extends React.Component {
    render(){
        console.log('props',this.props);
        return (
            <div>
                <ExpenseForm 
                expense={this.props.expense}
                onSubmit={(expense) => {
                    console.log(expense);
                    this.props.editExpense(this.props.expense.id,expense)
                    this.props.history.push('/')
                }}
                />
                <button onClick={() => {
                    this.props.startRemoveExpense({id:this.props.expense.id});
                    this.props.history.push('/');
                }}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense:state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense:(id, expense) => dispatch(editExpense(id,expense)),
        startRemoveExpense:(data) => dispatch(startRemoveExpense(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExspensePage);