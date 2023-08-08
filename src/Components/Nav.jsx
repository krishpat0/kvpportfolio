import React from "react";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// import { GiHamburgerMenu } from "react-icons/gi";

// import "./navbar.css";

const Nav = () => {
  // state
  // const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* first part */}
        {/* <div className="logo">
          <p>
            <span>K</span>rishna
            <span>P</span>atil
          </p>
        </div> */}

        {/* second part */}
        <div className="menu-link">
          <ul>
            {/* <li>
              <a href="#">Home</a>
            </li> */}
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* third social icon
         */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a href="#" className="facebook">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <FaInstagram></FaInstagram>
              </a>
            </li>
            <li>
              <a href="#" className="youtube">
                <FaYoutube></FaYoutube>
              </a>
            </li>
          </ul> */}

          {/* hamburger menu start
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!setShowMediaIcons)}>
              <GiHamburgerMenu> </GiHamburgerMenu>
            </a>
          </div> */}
        </div>
      </nav>

      {/* Hero section */}
      {/* <div className="hero-section">
        <p> Welcome to</p>
        <h1>Krishna Patil</h1>
      </div> */}
    </>
  );
};

export default Nav;
