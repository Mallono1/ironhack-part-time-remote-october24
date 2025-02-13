import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import AddProject from "../components/AddProject";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {   
    // Send the token through the request "Authorization" Headers
     axios.get('http://localhost:5005/projects')
      .then((response) => {
        setProjects(response.data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  if(projects.length === 0){
    return <p>Loading ...</p>
  }
  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
