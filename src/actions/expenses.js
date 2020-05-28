import { v4 as uuid } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type:'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 100,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        })

    }
}

export const removeExpense = ({id} = {}) => {
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = (id, updates) => {
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

const setExpenses = (expense) => {
    return {
        type:'SET_EXPENSE',
        expense
    }
}

export const setStartExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expense = [];
    
            snapshot.forEach((childSnapshot) => {
                expense.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expense));
        })
        
    }

    
    
}