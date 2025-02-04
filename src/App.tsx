import { CssBaseline } from '@mui/material';
import { useState } from 'react'
import './App.scss'
import { HomePage } from './HomePage';
import { LogPage } from './LogPage';
import { NavBar } from './NavBar';
import { ProposalPage } from './ProposalPage';
import { AppPageType } from './utils/common';


function App() {
    const [page, setPage] = useState<AppPageType>(AppPageType.HOME);

    return (
        <div className="app-wrapper">
            <CssBaseline />
            <NavBar onNavBarClick={(newPage: AppPageType) => setPage(newPage)} />
            <div className="content">
                <HomePage show={page === AppPageType.HOME} />
                <LogPage show={false} />
                <ProposalPage show={page === AppPageType.PROPOSAL} />
            </div>
        </div>
    )
}

export default App
