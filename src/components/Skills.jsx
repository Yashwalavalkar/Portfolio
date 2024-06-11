import React from "react";
import { Project } from "./Project";
import { Hobbies } from "./Hobbies";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Skills = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "blueviolet" }}>
      <div className="row ">
        <div className="col-4"></div>
        <div className="col-4 mt-4  d-flex justify-content-center text-white">
          <h1>SKILLS</h1>
        </div>
        <div className="col-4 "></div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <div
            className="bg-white rounded d-flex flex-column m-4 pt-2 hovering"
            style={{ minHeight: "150px", maxWidth: "300px" }}
          >
            <div className="d-flex justify-content-center">
              <h6>Version Control System</h6>
            </div>
            <hr className="custom-hrskills" />
            <div className="mt-3 d-flex align-items-center">
              <img
                className="ml-2"
                src="https://www.bestreviews2017.com/wp-content/uploads/2016/12/GIT-765x765.png"
                style={{ height: "50px", maxWidth: "50px" }}
                alt="GIT logo"
              />
              <h5 className="ml-3">GIT</h5>
            </div>
          </div>

          <div
            className="bg-white d-flex rounded m-4 hovering flex-column"
            style={{ minHeight: "150px", maxWidth: "300px" }}
          >
            <div className="d-flex justify-content-center">
              <h6>Database</h6>
            </div>
            <hr className="custom-hrskills" />
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center">
                <img
                  className=""
                  src="https://www.clipartmax.com/png/middle/275-2754492_mongodb-nosql-document-oriented-database-portable-network-mongodb-logo.png"
                  style={{ height: "50px", maxWidth: "50px" }}
                  alt="MongoDB logo1"
                />
                <h5 className="ml-3">MONGODB</h5>
              </div>

              <div className="ml-2 d-flex align-items-center">
                <img
                  className=""
                  src="https://th.bing.com/th/id/R.440599a8245680b8e854f8cade0041e3?rik=kMc5PnIC4H5tVA&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2fmicrosoft-sql-server-microsoft-azure-sql-database-microsoft.jpg&ehk=qkJhg9qhqXgtsQqJMI3dE17QA3dFHdZOQGy1Eu6%2f5qY%3d&risl=&pid=ImgRaw&r=0"
                  style={{ height: "50px", maxWidth: "50px" }}
                  alt="SQL logo1"
                />
                <h5 className="ml-3">SQL</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 ">
          <div
            className="bg-white m-4 rounded pt-2 justify-content-center hovering"
            style={{ minHeight: "150px", maxWidth: "300px" }}
          >
            <div className="d-flex justify-content-center ">
              <h6>FRAMEWORKS</h6>
            </div>
            <hr className="custom-hrskills" />
            <div className="d-flex flex-column justify-content-center ">
              <div className="d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png"
                  style={{ height: "50px" }}
                  alt="img1"
                />
                <h5 className="ml-3">BOOTSTRAP</h5>
              </div>
              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254069/material-ui-icon-sm.png"
                  style={{ height: "50px" }}
                  alt="img2"
                />
                <h5 className="ml-3">Material-UI</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-bootstrap-snippets/1.0.9/1623101743632/Microsoft.VisualStudio.Services.Icons.Default"
                  style={{ height: "50px" }}
                  alt="img3"
                />
                <h5 className="ml-3">React Bootstrap</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://www.pngrepo.com/download/354431/tailwindcss-icon.png"
                  style={{ height: "50px" }}
                  alt="img4"
                />
                <h5 className="ml-3"> Tailwind CSS</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div
            className="bg-white m-4 rounded pt-2 justify-content-center hovering"
            style={{ minHeight: "150px", maxWidth: "300px" }}
          >
            <div className="d-flex justify-content-center ">
              <h6>HOSTING PLATFORM</h6>
            </div>
            <hr className="custom-hrskills" />
            <div className="d-flex flex-column justify-content-center ">
              <div className="d-flex align-items-center mb-2">
                <img
                  className="ml-2"
                  src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png"
                  style={{ height: "50px" }}
                  alt="img5"
                />
                <h5 className="ml-3">NETLIFY</h5>
              </div>
              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700118-icon-20-clouds-1024.png"
                  style={{ height: "50px" }}
                  alt="img6"
                />
                <h5 className="ml-3">RENDER</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png"
                  style={{ height: "50px" }}
                  alt="img7"
                />
                <h5 className="ml-3">AWS</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                  style={{ height: "50px" }}
                  alt="img8"
                />
                <h5 className="ml-3">GITHUB PAGES</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="bg-white m-4 rounded pt-2 justify-content-center hovering"
            style={{  minHeight: "150px", maxWidth: "300px" }}
          >
            <div className="d-flex justify-content-center ">
              <h6>LIABRARIES/OTHER</h6>
            </div>
            <hr className="custom-hrskills" />
            <div className="d-flex flex-column justify-content-center ">
              <div className="d-flex align-items-center mb-2">
                <img
                  className="ml-2"
                  src="https://th.bing.com/th/id/OIP.jNbT2B3djkHhPP2j7LAadwAAAA?rs=1&pid=ImgDetMain"
                  style={{ height: "50px" }}
                  alt="img9"
                />
                <h5 className="ml-3">HTML</h5>
              </div>
              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://eric.golde.org/home/assets/images/lang/CSS.png"
                  style={{ height: "50px" }}
                  alt="img10"
                />
                <h5 className="ml-3">CSS</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://th.bing.com/th/id/OIP.d1GtY8OQfrHRxi5QKr0ZawHaHa?rs=1&pid=ImgDetMain"
                  style={{ height: "50px" }}
                  alt="img11"
                />
                <h5 className="ml-3">JAVASCRIPT</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
                  style={{ height: "50px" }}
                  alt="img12"
                />
                <h5 className="ml-3">REACT. JS</h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?rs=1&pid=ImgDetMain"
                  style={{ height: "50px" }}
                  alt="img13"
                />
                <h5 className="ml-3">NEXT. JS </h5>
              </div>

              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain"
                  style={{ height: "50px" }}
                  alt="img14"
                />
                <h5 className="ml-3">EXPRESS. JS</h5>
              </div>
              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://th.bing.com/th/id/R.f7337d339216d05c1551688efb13a830?rik=m28qY9WE3BaKXQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-png-nodejs-icon-png-50-px-1600.png&ehk=XR9ktXGvw5svYVTEqemL7wSEUZL%2bihqTpYBLPSQn8GQ%3d&risl=&pid=ImgRaw&r=0"
                  style={{ height: "50px" }}
                  alt="img15"
                />
                <h5 className="ml-3">NODE. JS </h5>
              </div>
              <div className="ml-2 d-flex align-items-center mb-2">
                <img
                  className=""
                  src="https://th.bing.com/th/id/OIP.RvrEinC-XMTxt_fEqFIB_AAAAA?w=142&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  style={{ height: "50px" }}
                  alt="img21"
                />
                <h5 className="ml-3">Redux</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="custom-hr" />
      <Project />
      <hr className="custom-hr" />
      <Hobbies />
      <hr className="custom-hr" />
      <Contact />
      <hr className="custom-hr" />

      <Footer />
    </div>
  );
};
