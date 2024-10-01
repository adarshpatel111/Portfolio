import { Box, Chip, Stack, Typography } from "@mui/material";
import { rootColors } from "../../Utilities/rootColors";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import {GoArrowUpRight} from "react-icons/go"


const ProjectCard = ({ title, imageUrl, techStack, githubUrl, liveUrl }) => {
  return (
    <Stack
      sx={{
        backgroundColor: rootColors.backgroundSecondary,
        padding: { xs: "10px", sm: "15px", md: "20px" },
        borderRadius: "10px",
        width: "100%", // Ensure full width of Grid item
        maxWidth: "350px", // Limit width for larger screens
        height: "100%", // Allow flexibility in height
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: { xs: "120px", sm: "200px", md: "250px" },
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {md: "cover",  xs: "contain"},
          backgroundPosition: "center",
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
                  color: rootColors.backgroundPrimary,
                  cursor: "pointer",
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
                  color: rootColors.backgroundPrimary,
                  cursor: "pointer",
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
            justifyContent: "flex-start",
            width: "100%",
            height: "60px !important",
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
                    fontSize: { xs: "0.875rem", sm: "1rem" },
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
          variant="h6"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
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
          variant="body2"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
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
