import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { AppPageType, makePath } from "./utils/common";
import RouterIcon from '@mui/icons-material/Router';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


interface NavBarProps {
}

type PageEntry = {
	header: string,
	path: AppPageType,
}

const PAGES: PageEntry[] = [
	{
		header: "HOME",
		path: AppPageType.HOME,
	},
	{
		header: "PROPOSAL",
		path: AppPageType.PROPOSAL,
	},
	{
		header: "BIWEEKLY UPDATE 1",
		path: AppPageType.BIWEEKLY1,
	},
	{
		header: "MIDTERM UPDATE",
		path: AppPageType.MIDTERM,
	},
	{
		header: "BIWEEKLY UPDATE 3",
		path: AppPageType.BIWEEKLY3,
	},
	{
		header: "PRESENTATION",
		path: AppPageType.PRESENTATION,
	},
	{
		header: "FINAL REPORT",
		path: AppPageType.REPORT,
	},
]

export const NavBar: React.FC<NavBarProps> = React.memo(() => {
	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (page: AppPageType) => {
		setAnchorElNav(null);
		navigate(makePath(page))
	};

	return (
		<>
			<AppBar position="fixed">
				<Container maxWidth={false} disableGutters sx={{ px: 2 }}>
					<Toolbar disableGutters sx={{ px: 2 }}>
						{/* Left Section */}
						<RouterIcon
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }}
							onClick={() => navigate("/")}
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
								{
									PAGES.map((entry) => {
										return (
											<MenuItem key={entry.path}
												onClick={() => handleCloseNavMenu(entry.path)}>
												<Typography textAlign="center">{entry.header}</Typography>
											</MenuItem>
										)
									})
								}
							</Menu>
						</Box>

						{/* Title for Small Screens */}
						<RouterIcon
							sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, cursor: 'pointer' }}
							onClick={() => navigate("/")}
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
							{
								PAGES.map((entry) => {
									return (
										<MenuItem
											key={entry.path}
											onClick={() => handleCloseNavMenu(entry.path)}
										>
											<Typography textAlign="center">
												{entry.header}
											</Typography>
										</MenuItem>
									)
								})
							}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
});
