import { Typography } from "@mui/material";
import { homePageDescription } from "./utils/constants";

const videoUrl: string = "https://csc466bucket.haln.dev/presentation-final.mp4";

export function Presentation() {
  return (
    <>
      <div className="home-page-content-wrapper">
        <div className="home-page-content">
          <div className="home-page-site-title">
            <Typography
              variant="h6"
              component="a"
              align="center"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: 30,
              }}
            ></Typography>
          </div>
          <p className="home-page-site-description">{homePageDescription}</p>

          <video controls width="100%" height="auto">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
