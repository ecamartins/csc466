import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import { HomePage } from './HomePage';
import { NavBar } from './NavBar';
import { ProposalPage } from './ProposalPage';
import { BiWeekly } from './BiWeekly';

function App() {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<CssBaseline />
				<NavBar />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/proposal" element={<ProposalPage />} />
						<Route
							path="/bw1"
							element={
								<BiWeekly
									header="Biweekly Update 1"
									pdfPath="/biweekly-update-1.pdf" />
							} />
						<Route
							path="/midterm-update"
							element={
								<BiWeekly
									header="Midterm Update"
									pdfPath="/midterm-update.pdf" />
							} />
						<Route
							path="/bw3"
							element={
								<BiWeekly
									header="Biweekly Update 3"
									pdfPath="/biweekly-update-3.pdf" />
							} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
