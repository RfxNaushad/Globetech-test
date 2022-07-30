import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/globetech logo.png";
import plane from "../../images/Vector.png";
import bulk1 from "../../images/bulk 1.png";
import image3 from "../../images/image 3.png";
import image4 from "../../images/image 4.png";
import image5 from "../../images/image 5.png";
import image6 from "../../images/image 6.png";
import software1 from "../../images/software 1.png";
import { NavLink } from 'react-router-dom';

import './services.css';

const services = () => {
  return (
    <div>
      <section className="mt-5">
        <nav class="navbar navbar-expand-sm">
          <div class="container">

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarCollapse" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto ms-auto nav_custom">
                <div className="hover-animation d-flex">
                <li class="nav-item">
                  <NavLink className="nav-link mx-3 " activeClassName="active" to="/home">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link mx-3" activeClassName="active" to="/services">
                    Services
                  </NavLink>
                </li>
                </div>
                <li class="nav-item">
                  <NavLink className="nav-link mx-3" activeClassName="active" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section className="container grid_box">
        <div>
          <div className="plane_animation_2 text-start_2 px-5 d-flex">
            <div className="tail-main_2">
              <span className="tail"></span>
              <span className="tail"></span>
              <span className="tail"></span>
              <img src={plane} alt=""></img>
            </div>
          </div>
          <div className="text-center px-5">
            <h2 className="services-heading fs-3 text-white">Services</h2>
            <h4 className="fs-2 fw-bold text-white">We provides services to our clients</h4>
          </div>
        </div>

        <div class="container">
          <div class="card-deck row">
            <div class="col-xs-12 col-sm-6 col-md-4 p-5">
              <div class="card">
                <div class="view overlay">
                  <img
                    class="card-img-top p-3"
                    src={software1}
                    alt=""
                  />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title text-info fw-light">Software Solution</h4>

                  <p style={{ textAlign: "justify" }} class="card-text" >
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it
                   has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  </p>

                  <button type="button" class="btn btn-info btn-md fw-bold fs-5 text-white btn_custom                                         ">
                     More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 p-5">
              <div class="card mb-4">
                <div class="view overlay">
                <img
                    class="card-img-top p-3 card-img"
                    src={image3}
                    alt=""
                  />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title text-info fw-light">E-Commerce Solution</h4>

                  <p style={{ textAlign: "justify" }} class="card-text ">
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it
                   has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  </p>

                  <button type="button" class="btn btn-info btn-md fw-bold fs-5 text-white btn_custom">
                    More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 p-5">
              <div class="card mb-4">
                <div class="view overlay">
                  <img class="card-img-top p-3 card-img" src={image4} alt="" />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title text-info fw-light">ERP Solution</h4>

                  <p  style={{ textAlign: "justify" }} class="card-text">
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it
                   has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  </p>

                  <button type="button" class="btn btn-info btn-md fw-bold fs-5 text-white btn_custom">
                    More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 p-5">
              <div class="card">
                <div class="view overlay">
                  <img
                    class="card-img-top p-3 card-img"
                    src={bulk1}
                    alt=""
                  />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title text-info fw-light">Bulk SMS Service</h4>

                  <p style={{ textAlign: "justify" }} class="card-text" >
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it
                   has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  </p>

                  <button type="button" class="btn btn-info btn-md fw-bold fs-5 text-white btn_custom">
                    More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 p-5">
              <div class="card mb-4">
                <div class="view overlay">
                  <img class="card-img-top p-3 card-img" src={image5} alt="" />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title text-info fw-light">Graphic Design</h4>

                  <p  style={{ textAlign: "justify" }} class="card-text">
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it
                   has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  </p>

                  <button type="button" class="btn btn-info btn-md fw-bold fs-5 text-white btn_custom">
                    More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 p-5">
              <div class="card mb-4">
                <div class="view overlay">
                  <img class="card-img-top p-3 card-img" src={image6} alt="" />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title text-info fw-light">Digital Marketing</h4>

                  <p  style={{ textAlign: "justify" }} class="card-text">
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it
                   has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  </p>

                  <button type="button" class="btn btn-info btn-md fw-bold fs-5 text-white btn_custom">
                      More
                  </button>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default services;
