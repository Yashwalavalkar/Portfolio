import React, { useState } from 'react';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      navbarNav.classList.toggle('show');
    }
  };

  return (
    <div className='fixed-top'>
      <div className='row p-4 bg-dark text-white'>
        <div className='col-12 col-md-4 text-center text-md-left'>
          <h3 className='font-weight-bold'>MY-PORTFOLIO</h3>
        </div>
        <div className='col-12 col-md-8'>
          <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
              <button 
                className='navbar-toggler'
                type='button'
                onClick={toggleLinks}
                aria-label='Toggle navigation'
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`} id='navbarNav'>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <a href='#home' className='nav-link text-white'> 
                      HOMEs
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#about' className='nav-link text-white'>
                      ABOUT
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#skills' className='nav-link text-white'>
                      SKILLS
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#projects' className='nav-link text-white'>
                      PROJECTS
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#hobbies' className='nav-link text-white'>
                      BLOGS
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#contact' className='nav-link text-white'>
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};
