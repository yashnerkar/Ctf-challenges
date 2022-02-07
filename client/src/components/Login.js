import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

function Login({ setGet, showAlert }) {
  const history = useHistory();
  const [login, setLogin] = useState({
    group: "",
    password: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setLogin(() => {
      return {
        ...login,
        [name]: value,
      };
    });
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const toggleDisplay = async () => {
    await delay(200);
    const x = await document.querySelectorAll(".login-form");
    await x.forEach((e) => {
      e.classList.remove("login-css");
      e.style.display = "none";
      e.style.opacity = "0";
      e.style.transition = "opacity 1s ease-in-out";
      e.style.transitionDelay = "1s";
      e.style.transitionDuration = "1s";
    });
    const img = document.querySelector("#login-img");
    img.classList.add("d-flex");
    img.style.display = "block";
    img.style.opacity = "1";
    img.style.transition = "opacity 1s ease-in-out";
    window.setTimeout(function () {
      img.style.display = "none";
    }, 4000);
  };
  const getData = async (e) => {
    e.preventDefault();
    const groupTrim = login.group.trim().toLowerCase();
    const passwordTrim = login.password.trim();
    const data = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group: groupTrim,
        password: passwordTrim,
      }),
      credentials: "include",
    });
    const res = await data.json();
    if (res === "#E52D50:white:The TeamName is Incorrect please try again") {
      return [
        showAlert(res),
        setLogin({
          group: "",
          password: "",
        }),
      ];
    }
    if (res === "#E52D50:white:The Password is Incorrect please try again") {
      return [
        showAlert(res),
        setLogin({
          group: "",
          password: "",
        }),
      ];
    }
    setGet(res.data[0]._id);
    await toggleDisplay();
    await delay(3000);
    await history.push(`/${res.data[0]._id}/challenges`);
    setLogin({
      group: "",
      password: "",
    });
  };
  return (
    <div
      className="d-flex justify-content-center  align-items-center"
      style={{ height: "92vh", fontFamily: "cairo, sans-serif" }}
    >
      <button
        className="btn text-dark text-center m-4  p-0"
        style={{ position: "fixed", top: "8vh", left: "1vw" }}
        onClick={() => {
          history.push("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-arrow-left text-white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
      </button>{" "}
      <img
        id="login-img"
        style={{
          width: "50%",
          height: "60%",
          display: "none",
        }}
        className=" container  justify-content-center align-items-center"
        src="ag.gif"
        alt="..."
      />{" "}
      <div
        className="container login-css mx-5 login-form"
        style={{ borderRadius: "40px", maxWidth: "600px" }}
      >
        <div className="col-md-12 col-sm-12 col-12 login-form">
          <form onSubmit={getData} className="p-5 form-submit login-form">
            <h1 className="text-center text-light fw-bold mb-4"> Login </h1>{" "}
            <p className="text-muted text-center mb-3 ">
              Please Enter your Team Name and password!
            </p>{" "}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control text-light"
                id="name"
                value={login.group}
                name="group"
                onChange={onChange}
                style={{
                  border: "none",
                  borderRadius: "0",
                  background: "transparent",
                  boxShadow: "inset 0 -1px 0 #2196f3",
                  borderBottomColor: "primary",
                }}
                required
                placeholder="Team Name"
              />
              <label htmlFor="name" className="text-light mb-2">
                Team Name{" "}
              </label>{" "}
            </div>{" "}
            <div className="form-floating">
              <input
                type="password"
                className="form-control text-light"
                id="password"
                value={login.password}
                name="password"
                placeholder="Password"
                onChange={onChange}
                style={{
                  border: "none",
                  borderRadius: "0",
                  background: "transparent",
                  boxShadow: "inset 0 -1px 0 #2196f3",
                  borderBottomColor: "primary",
                }}
                required
              />
              <label htmlFor="password" className="text-light mb-2">
                Password{" "}
              </label>{" "}
            </div>{" "}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-light text-center mt-5 px-4 fw-bold  btn-lg"
                style={{
                  borderRadius: "15px",
                  fontFamily: "courier prime",
                  letterSpacing: "2px",
                }}
              >
                Login{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
