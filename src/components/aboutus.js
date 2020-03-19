import React, { Component } from "react";

class aboutus extends Component {
  render() {
    return (
      <div>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="column">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us-section">
          <h1>Why Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
      </div>
    );
  }
}
export default aboutus;
