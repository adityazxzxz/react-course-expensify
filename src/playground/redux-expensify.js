import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

/*
Tahap membuat reducer

1. Buat default state / state kosong
2. Buat reducernya
3. Buat storenya dtambah combinereducer
4. untuk melakukan perubahan state silahkan dispatch

*/

// 1. membuat default state

const expensesReducerDefaultState = [];

// 2. membuat reducer

const addExpense = ({
    description = '',
    note = '',
    amount = 100,
    createdAt = 0
}) => {
    return {
        type:'ADD_EXPENSE',
        expenses:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const removeExpense = ({id} = {}) => {
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}

const editExpense = (id, updates) => {
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}


const exspensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expenses];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })    
        default:
            return state;
    }
}





// buat reducer lainnya dibawah

//buat default state
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

//buat reducernya

const setTextFilter = (text = '') => {
    return {
        type:'SET_TEXT_FILTER',
        text
    }
}

const sortByAmount = () => {
    return {
        type:'SORT_BY_AMOUNT'
    }
}

const sortByDate = () => {
    return {
        type:'SORT_BY_DATE'
    }
}

const setStartDate = (startDate) => {
    return {
        type:'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type:'SET_END_DATE',
        endDate
    }
}


const filtersReducer = (state=filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }    
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }       
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }          
        default:
            return state
    }
}


// 3. membuat store dengan combinereducer

const store = createStore(
    combineReducers({
        expenses:exspensesReducer,
        filters:filtersReducer
    })
)



// 5. menampilkan data yang berubah

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpense);
});

// data yang berubah diolah berdasarkan state filter
const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createStore <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort(( a, b ) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}




// 4. lakukan perubahan denan dispatch

const expensesOne = store.dispatch(addExpense({description:'Rent',amount:200,createdAt:-1000}));
const expensesTwo = store.dispatch(addExpense({description:'Jajan',amount:300,createdAt:-21000}));

// store.dispatch(removeExpense({id:expensesOne.expenses.id}));
// store.dispatch(editExpense(expensesTwo.expenses.id,{amount:5000}))

// store.dispatch(setTextFilter('jajan'));

// store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate(100));
// store.dispatch(setEndDate(222));


const demoState = {
    exspenses:[{
        id:'asdasd',
        description:'January rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

