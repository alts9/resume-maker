import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Modal.css";
function Modal() {
  return (
    <Popup trigger={<button className="button"> Help</button>} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Help </div>
          <div className="modal-item">
            <div className="header">About</div>{" "}
            <div className="content">
              This website offers a quick and easy way to create a
              professional-looking resume.
            </div>
          </div>
          <div className="modal-item">
            <div className="header">How to use</div>{" "}
            <div className="content">
              Simply enter your information and preview any changes in
              real-time. Once you're done, click "Download As PDF" to download
              your resume.
            </div>
          </div>{" "}
          <div className="modal-item">
            <div className="header">How to save</div>{" "}
            <div className="content">
              Your information is automatically saved on your device and will be
              available when you revisit the site(unless you use incognito
              mode).
            </div>
          </div>{" "}
          <div className="modal-item">
            <div className="header">How it structured</div>{" "}
            <div className="content">
              This website is designed to be as flexible as possible, allowing
              you the freedom to add or remove most items according to your
              preferences. While the form itself is fairly self-explanatory,
              here are some additional details that may be helpful:
            </div>
            <div className="content">
              <ul>
                <li>
                  {" "}
                  The left column designed to provide a brief overview of your
                  personal information:{" "}
                  <ul>
                    <li>
                      Info element: For education/awards/certifications/event
                      participation.{" "}
                    </li>
                    <li>
                      {" "}
                      List element: For software expertise, soft skills,
                      languages spoken, hobbies, and interests. You can even
                      choose to display your proficiency level through either
                      text or a skill bar.
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  The left column designed to provide more detailed information:
                  <ul>
                    <li>
                      {" "}
                      Experience element: For previous
                      jobs/internships/projects. You are free to describe them
                      in paragraph, list or combination of both{" "}
                    </li>
                    <li>Reference element: For reference </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="content"> </div>
          </div>{" "}
          <div className="modal-item">
            <div className="header">About privacy</div>{" "}
            <div className="content">
              All of the processes for creating and saving your information are
              done on your device, and no data is transmitted to the server.
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Modal;
