import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "./navbar.css"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img
            src="https://swimmpledemo.netlify.app/assets/logomain.png"
            alt="Swimmple"
            className="navbar-logo"
          />
        </Link>
      </h1>

      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="#about" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-links">
            Services
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="navbar-links">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/sessions" className="navbar-links">
            Sessions
          </Link>
        </li>
        <li>
          <Link to="/works" className="navbar-links">
            How it's works
          </Link>
        </li>
        <li>
          <Link to="/team" className="navbar-links">
            Our team
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-links">
            Contact Us
          </Link>
        </li>
        <button
          className="navbar-btn"
          type="button"
          disabled={isButtonDisabled}
          onClick={handleChatBtnClick}
        >
          <FontAwesomeIcon icon={faCommentDots} /> Live Chat
        </button>
      </ul>

      {/* for mobile devices */}

      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link to="/" onClick={openNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={openNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={openNav}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={openNav}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/sessions" onClick={openNav}>
              Sessions
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={openNav}>
              How it's works
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={openNav}>
              Our team
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={openNav}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar