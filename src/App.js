import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';


const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>} />
            </Routes>
        </Router>
        </>
    )
}

export default App