import { Stack, Typography } from "@mui/material";
import { rootColors } from "../../Utilities/rootColors";
import ProjectCard from "../ProjectCard/ProjectCard";
import Bsrewebsite from "../../assets/BsreWebsiteimg.png";
import RGAVwebsite from "../../assets/rgavWebsiteimg.png";
import PhoenixShopping from "../../assets/PhoenixshoppingWebsiteImg.png";
import ApTechnicalWebsiteImg from "../../assets/ApTechnicalWebsiteImg.png";
import PizzeriaWebsite from "../../assets/PizzeriaWebsiteImg.png";
import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiMui,
  SiExpress,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

const Projects = () => {
  // Dummy data array
  const projectData = [
    {
      title: "BSRE WEBSITE",
      imageUrl: Bsrewebsite,
      githubUrl: "https://www.bsre.in/",
      liveUrl: "https://www.bsre.in/",
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
        { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
        { name: "ExpressJs", icon: <SiExpress />, color: "#000000" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      ],
    },
    {
      title: "Rishghyan Ayurveda",
      imageUrl: RGAVwebsite,
      githubUrl: "https://www.rgav.in/",
      liveUrl: "https://www.rgav.in/",
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
        { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      ],
    },
    {
      title: "Pizzeria",
      imageUrl: PizzeriaWebsite,
      githubUrl: "",
      liveUrl: "",
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
      ],
    },
    {
      title: "Shopping Center",
      imageUrl: PhoenixShopping,
      githubUrl: "https://github.com/adarshpatel111/Shopping.git",
      liveUrl: "https://phoenix-shopping.vercel.app/",
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
        { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
        { name: "ExpressJs", icon: <SiExpress />, color: "#000000" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      ],
    },
    {
      title: "APTechnical",
      imageUrl: ApTechnicalWebsiteImg,
      githubUrl: "https://github.com/adarshpatel111/APTechnical.git",
      liveUrl: "https://ap-technical.vercel.app/",
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
      ],
    },
  ];

  return (
    <Stack
      id="projects"
      sx={{
        width: "100%",
        margin: "50px 0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        color={rootColors.textPrimary}
        fontWeight="bold"
        sx={{ marginBottom: "20px", textAlign: "center" }}
      >
        Projects
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: { xs: "center", sm: "center", md: "center" },
        }}
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            techStack={project.techStack}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
