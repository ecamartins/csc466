import * as React from "react";
import './App.scss';

interface ProposalPageProps {
    show: boolean;
}

export const ProposalPage: React.FC<ProposalPageProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    return (
        <div className="proposal-page-wrapper">
            <div className="proposal-title">
                Project Proposal
            </div>
            <div className="proposal-pdf">
            <iframe src="/tmp.pdf" width="1000px" height="1000px"></iframe>
            </div>

        </div>
    );
})