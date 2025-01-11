import { Link } from "react-router-dom";

function ProjectCard({ project }){
    return(
        <div className="project">
            <h3><Link to={`/projects/${project._id}`}>{project.name}</Link></h3>
            <p>{project.technologies}</p>
        </div>
    )
}

export default ProjectCard;