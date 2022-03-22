import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import ReactJSProjects from "../pages/Projects/ReactJSProjects";
import JavaProjects from "../pages/Projects/JavaProjects";
import ArduinoProjects from "../pages/Projects/ArduinoProjects";
import Contact from "../pages/Contact";
import Navbar from "./Navbar/Navbar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <main>
            <Navbar />
            <section>
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="aboutme" element={<AboutMe />} />
                <Route path="projects-reactjs" element={<ReactJSProjects />} />
                <Route path="projects-java" element={<JavaProjects />} />
                <Route path="projects-arduino" element={<ArduinoProjects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" exact element={<AboutMe />} />
              </Routes>
            </section>
          </main>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
