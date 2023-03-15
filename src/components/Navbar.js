import React, { Component } from "react";
import "../index.css";
// dba7a6aa78924c2d9219fda254019d1c
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#FFC107" }}
        >
          <a className="navbar-brand" href="/">
            <h2
              style={{
                fontFamily: "Audiowide",
                fontWeight: "500",
              }}
            >
              NewsDaily
            </h2>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li
                className="nav-item active"
                style={{
                  fontFamily: "Audiowide",
                  fontWeight: "500",
                }}
              >
                <a className="nav-link" href="/Business">
                  Business <span className="sr-only"></span>
                </a>
              </li>
              <li
                className="nav-item active"
                style={{
                  fontFamily: "Audiowide",
                  fontWeight: "500",
                }}
              >
                <a className="nav-link" href="/Technology">
                  Technology <span className="sr-only"></span>
                </a>
              </li>
              <li
                className="nav-item active"
                style={{
                  fontFamily: "Audiowide",
                  fontWeight: "500",
                }}
              >
                <a className="nav-link" href="/Entertainment">
                  Entertainment <span className="sr-only"></span>
                </a>
              </li>
              <li
                className="nav-item active"
                style={{
                  fontFamily: "Audiowide",
                  fontWeight: "500",
                }}
              >
                <a className="nav-link" href="/Health">
                  Health <span className="sr-only"></span>
                </a>
              </li>
              <li
                className="nav-item active"
                style={{
                  fontFamily: "Audiowide",
                  fontWeight: "500",
                }}
              >
                <a className="nav-link" href="/Science">
                  Science <span className="sr-only"></span>
                </a>
              </li>
              <li
                className="nav-item active"
                style={{
                  fontFamily: "Audiowide",
                  fontWeight: "500",
                }}
              >
                <a className="nav-link" href="/Sports">
                  Sports <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

