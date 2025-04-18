import { Box, Link, Typography } from "@mui/material";
import * as React from "react";
import { homePageDescription } from "./utils/constants";

export const HomePage: React.FC = React.memo(() => {

    return (<>
        <div className="home-page-content-wrapper">
            <div className="home-page-content">
                <div className="home-page-site-title">
                    <Typography
                        variant="h6"
                        component="a"
                        align="center"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: 30
                        }}
                    >
                        Distributed Storage: Load-balancing Techniques over the Network
                    </Typography>
                </div>
                <p className="home-page-site-description">{homePageDescription}</p>
                <a className="home-page-link" target="_blank" href="https://github.com/hn275/distributed-storage">Github Repository</a>
            </div>
        </div>

    </>);
})