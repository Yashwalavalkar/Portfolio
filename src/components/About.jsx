import React from "react";

export const About = () => {
  return (
    <div className="bg-light">
      <div style={{ height: "40px", backgroundColor: "cyan" }}></div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <h1>ABOUT ME</h1>
          </div>
          <div className="col"></div>
        </div>

        <div className="row my-5">
          <div className="col-md-6">
            <img
              src="https://hyattfennell.com/wp-content/uploads/2022/09/workfh.jpeg"
              className="img-fluid img-responsive"
              alt="Web Developer"
              width={400}
              style={{minHeight:'300px'}}
            />
          </div>

          <div className="col-md-6 bg-white shadow-lg p-4">
            <p className="lead">
              I am currently immersed in the world of web development, focusing
              on mastering the MERN stack while simultaneously pursuing a BCA
              course. Proficient in JavaScript, I have honed my skills in
              frontend development using React.js and backend development with
              Node.js. Additionally, I am well-versed in database management,
              leveraging MongoDB to create efficient data-driven applications.
              My passion lies in solving complex problems and crafting
              innovative solutions.
            </p>
            <hr />
            <div className="d-flex justify-content-center">
              <a
                href="https://drive.google.com/file/d/1EDHvMcAdzJM2HmtgIwnv9qbv80Jck-6O/view?usp=sharing"
                className="btn btn-primary shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the Resume Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
