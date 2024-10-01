import React, { act, useEffect, useState } from "react";
import { Stack, Typography, IconButton, Drawer } from "@mui/material";
import { Link } from "react-scroll";
import { Menu as MenuIcon } from "@mui/icons-material";
import { rootColors } from "../../Utilities/rootColors";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const navLinks = [
    { path: "hero", label: "Home" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "contact", label: "Contact Me" },
  ];

  const handleLinkClick = (active) => {
    setActive(active);
  };
  const handleMobileLinkClick = (active) => {
    setMobileOpen((prev) => !prev);
    setActive(active);
  };
  useEffect(() => {
    setActive(location.hash);
  }, [location]);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "50px",
        position: "sticky",
        top: 0,
        backgroundColor: rootColors.backgroundSecondary,
        color: rootColors.textPrimary,
        zIndex: 1000,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack
        sx={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Stack>
          <img src={logo} alt="Logo" style={{ height: "50px" }} />
        </Stack>

        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }} // Show only on mobile
        >
          <MenuIcon />
        </IconButton>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {navLinks.map(({ path, label }, index) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
              key={index}
              style={{ cursor: "pointer" }}
              className="nav-link" // Optional: to style all links
            >
              <Typography
                variant="body1"
                sx={{
                  position: "relative",
                  "&:hover": {
                    color: rootColors.hoverColor || rootColors.HighlightColor,
                  },
                  borderBottom:
                    active === `#${path}`
                      ? `2px solid ${rootColors.HighlightColor}`
                      : "#BAC7CC",
                  "&:hover::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "2px",
                    backgroundColor:
                      rootColors.hoverColor || rootColors.HighlightColor,
                    transition: "width 0.2s ease-in-out",
                  },
                }}
                onClick={() => handleLinkClick(`#${path}`)}
              >
                {label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Stack>
      {/* mobile drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Stack
          sx={{
            width: 250,
            padding: 2,
            backgroundColor: rootColors.backgroundSecondary,
            height: "100%",
          }}
        >
          {navLinks.map(({ path, label }, index) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
              key={index}
              style={{
                textDecoration: "none",
                color: rootColors.textPrimary,
              }}
            >
              <Typography
                variant="body1"
                onClick={(e) => handleMobileLinkClick(`#${path}`)}
                sx={{
                  padding: 1,
                  "&:hover": {
                    color: rootColors.HighlightColor,
                  },
                  background: active === `#${path}` ? `rgba(0, 0, 0, 0.1)` : "",
                }}
              >
                {label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default Header;
