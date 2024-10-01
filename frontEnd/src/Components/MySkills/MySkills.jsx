import React, { useState, useEffect } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Stack, Typography } from "@mui/material";
import { rootColors } from "../../Utilities/rootColors";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import {
  FaReact,
  FaNode,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Skills = () => {
  // Array of icons to be shuffled
  const [icons, setIcons] = useState([
    { id: 1, component: <SiMongodb style={{ color: "#4DB33D" }} /> },
    { id: 2, component: <FaReact style={{ color: "#61DBFB" }} /> },
    { id: 3, component: <FaNode style={{ color: "#3c873a" }} /> },
    { id: 4, component: <FaJsSquare style={{ color: "#F0DB4F" }} /> },
    { id: 5, component: <FaCss3Alt style={{ color: "#2965f1" }} /> },
    {
      id: 6,
      component: (
        <FaHtml5
          style={{
            background: "linear-gradient(to right, #e34c26, #f06529)",
            color: "#fff",
          }}
        />
      ),
    },
    { id: 7, component: <SiTailwindcss style={{ color: "skyblue" }} /> },
    { id: 8, component: <SiTypescript style={{ color: "#007acc" }} /> },
    { id: 9, component: <SiRedux style={{ color: "#007acc" }} /> },
    { id: 10, component: <RiNextjsFill style={{ color: "#007acc" }} /> },
  ]);

  // Shuffle icons automatically every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) => shuffleArray(prevIcons));
    }, 2000); // Shuffle every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack
      id="skills"
      sx={{
        marginTop: 2,
        marginBottom: { xs: 10, md: 0 },
        width: "100%",
        flexDirection: "column",
        gap: 4,
        justifyContent: "space-between",
        fontSize: { xs: "2rem", md: "3rem" },
      }}
    >
      <Stack
        sx={{
          margin: "auto",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: "space-between",
          color: rootColors.textPrimary,
        }}
      >
        <Typography variant="h4">My Skills</Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "100%" },
            maxWidth: "500px",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color={rootColors.textSecondary}
            align="left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            velit veritatis odit officia nostrum eum fugit sint ipsa, cum vitae
            molestias, corporis quis, totam doloribus deleniti adipisci quidem
            illo ad!
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: { xs: "100%", md: "45%" },
            marginTop: { xs: 5, md: 1 },
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Flipper flipKey={icons.map((icon) => icon.id).join("")}>
            <Stack
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {icons.slice(0, 5).map((icon) => (
                <Flipped key={icon.id} flipId={icon.id}>
                  <Stack
                    sx={{
                      width: { xs: "70px", md: "90px" },
                      height: { xs: "70px", md: "90px" },
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10%",
                      backgroundColor: rootColors.backgroundSecondary,
                    }}
                  >
                    {icon.component}
                  </Stack>
                </Flipped>
              ))}
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              {icons.slice(5, 10).map((icon) => (
                <Flipped key={icon.id} flipId={icon.id}>
                  <Stack
                    sx={{
                      width: { xs: "70px", md: "90px" },
                      height: { xs: "70px", md: "90px" },
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10%",
                      backgroundColor: rootColors.backgroundSecondary,
                    }}
                  >
                    {icon.component}
                  </Stack>
                </Flipped>
              ))}
            </Stack>
          </Flipper>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Skills;
