import React from "react";
import { About } from "./About";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <div className="">
      <section id="home">
  <div class="container-fluid p-0" >
    <div
      class="carousel slide"
      data-ride="carousel"
      id="carouselExampleControls"
      
    >
      <div class="carousel-inner" >
        <div class="carousel-item active" >
          <img
            class="d-block w-100"
            src="https://wallpapercave.com/wp/wp1904060.jpg"
            alt="First slide"
            style={{minHeight:'520px'}}
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://wallpapercave.com/wp/wp6350578.jpg"
            alt="Second slide"
            style={{minHeight:'520px'}}
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://wallpaperaccess.com/full/3239444.jpg"
            alt="Third slide"
            style={{minHeight:'520px'}}
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</section>


        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
    </>
  );
};
