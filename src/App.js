import React from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { ExpenseStatus } from './Components/ExpenseStatus'
import { TransactionList } from './Components/TransactionList'
import { NewTransaction } from './Components/NewTransaction'

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <ExpenseStatus />
                <TransactionList />
                <NewTransaction />
            </div>
        </>
    )
}

export default App