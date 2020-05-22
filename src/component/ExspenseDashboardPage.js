import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExspenseDashboardPage = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpensesListFilters />
            <ExpensesList />
        </div>
    )
}

export default ExspenseDashboardPage;