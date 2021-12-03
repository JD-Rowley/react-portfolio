import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import projects from './projects.json';

function App() {
  const [projectsList] = useState(projects);

  return (
    <div>
      <Nav />
      <main>
        <About />
        <Project
          {...projectsList.map(project => (
            <ProjectCard 
              title={project.title}
              deploy={project.deploy}
              github_url={project.github_url}
              github={project.github}
              description={project.description}
              languages={project.languages}
              image={project.image}
            />
          ))}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;