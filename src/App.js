import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import projects from './projects.json';

function App() {
  // const [projectsList] = useState(projects);
  const [currentPage, handlePageChange] = useState('About');

  function renderPage(currentPage) {
    switch(currentPage) {
      default:
        return(
          <About />
        );
      case 'Portfolio':
        return(
          <Portfolio />
        );
      case 'Contact':
        return(
          <ContactForm />
        );
      case 'Resume':
        return(
          <About />
        );
    }
  }

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;