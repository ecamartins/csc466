import { Typography } from "@mui/material";
import RouterIcon from '@mui/icons-material/Router';
import * as React from "react";

interface HomePageProps {
    show: boolean;
}

export const HomePage: React.FC<HomePageProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    return (<>
        <div className="home-page-content-wrapper">
            <div className="home-page-content">
                <div className="home-page-site-title">
                    <RouterIcon sx={{ mr: 1, fontSize: 50 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: 50
                        }}
                    >
                        CSC466-Project
                    </Typography>
                </div>
                <p className="home-page-site-description">Description Here.</p>
            </div>
        </div>

    </>);
})