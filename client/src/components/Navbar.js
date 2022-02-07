import React, { useState, useEffect } from "react";
import "./home.css";
import logo from "../images/CSI-CATT-DMCE.webp";
import { Link, useLocation } from "react-router-dom";

function Navbar({ get, showAlert }) {
  const [end, setEnd] = useState("none");
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    switch (pathname) {
      case `/${get}/challenges`:
        setEnd("block");
        break;
      default:
        setEnd("none");
        break;
    }
  }, [pathname, get]);

  return (
    <nav className="navbar" style={{ height: "8vh" }}>
      <div className="container-fluid">
        <a href="https://csidmce.tech" target={"_blank"} rel="noreferrer">
          <img
            id="csi-logo"
            src={logo}
            alt="CSI Logo"
            style={{ width: "14rem" }}
          />{" "}
        </a>
        <Link
          className={`btn btn-light fw-bold text-center d-${end}`}
          to={"/"}
          onClick={() => {
            sessionStorage.removeItem("data");
            showAlert(
              "greenyellow:black:Congratulations you have Completed the Challenges!!!"
            );
          }}
        >
          Log out
        </Link>{" "}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
