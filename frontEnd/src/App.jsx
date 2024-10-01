import "./App.css";
import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Header from "./Components/Header/Header";
import { rootColors } from "./Utilities/rootColors";
import HeroSection from "./Components/HeroSection/HeroSection";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/MySkills/MySkills";
import ContactMe from "./Components/ContactMe/ContactMe";
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
     },
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Stack sx={{ bgcolor: rootColors.backgroundPrimary }}>
          <Header />
          <Stack sx={{ width: { xs: "90%", md: "90%" }, margin: "auto" }}>
            <HeroSection />
            <Skills />
            <Projects />
            <ContactMe />
          </Stack>
          <Footer />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
