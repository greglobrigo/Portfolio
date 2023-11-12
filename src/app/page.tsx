import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Mosaic from "./Mosaic";
import Work from "./Work-Projects";
import PersonalProjects from "./Personal-Projects";
import Contact from "./Contact";

export default function Main() {
  return (
    <>
      <div className="gradient__bg">
        <Home />
      </div>
      <About />
      <Skills />
      <Mosaic />
      <Work />
      <PersonalProjects />
      <Contact />
    </>
  )
}
