import ProjectCard from "../components/ProjectCard";
// import projectsData from "./../projects-data.json";
 
function ProjectsPage ({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return <ProjectCard key={project._id} project={project} /> 
      })}
    </div>
  );
}
 
export default ProjectsPage;