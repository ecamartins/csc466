import './App.scss';

type BiWeeklyProps = {
	header: string
	pdfPath: string
}

export function BiWeekly(props: BiWeeklyProps) {
	const { header, pdfPath } = props;
    return (
        <div className="proposal-page-wrapper">
            <div className="proposal-title">
				{header}
            </div>
            <div className="proposal-pdf">
            <iframe src={pdfPath} width="1000px" height="1000px"></iframe>
            </div>

        </div>
    );
}
