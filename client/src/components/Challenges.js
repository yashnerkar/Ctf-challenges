
import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import "./challenges.css";
import "./cards.css";
function Challenges({ get, showAlert }) {
  const [answer, setAnswer] = useState("");
  const [disable, setDisable] = useState([]);
  useEffect(() => {
    const api = async (e) => {
      const data = await fetch("/site-target", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: get,
        }),
        credentials: "include",
      });
      const res = await data.json();
      const targetAnswer = res.map((e) => {
        return e.target;
      });
      setDisable(targetAnswer);
    };
    api();
  }, [get]);
  disable.map((e) => {
    const id = document.getElementById(e);
    const text = document.createElement("i");
    text.classList.add("bi");
    text.classList.add("bi-check-circle-fill");
    text.style.color = "greenyellow";
    text.style.position = "absolute";
    text.style.fontSize = "30px";
    text.style.top = "10px";
    text.style.right = "20px";
    // id.setAttribute("disabled", true);
    return id.appendChild(text);
  });
  const onChange = (e) => {
    setAnswer(e.target.value);
  };
  const update = async (e) => {
    e.preventDefault();
    const answerTrim = answer.trim();
    const key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
    const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    const mode = CryptoJS.mode.CFB;
    const padding = CryptoJS.pad.AnsiX923;
    const encrypted = CryptoJS.AES.encrypt(answerTrim, key, {
      iv: iv,
      mode: mode,
      padding: padding,
    }).toString();
    const array = [
      "ZI2GWYKhZRXgXN5n5/D3/UeUze7Pr1MSc2xFRyBn8WA=",
      "ZI2GWYKhZRXzYYB2/PXm5gx+HZbrKZbLxbRiXLPP1msqDEtCSXkCpirRVV1NsEgV",
      "ZI2GWYKhZRXkZodi0f3hzBv25MFqHWkYPpWDG3y2rq7IWS/tnuC4jhxydvfc+oXB",
      "ZI2GWYKhZRXTXqI8zcfb7rAB9+ZjhHC67ft+RGdkgv0=",
      "ZI2GWYKhZRX1Vp594d3m9ikLLiOplmxMdyyPtI/cfws=",
      "ZI2GWYKhZRXdQbxCy93cx3fOJX0JCVI5NzYSR0L1qb8=",
      "ZI2GWYKhZRXca5o2/cv1/L7eO35e4LJTFwM3AdeyqfPqt6LFKl7KgS6MknbiPxrj",
      "ZI2GWYKhZRXja59k6/rm+koReokB9jVaCv1QMFXsC1Y=",
      "ZI2GWYKhZRXQTb1YytnR1vFtML1OjTQluYaij94xkf4=",
    ];
    const filter = array.filter((e) => {
      console.log(e);
      return e === encrypted;
    });
    document.getElementById("submitBtn").disabled = true;
    setTimeout(() => {
      document.getElementById("submitBtn").disabled = false;
    }, 5000);
    if (!filter.length) {
      return [showAlert("#E52D50:white:Incorrect"), setAnswer("")];
    }
    const data = await fetch("/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: get,
        answer: answerTrim,
        target: encrypted,
      }),
      credentials: "include",
    });
    const res = await data.json();
    showAlert(res);
    setAnswer("");
    await window.location.reload(true);
  };
  return (
    <div
      className="d-flex flex-column challenge-div"
      style={{ height: "92vh" }}
    >
      <button
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ position: "absolute", top: "13vh", right: "0px" }}
      >
        <i
          className="bi bi-question-circle-fill text-light"
          style={{ fontSize: "40px" }}
        ></i>
      </button>
      <form
        className="row g-3 d-flex flex-column align-items-center mt-3 mb-5"
        onSubmit={update}
      >
        <input
          type="text"
          className="form-control ip border-2 text-center"
          placeholder="Enter the flag"
          name="answer"
          value={answer}
          onChange={onChange}
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-light fw-bold submit-button"
          id="submitBtn"
        >
          Submit
        </button>
      </form>
      <div className="container-m">
        <button
          className="card btn"
          id="ZI2GWYKhZRXca5o2/cv1/L7eO35e4LJTFwM3AdeyqfPqt6LFKl7KgS6MknbiPxrj"
        >
          <div className="box">
            <div className="content">
              <h2>01</h2>
              <p>What Lies Within?</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenge.netlify.app/what-lies-within.html"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXTXqI8zcfb7rAB9+ZjhHC67ft+RGdkgv0="
        >
          <div className="box">
            <div className="content">
              <h2>02</h2>
              <p>Luminous Hunt</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenge.netlify.app/luminous-hunt"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXzYYB2/PXm5gx+HZbrKZbLxbRiXLPP1msqDEtCSXkCpirRVV1NsEgV"
        >
          <div className="box">
            <div className="content">
              <h2>03</h2>
              <p>A Tribute</p>
              <a
                type="button"
                className="btn"
                href="https://github.com/mak372/CTF"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXgXN5n5/D3/UeUze7Pr1MSc2xFRyBn8WA="
        >
          <div className="box">
            <div className="content">
              <h2>04</h2>
              <p>Attack on Bank</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenge.netlify.app/attack-on-bank.html"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRX1Vp594d3m9ikLLiOplmxMdyyPtI/cfws="
        >
          <div className="box">
            <div className="content">
              <h2>05</h2>
              <p>JS NERDS</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenge.herokuapp.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXkZodi0f3hzBv25MFqHWkYPpWDG3y2rq7IWS/tnuC4jhxydvfc+oXB"
        >
          <div className="box">
            <div className="content">
              <h2>06</h2>
              <p>Computer Engineering</p>
              <a
                type="button"
                className="btn "
                href="https://github.com/Snimblkar53/Ctf"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXdQbxCy93cx3fOJX0JCVI5NzYSR0L1qb8="
        >
          <div className="box">
            <div className="content">
              <h2>07</h2>
              <p>Decode It</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenges.netlify.app/decode_it"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXja59k6/rm+koReokB9jVaCv1QMFXsC1Y="
        >
          <div className="box">
            <div className="content">
              <h2>08</h2>
              <p>Crack the Sequence</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenges.netlify.app/crack_the_sequence"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
        <button
          className="card btn"
          id="ZI2GWYKhZRXQTb1YytnR1vFtML1OjTQluYaij94xkf4="
        >
          <div className="box">
            <div className="content">
              <h2>09</h2>
              <p>One Zero One</p>
              <a
                type="button"
                className="btn "
                href="https://csidmce-ctfchallenge.netlify.app/one-zero-one"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Play
              </a>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Challenges;

