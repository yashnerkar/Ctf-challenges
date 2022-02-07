import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-div container-fluid">
      <div className="home_image">
        <img className="home_image img-fluid " src="banner.webp" alt="..." />
        <img src="boy.webp" id="boy" alt="..." />
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Link
          type="submit"
          to="/login"
          className="btn btn-md text-dark px-4  d-flex justify-content-center align-items-center login_button"
        >
          <i className="bi bi-play-fill fs-1  pt-1 mx-1" />
          PLAY
        </Link>
        <button
          type="submit"
          className="btn btn-md text-dark mt-3  px-4 d-flex justify-content-around align-items-center login_button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-exclamation-circle fs-1 pt-1 mx-1" />
          HELP
        </button>
      </div>
    </div>
  );
}

export default Home;
