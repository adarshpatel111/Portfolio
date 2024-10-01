import React from "react";
import "./style.css";
import { Stack, Typography, Button, Tooltip } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import mypic from "../../assets/mypic.png";
import mypic from "../../assets/HeroSection.json";
import CV from "../../assets/Adarsh_Resume.pdf";
import { rootColors } from "../../Utilities/rootColors";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { keyframes } from "@mui/system";
import ReactAwesomeTypewriter from "react-awesome-typewriter";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";

const Profession = [
  [
    { text: "MERN Stack ", classNames: "text-primary" },
    { text: "Developer", classNames: "text-secondary" },
  ],
  [
    { text: "Full Stack ", classNames: "text-secondary" },
    { text: "Developer", classNames: "text-primary" },
  ],
];

// Define keyframes for continuous rotation
const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

function HeroSection() {
  return (
    <Stack
    id="hero"
      sx={{
        height: { xs: "auto", md: "90vh" },
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        backgroundColor: rootColors.backgroundPrimary,
        color: rootColors.textPrimary,
      }}
    >
      {/* Left Part */}
      <Stack
        sx={{
          flex: 1,
          display: { xs: "block", md: "flex" },
          alignItems: { xs: "center", md: "flex-start" },
          marginTop: { xs: 5, md: 0 },
          justifyContent: { xs: "center", md: "flex-start" },
          textAlign: { xs: "justify", md: "left" },
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hello I'm
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: rootColors.HighlightColor }}
        >
          Adarsh Patel
        </Typography>
        <Typography
          variant="body2"
          sx={{
            height: "40px",
            color: rootColors.textPrimary,
            fontWeight: "bold",
          }}
        >
          <ReactAwesomeTypewriter options={Profession} />
        </Typography>
        <Typography variant="body2" gutterBottom>
          As a software developer, I am passionate about creating innovative
          solutions that solve real-world problems. I thrive on the challenge of
          transforming ideas into functional applications, whether it's building
          intuitive user interfaces or developing robust back-end systems. My
          love for coding drives me to continuously learn new technologies and
          refine my skills, enabling me to craft amazing experiences that
          enhance productivity and inspire users. Each project is an opportunity
          to push the boundaries of what's possible and bring imaginative
          concepts to life.
        </Typography>
        <Tooltip title="Download Resume">
          <Button
            variant="outlined"
            sx={{
              marginTop: 2,
              border: `1px solid ${rootColors.text}`,
              borderRadius: "20px",
              color: rootColors.text,
            }}
            href={CV} // Adjust the path based on your file's location
            download // This attribute triggers the download
          >
            Download CV <FileDownloadOutlinedIcon />
          </Button>
        </Tooltip>
        <Stack
          sx={{
            marginTop: 2,
            flexDirection: "row",
            color: rootColors.HighlightColor,
            gap: 3,
          }}
        >
          <Stack
            sx={{
              position: "relative",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: "2px solid",
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderRadius: "50%",
                animation: `${rotateAnimation} 2s linear infinite`,
              }}
            />
            <NavLink to="https://github.com/adarshpatel111" target="_blank">
              <GitHubIcon
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  position: "relative",
                  zIndex: 1,
                  color: rootColors.HighlightColor,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              />
            </NavLink>
          </Stack>
          <Stack
            sx={{
              position: "relative",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: "2px solid",
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderRadius: "50%",
                animation: `${rotateAnimation} 2s linear infinite`,
              }}
            />
            <NavLink
              to="https://www.linkedin.com/in/adarsh-patel-650827249"
              target="_blank"
            >
              <LinkedInIcon
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  position: "relative",
                  zIndex: 1,
                  color: rootColors.HighlightColor,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",  
                }}
              />
            </NavLink>
          </Stack>
        </Stack>
      </Stack>

      {/* Right Part */}
      <Stack
        sx={{
          flexDirection: "row",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack>
          <Lottie
            animationData={mypic}
            loop={true}
            style={{ height: "500px", width: "500px" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HeroSection;
