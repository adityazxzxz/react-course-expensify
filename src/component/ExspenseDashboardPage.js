import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

const ExspenseDashboardPage = () => {
    return (
        <div>
            <ExpensesListFilters />
            <ExpensesList />
        </div>
    )
}

export default ExspenseDashboardPage;