import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <main>
            <section>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutme" exact component={AboutMe} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </section>
          </main>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
