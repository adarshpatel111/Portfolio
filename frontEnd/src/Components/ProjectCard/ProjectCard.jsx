import { Box, Chip, Stack, Typography } from "@mui/material";
import { rootColors } from "../../Utilities/rootColors";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ title, imageUrl, techStack, githubUrl, liveUrl }) => {
  return (
    <Stack
      sx={{
        backgroundColor: rootColors.backgroundSecondary,
        padding: { xs: "10px", sm: "15px", md: "10px" },
        borderRadius: "10px",
        width: { xs: "100%", sm: "150px", md: "300px" },
        height: { xs: "auto", sm: "150px", md: "400px" },
        maxWidth: "100%",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: { xs: "120px", sm: "100px", md: "200px" },
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "top center" },
          borderRadius: "10px",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "end",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <NavLink to={githubUrl}>
            <Stack
              sx={{
                width: "30px",
                height: "30px",
                gap: "5px",
                color: rootColors.HighlightColor,
                backgroundColor: rootColors.backgroundPrimary,
                padding: "5px",
                "&:hover": {
                  backgroundColor: rootColors.HighlightColor,
                  color: rootColors.backgroundPrimary, // Lighter on hover
                  cursor: "pointer", // Optional: change cursor on hover
                },
              }}
            >
              <FaGithub />
            </Stack>
          </NavLink>
          <NavLink to={liveUrl}>
            <Stack
              sx={{
                width: "30px",
                height: "30px",
                gap: "5px",
                color: rootColors.HighlightColor,
                backgroundColor: rootColors.backgroundPrimary,
                padding: "5px",
                "&:hover": {
                  backgroundColor: rootColors.HighlightColor,
                  color: rootColors.backgroundPrimary, // Lighter on hover
                  cursor: "pointer", // Optional: change cursor on hover
                },
              }}
            >
              <GoArrowUpRight />
            </Stack>
          </NavLink>
        </Stack>
      </Stack>

      <Stack sx={{ gap: "5px", height: "auto", marginTop: "10px" }}>
        <Stack
          sx={{
            gap: "3px",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "70px",
          }}
        >
          {techStack.map((tech, index) => (
            <Chip
              key={index}
              size="small"
              label={
                <Typography
                  variant="body3"
                  sx={{
                    fontSize: {
                      xs: "0.875rem",
                      sm: "1rem",
                      md: "0.875rem",
                      xl: "1rem",
                    }, // Responsive font size
                    color: rootColors.textSecondary,
                  }}
                >
                  {tech.name}
                </Typography>
              }
              icon={
                <Box
                  color={tech.color || rootColors.HighlightColor}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {tech.icon}
                </Box>
              }
            />
          ))}
        </Stack>

        <Typography
          variant="h6" // Larger font size for the title
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
            fontWeight: 500,
            wordWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: rootColors.HighlightColor,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2" // Smaller font size for the description
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font size
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            color: rootColors.textPrimary,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
