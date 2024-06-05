import entertainment from "../Images/entertainment.jpg";
import portfolio from "../Images/Portfoliio.jpg";
import bookmyshow from "../Images/bookmyshow.jpg";
import resumeBuilder from "../Images/resumeBuilder.png";

export const Project = () => {
  const myFunction = (paramenter) => {
    const elements = {
      box1: { div: "myDiv1", box: "boxsize", height: "935px" },
      box2: { div: "myDiv2", box: "boxsize2", height: "890px" },
      box3: { div: "myDiv3", box: "boxsize3", height: "970px" },
      box4: { div: "myDiv4", box: "boxsize4", height: "910px" },
    };

    const { div, box, height } = elements[paramenter];
    const x = document.getElementById(div);
    const boxes = document.getElementById(box);
    if (x.style.display === "none") {
      boxes.style.height = height;
      boxes.style.transition = "0.2s";
      x.style.display = "block";
    } else {
      x.style.display = "none";
      boxes.style.height = "500px";
    }
  };

  return (
    <div>
      <section id="projects">
        <div className="row">
          <div className="col-12 d-flex justify-content-center text-white">
            <h1>PROJECTS</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="bg-white shadow-lg projectBox1 m-5 p-1" id="boxsize">
              <img src={entertainment} alt="Entertainment" className="img-fluid" style={{maxHeight:'264px',width:'600px'}} />
              <div className="p-3">
                <button className="btn btn-primary projectButtons w-100 mb-2" onClick={() => myFunction('box1')}>
                  PROJECT DETAILS
                </button>
                <div className="d-flex justify-content-between mb-2">
                  <button className="btn btn-primary m-1">
                    <a href="https://bejewelled-blancmange-325c72.netlify.app" className="text-white text-decoration-none">
                      SEE LIVE
                    </a>
                  </button>
                  <button className="btn btn-primary m-1">
                    <a href="https://github.com/Yashwalavalkar/entertainmentApp" className="text-white text-decoration-none">
                      SOURCE CODE
                    </a>
                  </button>
                </div>
                <div id="myDiv1" style={{ display: 'none' }}>
                  <div className="mt-3 pl-2 pr-2">
                    <b>Description:</b> This is an E-Commerce website of ENTERTAINMENT, which provides entertainment videos.
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="mt-3">
                    <b>Feature:</b>
                    <ul>
                      <li>This is an E-Commerce website of Entertainment</li>
                      <li>Powered by Pure JavaScript and CSS</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="row">
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.jNbT2B3djkHhPP2j7LAadwAAAA?rs=1&pid=ImgDetMain" alt="HTML" style={{ height: '50px' }} />
                        <h5 className="ml-3">HTML</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png" alt="CSS" style={{ height: '50px' }} />
                        <h5 className="ml-3">CSS</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.d1GtY8OQfrHRxi5QKr0ZawHaHa?rs=1&pid=ImgDetMain" alt="JavaScript" style={{ height: '50px' }} />
                        <h5 className="ml-3">JavaScript</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.RvrEinC-XMTxt_fEqFIB_AAAAA?w=142&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">Redux</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.clipartmax.com/png/middle/275-2754492_mongodb-nosql-document-oriented-database-portable-network-mongodb-logo.png" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">MongoDB</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700118-icon-20-clouds-1024.png" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">Render</h5>
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="React" style={{ height: '50px' }} />
                        <h5 className="ml-3">React.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" style={{ height: '50px' }} />
                        <h5 className="ml-3">Bootstrap</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain" alt="Express" style={{ height: '50px' }} />
                        <h5 className="ml-3">Express.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/R.f7337d339216d05c1551688efb13a830?rik=m28qY9WE3BaKXQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-png-nodejs-icon-png-50-px-1600.png&ehk=XR9ktXGvw5svYVTEqemL7wSEUZL%2bihqTpYBLPSQn8GQ%3d&risl=&pid=ImgRaw&r=0" alt="Node.js" style={{ height: '50px' }} />
                        <h5 className="ml-3">Node.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" alt="Node.js" style={{ height: '50px' }} />
                        <h5 className="ml-3">Netlify</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <div className="bg-white shadow-lg projectBox2 m-5 p-1" id="boxsize2">
              <img src={portfolio} alt="Portfolio" className="img-fluid" />
              <div className="p-3">
                <button className="btn btn-primary projectButtons w-100 mb-2" onClick={() => myFunction('box2')}>
                  PROJECT DETAILS
                </button>
                <div className="d-flex justify-content-between mb-2">
                  <button className="btn btn-primary m-1">
                    <a href="https://stellular-cassata-a028ea.netlify.app" className="text-white text-decoration-none">
                      SEE LIVE
                    </a>
                  </button>
                  <button className="btn btn-primary m-1">
                    <a href="https://github.com/Yashwalavalkar/portfolio" className="text-white text-decoration-none">
                      SOURCE CODE
                    </a>
                  </button>
                </div>
                <div id="myDiv2" style={{ display: 'none' }}>
                  <div className="mt-3 pl-2 pr-2">
                    <b>Description:</b> This is an E-Commerce website of PORTFOLIO, which provides my educational information.
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="mt-3">
                    <b>Feature:</b>
                    <ul>
                      <li>This is an E-Commerce website of Portfolio</li>
                      <li>Powered by Pure JavaScript and CSS</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="row">
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.jNbT2B3djkHhPP2j7LAadwAAAA?rs=1&pid=ImgDetMain" alt="HTML" style={{ height: '50px' }} />
                        <h5 className="ml-3">HTML</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png" alt="CSS" style={{ height: '50px' }} />
                        <h5 className="ml-3">CSS</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.d1GtY8OQfrHRxi5QKr0ZawHaHa?rs=1&pid=ImgDetMain" alt="JavaScript" style={{ height: '50px' }} />
                        <h5 className="ml-3">JavaScript</h5>
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="React" style={{ height: '50px' }} />
                        <h5 className="ml-3">React.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" style={{ height: '50px' }} />
                        <h5 className="ml-3">Bootstrap</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" alt="Bootstrap" style={{ height: '50px' }} />
                        <h5 className="ml-3">Netlify</h5>
                      </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="bg-white shadow-lg projectBox3 m-5 p-1" id="boxsize3">
              <img src={bookmyshow} alt="BookMyShow" className="img-fluid" />
              <div className="p-3">
                <button className="btn btn-primary projectButtons w-100 mb-2" onClick={() => myFunction('box3')}>
                  PROJECT DETAILS
                </button>
                <div className="d-flex justify-content-between mb-2">
                  <button className="btn btn-primary m-1">
                    <a href="https://wondrous-torte-e1cc88.netlify.app" className="text-white text-decoration-none">
                      SEE LIVE
                    </a>
                  </button>
                  <button className="btn btn-primary m-1">
                    <a href="https://github.com/Yashwalavalkar/bookmyShow" className="text-white text-decoration-none">
                      SOURCE CODE
                    </a>
                  </button>
                </div>
                <div id="myDiv3" style={{ display: 'none' }}>
                  <div className="mt-3 pl-2 pr-2">
                    <b>Description:</b> This is an E-Commerce website of BOOKMYSHOW, which provides book tickets.
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="mt-3">
                    <b>Feature:</b>
                    <ul>
                      <li>This is an E-Commerce website of BookMyShow</li>
                      <li>Powered by Pure JavaScript and CSS</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="row">
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.jNbT2B3djkHhPP2j7LAadwAAAA?rs=1&pid=ImgDetMain" alt="HTML" style={{ height: '50px' }} />
                        <h5 className="ml-3">HTML</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png" alt="CSS" style={{ height: '50px' }} />
                        <h5 className="ml-3">CSS</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.d1GtY8OQfrHRxi5QKr0ZawHaHa?rs=1&pid=ImgDetMain" alt="JavaScript" style={{ height: '50px' }} />
                        <h5 className="ml-3">JavaScript</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.clipartmax.com/png/middle/275-2754492_mongodb-nosql-document-oriented-database-portable-network-mongodb-logo.png" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">MongoDB</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" alt="Bootstrap" style={{ height: '50px' }} />
                        <h5 className="ml-3">Netlify</h5>
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="React" style={{ height: '50px' }} />
                        <h5 className="ml-3">React.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" style={{ height: '50px' }} />
                        <h5 className="ml-3">Bootstrap</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain" alt="Express" style={{ height: '50px' }} />
                        <h5 className="ml-3">Express.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/R.f7337d339216d05c1551688efb13a830?rik=m28qY9WE3
                        BaKXQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-png-nodejs-icon-png-50-px-1600.png&ehk=XR9ktXGvw5svYVTEqemL7wSEUZL%2bihqTpYBLPSQn8GQ%3d&risl=&pid=ImgRaw&r=0" alt="Node.js" style={{ height: '50px' }} />
                        <h5 className="ml-3">Node.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700118-icon-20-clouds-1024.png" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">Render</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <div className="bg-white shadow-lg projectBox4 m-5 p-1" id="boxsize4">
              <img src={resumeBuilder} alt="Resume Builder" className="img-fluid" />
              <div className="p-3">
                <button className="btn btn-primary projectButtons w-100 mb-2" onClick={() => myFunction('box4')}>
                  PROJECT DETAILS
                </button>
                <div className="d-flex justify-content-between mb-2">
                  <button className="btn btn-primary m-1">
                    <a href="https://admirable-praline-4c0d3a.netlify.app" className="text-white text-decoration-none">
                      SEE LIVE
                    </a>
                  </button>
                  <button className="btn btn-primary m-1">
                    <a href="https://github.com/Yashwalavalkar/resumeBuilder" className="text-white text-decoration-none">
                      SOURCE CODE
                    </a>
                  </button>
                </div>
                <div id="myDiv4" style={{ display: 'none' }}>
                  <div className="mt-3 pl-2 pr-2">
                    <b>Description:</b> This is an E-Commerce website of RESUME BUILDER, which provides the facility to build resumes online.
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="mt-3">
                    <b>Feature:</b>
                    <ul>
                      <li>This is an E-Commerce website of Resume Builder</li>
                      <li>Powered by Pure JavaScript and CSS</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <hr className="custom-hrskills" />
                  <div className="row">
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.jNbT2B3djkHhPP2j7LAadwAAAA?rs=1&pid=ImgDetMain" alt="HTML" style={{ height: '50px' }} />
                        <h5 className="ml-3">HTML</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png" alt="CSS" style={{ height: '50px' }} />
                        <h5 className="ml-3">CSS</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.d1GtY8OQfrHRxi5QKr0ZawHaHa?rs=1&pid=ImgDetMain" alt="JavaScript" style={{ height: '50px' }} />
                        <h5 className="ml-3">JavaScript</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2"> 
                        <img className="ml-2" src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" alt="Node.js" style={{ height: '50px' }} />
                        <h5 className="ml-3">Netlify</h5>
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start">
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="React" style={{ height: '50px' }} />
                        <h5 className="ml-3">React.js</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" style={{ height: '50px' }} />
                        <h5 className="ml-3">Bootstrap</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://th.bing.com/th/id/OIP.RvrEinC-XMTxt_fEqFIB_AAAAA?w=142&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">Redux</h5>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <img className="ml-2" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700118-icon-20-clouds-1024.png" alt="MongoDB" style={{ height: '50px', width: '50px' }} />
                        <h5 className="ml-3">Render</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
