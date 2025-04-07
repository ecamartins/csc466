import { Typography, Box } from "@mui/material";

const videoUrl: string = "https://csc466bucket.haln.dev/presentation-final.mp4";

export function Presentation() {
	return (
		<main className="home-page-content">
			<Box
				width="100%"
				mb="3em"
				mt="10em"
				display="flex"
				flexDirection="column"
				flex="center"
				gap="1.5rem"
			>
				<Typography
					variant="h6"
					align="center"
					mx="auto"
					sx={{
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
						fontSize: 30,
					}}
				>
					Project Presentation
				</Typography>

				<Typography
					align="center"
					component="a"
					mx="auto"
					href="https://github.com/hn275/distributed-storage"
					target="_blank"
					sx={{
						fontWeight: "normal",
						textDecoration: "underline",
						fontStyle: "italic",
						color: "blue",
						fontSize: 15,
					}}
				>
					Github Repository: distributed-storage
				</Typography>

				<Box mx="auto" width="80%">
					<video controls width="100%" height="auto">
						<source src={videoUrl} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Box>
			</Box>
		</main>
	);
}
