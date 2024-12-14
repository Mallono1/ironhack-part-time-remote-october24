function ProjectCard(props){
    const { project } = props;
    return(
            <div>
            <h3>{project.name}</h3>
            <p>Tech Stack: {project.techStack}</p>
        </div>
    )
}

export default ProjectCard;