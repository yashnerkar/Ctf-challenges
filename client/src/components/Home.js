import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-div container-fluid">
      <div className="home_image d-flex justify-content-center">
        <img className="home_image " src="banner.webp" style={{ height: "300px", width: "500px" }} />
        <img className="img-fluid" src="boy.webp" id="boy"/>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Link
          type="submit"
          to="/login"
          className="btn btn-sm text-dark px-4  d-flex justify-content-center align-items-center login_button"
        >
          <i className="bi bi-play-fill fs-3 pt-1 mx-1" />
          PLAY
        </Link>
        <button
          type="submit"
          className="btn btn-sm text-dark mt-3  px-4 d-flex justify-content-around align-items-center login_button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-exclamation-circle fs-3 pt-1 mx-1" />
          HELP
        </button>
      </div>
    </div>
  );
}

export default Home;
