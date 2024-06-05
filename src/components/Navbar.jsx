import React from 'react'
import { NavbarBrand } from 'react-bootstrap'

export const Navbar = () => {
  return (
    <div className='fixed-top'>


        <div className='row  p-4 bg-dark text-white'>
            <div className='col-sm-4 '>
                <h3 className='font-weight-bold'>MY-PORTFOLIO</h3>
            </div>
            <div className='col-sm-2 '></div>
            <div className='col-sm-6 '>
                <header>
                    <nav className='nav-bar d-flex '>
                        <a href="#home" class="nav-link text-white">HOME</a>
                        <a href="#about" class="nav-link text-white">ABOUT</a>
                        <a href="#skills" class="nav-link text-white">SKILLS</a>
                        <a href="#projects" class="nav-link text-white">PROJECTS</a>
                        <a href="#hobbies" class="nav-link text-white">BLOGS</a>
                        <a href="#contact" class="nav-link text-white">CONTACT</a>
                </nav>
                </header>
                
            </div>
        </div>

    </div>
  )
}


