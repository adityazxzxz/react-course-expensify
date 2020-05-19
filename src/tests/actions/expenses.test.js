import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Add expense',() => {
    const expense = {
        description : 'Test add expense',
        note : 'Note test',
        amount : 123,
        createdAt : 10000
    }

    const result = addExpense(expense);

    expect(result).toEqual({
        expenses:{
            ...expense,
            id:expect.any(String)
        },
        type:'ADD_EXPENSE'
    })
})

test('Edit expense positif test',() => {
    const result = editExpense('1234',{note:'Edited'});
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:expect.any(String),
        updates:{
            note:'Edited'
        }
    })
})


test('add expense default value',() => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expenses:{
            id:expect.any(String),
            description:'',
            amount:100,
            createdAt:0,
            note:''
        }
    })
})

test('remove expenses',() => {
    const action = removeExpense({id:'123'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    })
})