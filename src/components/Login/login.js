import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import vector from "../../images/Vector 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';

const login = () => {
  return (
    <section>
      <div>
        <div className="row">
          <div className="col-md-4">
            <section className="sidebar_content">
              <h2>
                Globetech <br></br> Company Limited{" "}
              </h2>
              <p>Make yourself digitalized & more effecient</p>
              <Link to="/home">
                <img src={vector} alt=""></img>
              </Link>
            </section>
          </div>
          <div className="col-md-8 log_fm ">
            <div className="login_form">
              <form class="login">
                <h2>Welcome</h2>
                <p>Sign in to your account</p>
                <input
                  type="email"
                  className="input_input"
                  placeholder="Email"
                />
                {/* <FontAwesomeIcon className="eye_icon" icon={faEye} /> */}
                <input type="password" className="input_input" placeholder="Password"/>
                  <span><FontAwesomeIcon className="eye_icon" icon={faEye} /> <input type="password" className="input_input" placeholder="Password"/> </span>
                <input className="button_input" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
