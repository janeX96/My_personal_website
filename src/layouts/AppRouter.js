import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
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
                <Route path="projects" element={<Projects />} />
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
