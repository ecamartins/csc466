import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { AppPageType } from "./utils/common";
import RouterIcon from '@mui/icons-material/Router';
import MenuIcon from '@mui/icons-material/Menu';


interface NavBarProps {
    onNavBarClick: (page: AppPageType) => void;
}

const navBarStyles = { color: "primary.light", cursor: "pointer", "&:hover": { textDecoration: "underline" } };

export const NavBar: React.FC<NavBarProps> = React.memo(({ onNavBarClick }) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page: AppPageType) => {
        setAnchorElNav(null);
        onNavBarClick(page);
    };

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth={false} disableGutters sx={{ px: 2 }}>
                    <Toolbar disableGutters sx={{ px: 2 }}>
                        {/* Left Section */}
                        <RouterIcon
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }}
                            onClick={() => onNavBarClick(AppPageType.HOME)}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCloseNavMenu(AppPageType.HOME)}
                        >
                            CSC466-Project
                        </Typography>

                        {/* Dropdown Menu Icon for Small Screens */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={() => setAnchorElNav(null)}
                            >
                                <MenuItem key={AppPageType["HOME"]} onClick={() => handleCloseNavMenu(AppPageType.HOME)}>
                                    <Typography textAlign="center">{AppPageType[AppPageType["HOME"]]}</Typography>
                                </MenuItem>
                                <MenuItem key={AppPageType["PROPOSAL"]} onClick={() => handleCloseNavMenu(AppPageType.PROPOSAL)}>
                                    <Typography textAlign="center">{AppPageType[AppPageType["PROPOSAL"]]}</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* Title for Small Screens */}
                        <RouterIcon
                            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, cursor: 'pointer' }}
                            onClick={() => onNavBarClick(AppPageType.HOME)}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCloseNavMenu(AppPageType.HOME)}
                        >
                            CSC466-Project
                        </Typography>

                        {/* Spacer */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

                        {/* Right Section */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem
                                key={AppPageType["HOME"]}
                                onClick={() => handleCloseNavMenu(AppPageType.HOME)}
                            >
                                <Typography textAlign="center">{AppPageType[AppPageType["HOME"]]}</Typography>
                            </MenuItem>
                            <MenuItem
                                key={AppPageType["PROPOSAL"]}
                                onClick={() => handleCloseNavMenu(AppPageType.PROPOSAL)}
                            >
                                <Typography textAlign="center">{AppPageType[AppPageType["PROPOSAL"]]}</Typography>
                            </MenuItem>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
});