import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import './firebase/firebase';
//import './playground/promise';


const store = configureStore();
store.dispatch(addExpense({description:'Water bill',amount:2000,createdAt:3000}));
store.dispatch(addExpense({description:'Gas bill',amount:5000,createdAt:4000}));
store.dispatch(addExpense({description:'Rent',amount:5000,createdAt:2000}));

// store.dispatch(setTextFilter('Gas'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// },3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));