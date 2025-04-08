import { Typography, Box } from "@mui/material";

const videoUrl: string = "https://www.youtube.com/watch?v=M2sQdmR381A";
const repositoryUrl: string = "https://github.com/hn275/distributed-storage";

export function Presentation() {
	return (
		<main className="home-page-content">
			<Box
				width="100%"
				mb="3em"
				pt="5em"
				display="flex"
				flexDirection="column"
				flex="center"
				gap="1em"
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

				<Box
					display="flex"
					flexDirection="column"
					width="max-content"
					mx="auto"
				>
					<Link text="GitHub Repository" href={repositoryUrl} />
					<Link text="YouTube Presentation" href={videoUrl} />
				</Box>
			</Box>
		</main>
	);
}

type LinkProp = {
	text: string;
	href: string;
};

function Link(props: LinkProp) {
	const { text, href } = props;

	return (
		<Box component="span">
			<Typography
				component="span"
				sx={{
					fontWeight: "bold",
					fontSize: 15,
				}}
			>
				{text}:&nbsp;
			</Typography>

			<Typography
				component="a"
				href={href}
				target="_blank"
				sx={{
					fontWeight: "normal",
					textDecoration: "underline",
					fontStyle: "italic",
					color: "blue",
					fontSize: 15,
				}}
			>
				{href}
			</Typography>
		</Box>
	);
}
