import * as React from "react";
import './App.scss';

export const ProposalPage: React.FC = React.memo(() => {

    return (
        <div className="proposal-page-wrapper">
            <div className="proposal-title">
                Project Proposal
            </div>
            <div>
                After several weeks of research, we have slightly changed the scope of our project. We updated our proposal to reflect our changes. Both versions of the proposal are found on this page.
            </div>
            <div className="proposal-pdf">
            <h2>
               Updated Proposal:
            </h2>
            <iframe src="/project-proposal-updated.pdf" width="1000px" height="1000px"></iframe> <br/>
            <h2>
               Original Proposal:
            </h2>
            <iframe src="/project-proposal.pdf" width="1000px" height="1000px"></iframe>
            </div>

        </div>
    );
})
