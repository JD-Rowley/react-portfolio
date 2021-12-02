import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// fa library
library.add(fab);

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;