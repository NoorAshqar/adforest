import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "Umair",
    };
  }
  
  render() {
    return (
      <div className="nav-up">
        <div className="container">
          <div className="row">
            <div className="nav-up-left col-7">
              <ul>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faHeart} /> About</a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faFolderOpen} /> FAQS</a>
                </li>
                <li className="dropdown">
                  <a href="#" onClick={()=>{let x = document.getElementsByClassName('drop1')[0];x.style.display==='block' ?x.style.display='none' :x.style.display='block'}}><FontAwesomeIcon icon={faGlobe} /> Language</a>
                  <ul className="dropdownMenu drop1">
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">Swedish</a>
                    </li>
                    <li>
                      <a href="#">Arabic</a>
                    </li>
                    <li>
                      <a href="#">Russian</a>
                    </li>
                    <li>
                      <a href="#">chinese</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="nav-up-right col-3">
              <ul>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faSignInAlt} /> Login</a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faUnlock} /> Register</a>
                </li>
                <li className="dropdown">
                  <a href="#" onClick={()=>{let x = document.getElementsByClassName('drop2')[0];x.style.display==='block' ?x.style.display='none' :x.style.display='block'}}><FontAwesomeIcon icon={faUser} /> {this.state.user}<span className="arrow-down" ></span></a>
                  <ul className="dropdownMenu drop2">
                    <li>
                      <a href="#">user profile</a>
                    </li>
                    <li>
                      <a href="#">user profile 2</a>
                    </li>
                    <li>
                      <a href="#">archives</a>
                    </li>
                    <li>
                      <a href="#">active ads</a>
                    </li>
                    <li>
                      <a href="#">pending ads</a>
                    </li>
                    <li>
                      <a href="#">favourite ads</a>
                    </li>
                    <li>
                      <a href="#">message panel</a>
                    </li>
                    <li>
                      <a href="#">account deactivation</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <div className="cog"><FontAwesomeIcon icon={faCog} /></div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
