import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
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
      case 'Resume':
        return(
          <Resume />
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