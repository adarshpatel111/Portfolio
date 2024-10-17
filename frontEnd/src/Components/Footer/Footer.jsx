import { Stack, Typography, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import {  FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { rootColors } from "../../Utilities/rootColors";
import { SiIndeed } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Stack
      sx={{
        backgroundColor: rootColors.backgroundSecondary,
        paddingTop: 5,
        gap: 5,
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          width: "90%",
          margin: "auto",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", height: "100px" }}
        />

        {/* Social Media Links */}
        <Stack alignItems="left" sx={{ gap: 2 }}>
          <Typography
            variant="h6"
            color={rootColors.HighlightColor}
            sx={{ textDecoration: "underline" }}
          >
            Track Me
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack
              sx={{
                color: rootColors.textPrimary,
                transition: "all 0.3s ease-in-out", // Add transition here for smoothness
                "&:hover": {
                  color: rootColors.HighlightColor,
                  backgroundColor: rootColors.textPrimary,
                  borderRadius: "50%",
                },
              }}
            >
              <IconButton
                href="https://github.com/adarshpatel111"
                target="_blank"
                color="inherit"
              >
                <FaGithub />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                color: rootColors.textPrimary,
                transition: "all 0.3s ease-in-out", // Add transition here for smoothness
                "&:hover": {
                  color: rootColors.HighlightColor,
                  backgroundColor: rootColors.textPrimary,
                  borderRadius: "50%",
                },
              }}
            >
              <IconButton
                href="https://indeed.com"
                target="_blank"
                color="inherit"
              >
                <SiIndeed />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                color: rootColors.textPrimary,
                transition: "all 0.3s ease-in-out", // Add transition here for smoothness
                "&:hover": {
                  color: rootColors.HighlightColor,
                  backgroundColor: rootColors.textPrimary,
                  borderRadius: "50%",
                },
              }}
            >
              <IconButton
                href="https://www.linkedin.com/in/adarsh-patel-650827249"
                target="_blank"
                color="inherit"
              >
                <FaLinkedin />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                color: rootColors.textPrimary,
                transition: "all 0.3s ease-in-out", // Add transition here for smoothness
                "&:hover": {
                  color: rootColors.HighlightColor,
                  backgroundColor: rootColors.textPrimary,
                  borderRadius: "50%",
                },
              }}
            >
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <FaInstagram />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        {/* Links Section */}
        <Stack alignItems="left">
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              color: rootColors.HighlightColor,
            }}
          >
            Quick Links
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "column" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            {["hero", "skills", "projects", "contact"].map((path, index) => (
              <Link
                to={path}
                key={index}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: rootColors.textSecondary,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      color: rootColors.HighlightColor,
                      textDecoration: "underline",
                      transform: "scaleX(1.1)",
                      cursor: "pointer",
                    },
                  }}
                >
                  {path === "hero"
                    ? "Home"
                    : path.charAt(0).toUpperCase() + path.slice(1)}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>

        {/* Contact Info Section */}
        <Stack alignItems="start">
          <Typography
            variant="h6"
            color={rootColors.HighlightColor}
            sx={{ textDecoration: "underline" }}
          >
            Contact Us
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography variant="body2" color={rootColors.textSecondary}>
              Email:
              <a
                href="mailto:adarshpatel11012001@gmail.com"
                style={{
                  textDecoration: "none",
                  color: rootColors.textSecondary,
                }}
              >
                adarshpatel11012001@gmail.com
              </a>
            </Typography>
            <Typography variant="body2" color={rootColors.textSecondary}>
              Phone:
              <a
                href="tel:+91 8320018439"
                style={{
                  textDecoration: "none",
                  color: rootColors.textSecondary,
                }}
              >
                +91 8320018439
              </a>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginTop: 10, width: "90%", margin: "auto" }}
      >
        <Typography variant="body1" color={rootColors.textSecondary}>
          © {year} Adarsh Patel. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
