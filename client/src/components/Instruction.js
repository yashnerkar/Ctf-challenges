import React from "react";
import "./home.css";

function Instruction() {
  return (
    <div
      className="modal p-0 m-0 fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog p-0 m-0">
        <div className="modal-content glass ">
          <div className="modal-header mx-3">
            <h3 className="modal-title mt-2" id="exampleModalLabel">
              Instructions
            </h3>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mt-3 ">
            <ol>
              <li>
                In this CTF you have to find 9 flags and submit them all as fast
                as possible
              </li>
              <li>
                Winners will be adjudged on the basis of maximum number of
                correct answers and thier time.
              </li>
              <li>
                The format of the flag should be :<br></br><strong>csi-ctf&#123;flag&#125;</strong>
              </li>
              <li>
                For each Question you have to find the flag and submit it in the
                challenges page
              </li>
              <li>
                In case of multiple Teams having given same number of correct
                answers, the Teams who take the least time to complete the quiz
                will be adjudged the winner.
              </li>
              <li>You can skip a tough question and come back to it later.</li>
              <li>
                The quiz timer will start as soon as you click the Play button.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
