import ProjectItem from "../components/project.item.component";
import "../assets/css/project.css";
import { ProjectList } from "../service/project.list";

const Project = () => {
  return (
    <>
      <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, index) => {
            return (
              <ProjectItem
                name={project.name}
                id={index}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Project;
