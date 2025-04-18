import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./HomePage";
import { NavBar } from "./NavBar";
import { ProposalPage } from "./ProposalPage";
import { BiWeekly } from "./BiWeekly";
import { Presentation } from "./Presentation";
import { AppPageType, makePath } from "./utils/common";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <CssBaseline />
        <NavBar />
        <div className="content">
          <Routes>
            <Route path={makePath(AppPageType.HOME)} element={<HomePage />} />

            <Route
              path={makePath(AppPageType.PROPOSAL)}
              element={<ProposalPage />}
            />

            <Route
              path={makePath(AppPageType.BIWEEKLY1)}
              element={
                <BiWeekly
                  header="Biweekly Update 1"
                  pdfPath="/biweekly-update-1.pdf"
                />
              }
            />
            <Route
              path={makePath(AppPageType.MIDTERM)}
              element={
                <BiWeekly
                  header="Midterm Update"
                  pdfPath="/midterm-update.pdf"
                />
              }
            />
            <Route
              path={makePath(AppPageType.BIWEEKLY3)}
              element={
                <BiWeekly
                  header="Biweekly Update 3"
                  pdfPath="/biweekly-update-3.pdf"
                />
              }
            />
            <Route
              path={makePath(AppPageType.PRESENTATION)}
              element={<Presentation />}
            />
            <Route
              path={makePath(AppPageType.REPORT)}
              element={
                <BiWeekly
                  header="Final Report"
                  pdfPath="/report.pdf"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
