import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { logs } from "./utils/common";

interface LogPageProps {
    show: boolean;
}

export const LogPage: React.FC<LogPageProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    const [logEntry, setLogEntry] = React.useState<string>(Object.keys(logs)[0]);


    const handleChange = (event: SelectChangeEvent) => {
        setLogEntry(event.target.value as string);
    };

    const logDates = React.useMemo(() => {
        return Object.keys(logs).map((date, idx) => { return <MenuItem key={idx} value={date}>{date}</MenuItem>; });
    }, []);


    const renderedLog = React.useMemo(() => {
        return logs[logEntry]?.content || "NULL";
    }, [logEntry]);


    const renderedTitle = React.useMemo(() => {
        return logs[logEntry]?.title || "NULL";
    }, [logEntry]);


    return (
        <div className="log-page-wrapper">
            <div className="log-entry-title">
                {renderedTitle}
            </div>
            <FormControl sx={{ width: '50%' }}>
                <InputLabel id="demo-simple-select-label">Log Date</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={logEntry}
                    label="LogEntry"
                    onChange={handleChange}
                >
                    {logDates}
                </Select>
            </FormControl>
            <div className="log-entry-content">
                {renderedLog}
            </div>

        </div>
    );
})