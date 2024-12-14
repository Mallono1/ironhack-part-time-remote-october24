import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const mockProjects = [
    { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
    { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
    { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
    { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
  ];
   
  function ProjectList() {
    const [projects, setProjects] = useState(mockProjects);
    return (
      <div className="list">
        <h2>Project List</h2>
   
        {projects.map(project => {
          return (
           <ProjectCard key={project._id} project={project} />
          );
        })}
      </div>
    );
  }
   
  export default ProjectList;