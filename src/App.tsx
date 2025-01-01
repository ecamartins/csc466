import { CssBaseline } from '@mui/material';
import { useState } from 'react'
import './App.scss'
import { HomePage } from './HomePage';
import { LogPage } from './LogPage';
import { NavBar } from './NavBar';
import { AppPageType } from './utils/common';


function App() {
    const [page, setPage] = useState<AppPageType>(AppPageType.HOME);

    return (
        <div className="app-wrapper">
            <CssBaseline />
            <NavBar onNavBarClick={(newPage: AppPageType) => setPage(newPage)} />
            <HomePage show={page === AppPageType.HOME} />
            <LogPage show={page === AppPageType.LOGS} />
        </div>
    )
}

export default App
