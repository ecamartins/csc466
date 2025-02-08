import * as React from "react";
import './App.scss';

export const ProposalPage: React.FC = React.memo(() => {

    return (
        <div className="proposal-page-wrapper">
            <div className="proposal-title">
                Project Proposal
            </div>
            <div className="proposal-pdf">
            <iframe src="/project-proposal.pdf" width="1000px" height="1000px"></iframe>
            </div>

        </div>
    );
})
