import React from "react";

export const Contact = () => {
  return (
    <div className="">
      <section id="contact"></section>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 d-flex justify-content-center">
          <h1>CONTACT</h1>
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row ">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div
            className="bg-white rounded mt-5 p-5 d-flex justify-content-center"
            style={{ height: "150px" }}
          >
            <button className="hoverButton d-flex align-items-center btn m-1">
              <a
                className="text-decoration-none"
                href="mailto:example@example.com?subject=Subject%20Here&body=Body%20text%20here"
              >
                📧 Email
              </a>
            </button>
            <button className="hoverButton d-flex align-items-center m-1 btn m-2">
              <img
                className="mr-1"
                src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                style={{ height: "20px" }}
                alt="image"
              ></img>
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/in/yash-walavalkar/"
              >
                LinkedIn
              </a>
            </button>
            <button className="hoverButton btn m-2 d-flex align-items-center ">
              <img
                className="mr-1"
                src="https://th.bing.com/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwAAAA?rs=1&pid=ImgDetMain"
                style={{ height: "20px" }}
                alt="image"
              ></img>
              <a
                className="text-decoration-none"
                href="https://github.com/yashnw"
              >
                Github
              </a>
            </button>
            <button className="hoverButton btn m-2 d-flex align-items-center">
              <img
                className="mr-1"
                src="https://th.bing.com/th/id/OIP.aByvAl4Fl4Dk3N9fA3IudwAAAA?rs=1&pid=ImgDetMain"
                style={{ height: "20px" }}
                alt="image"
              ></img>
              <a
                className="text-decoration-none"
                href="https://www.youtube.com/channel/UCgZTCsd0JdVogxdyEUFeS9Q"
              >
                Youtube
              </a>
            </button>
          </div>
        </div>
        <div className="col-sm-1 "></div>
      </div>
    </div>
  );
};
