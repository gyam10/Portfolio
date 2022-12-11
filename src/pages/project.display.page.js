import { useParams } from "react-router-dom";
import { ProjectList } from "../service/project.list";
import { AiFillGithub } from "react-icons/ai";
import "../assets/css/projectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <>
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="" className="mt-5" />
        <a
          href="https://github.com/gyam10/Pig_Game"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </>
  );
};
export default ProjectDisplay;
