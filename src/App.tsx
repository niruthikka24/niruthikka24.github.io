import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
// import { Projects } from './components/Projects';
// import { About } from './components/About';
import { HonorsAndAwards } from './components/HonorsAndAwards';
export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      // case 'projects':
      //   return <Projects />;
      // case 'about':
      //   return <About />;
      case 'honors':
        return <HonorsAndAwards />;
      default:
        return <Home />;
    }
  };
  return <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderContent()}
    </Layout>;
}