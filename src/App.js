import React, { useState, useEffect } from 'react';
import './App.css';
import { Home } from './components/Home'

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=''>
      <div className='row bg-dark p-3 fixed-top navwidth' style={{ marginLeft: '0px', marginRight: '0px' }}>
        <div className='col-sm-3'>
          <div>
            <h3 className='font-weight-bold text-white d-flex m-3'>MY-PORTFOLIO</h3>
          </div>
        </div>
        {isMobile && (
          <div className='col-sm-2'>
            <button
              className='btn btn-outline-light'
              type='button'
              onClick={toggleLinks}
              aria-label='Toggle navigation'
            >
              {showLinks ? <span></span> : <span></span>}
            </button>
          </div>
        )}
        <div className={`col-sm-${isMobile ? 10 : 6} ${isMobile && !showLinks ? 'd-none' : ''}`}>
          <header>
            <nav className='navbar d-flex justify-content-end'>
              <a href="#home" className={`nav-link text-white ${isMobile && !showLinks ? 'd-none' : ''}`} onClick={toggleLinks}>HOME</a>
              <a href="#about" className={`nav-link text-white ${isMobile && !showLinks ? 'd-none' : ''}`} onClick={toggleLinks}>ABOUT</a>
              <a href="#skills" className={`nav-link text-white ${isMobile && !showLinks ? 'd-none' : ''}`} onClick={toggleLinks}>SKILLS</a>
              <a href="#projects" className={`nav-link text-white ${isMobile && !showLinks ? 'd-none' : ''}`} onClick={toggleLinks}>PROJECTS</a>
              <a href="#hobbies" className={`nav-link text-white ${isMobile && !showLinks ? 'd-none' : ''}`} onClick={toggleLinks}>BLOGS</a>
              <a href="#contact" className={`nav-link text-white ${isMobile && !showLinks ? 'd-none' : ''}`} onClick={toggleLinks}>CONTACT</a>
            </nav>
          </header>
        </div>
      </div>
      <div className='' style={{ marginTop: '97px' }}>
        <Home />
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default App;
