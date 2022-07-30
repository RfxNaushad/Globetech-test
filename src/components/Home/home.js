import React from 'react';
import './home.css';
import logo from '../../images/globetech logo.png';
import plane from '../../images/Vector.png';
import { NavLink } from 'react-router-dom';

const home = () => {



  return (
    <section  className='mt-5 home_main'>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt=''></img>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto ms-auto nav_custom">
            <div className="hover-animation d-flex">
              <li className="nav-item" >
              <NavLink className="nav-link  mx-3" activeClassName="active" to="/home">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link mx-3" activeClassName="active" to="/services">Services</NavLink>
              </li>
            </div>  
              <li className="nav-item">
              <NavLink className="nav-link mx-3" activeClassName="active" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      

      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <div className='plane_animation text-start px-5 d-flex'>
                <div className='tail-main'>
                  <span className='tail'></span>
                  <span className='tail'></span>
                  <span className='tail'></span>
                </div>
                <img src={plane} alt=''></img>
              </div>
              <div className='text-start px-5'>
                <h2 className='header-heading'><span className='theme-text-color'>Welcome To</span> <span className='theme-text-color-2'>Globetech</span></h2>
                <p className='header-text theme-text-color'>
                We are committed to deliver <span className='theme-text-color-2'>best IT services.</span><br></br>
                  Our Consultants have experience in working with clients.
                  We have extensive experience in the software application
                  space and also offer a broad range and depth of technology.</p>
              </div>
              <div className='text-start px-5'>
                <button className='btn header-btn-1'>Support us</button>
                <button className='btn  header-btn-2 ms-3'>Our Mission</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='solar-system'>
              <div id="sun"></div>

              <div className="orbit mercury-orbit"></div>
              <div className="mercury-spin">
                <div id="mercury"></div>
                <div id="mercury_1"></div>
              </div>

              <div className="orbit venus-orbit"></div>
              <div className="venus-spin">
                <div id="venus"></div>
                <div id="venus_1"></div>
              </div>

              <div className="orbit earth-orbit"></div>
              <div className="earth-spin">
                <div id="earth"></div>
                <div id="earth_1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>

  );
};

export default home;