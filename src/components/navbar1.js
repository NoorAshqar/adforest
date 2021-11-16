import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
class Navbar1 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "Umair",
    };
  }
  outside;
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faHeart} /> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faFolderOpen} /> FAQS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <FontAwesomeIcon icon={faGlobe} /> Language
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Swedish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Russian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chinese
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link  mr-sm-2" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar1;
