
import './App.css';
import { Home } from './components/Home';
function App() {
  return (
    <div className=''>
    <div className='row bg-dark p-3 fixed-top navwidth' style={{marginLeft:'0px',marginRight:'0px',}}>
        <div className='col-sm-3'>
          <div>
          <h3 className='font-weight-bold text-white d-flex m-3'>MY-PORTFOLIO</h3>
          </div>
        </div>
        <div className='col-sm-2'></div>
        <div className='col-sm-1'></div>
        <div className='col-sm-6'>
        <header>
            <nav className='navbar d-flex justify-content-end'>
              <a href="#home" className="nav-link text-white">HOME</a>
              <a href="#about" className="nav-link text-white">ABOUT</a>
              <a href="#skills" className="nav-link text-white">SKILLS</a>
              <a href="#projects" className="nav-link text-white">PROJECTS</a>
              <a href="#hobbies" className="nav-link text-white">BLOGS</a>
              <a href="#contact" className="nav-link text-white">CONTACT</a>
            </nav>
          </header>
        </div>
    </div>
    <div className='' style={{marginTop:'97px'}}>
          <Home/>
    </div>
   

    </div>
  );
}

export default App;

