import React from "react";
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Twitter from "../../assets/images/footer/twitter.png";
import GooglePlus from "../../assets/images/footer/google-plus.png";
import Instagram from "../../assets/images/footer/instagram.png";

const Footer = () => {
  return (
    <div>
      <footer className="footerArea">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="footer-logo">
                <a className="navbar-brand" href="#home">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="address">
                <h5>Preps Nutrition</h5>
                <p>Lorem ipsum, #239, Tricity Plaza</p>
                <p>Peermuchalla. La Redo, Texas</p>
                <p>Telephone: +91 99999-88888</p>
                <p>E-mail: mail@Babaapp.com</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="footer-menu">
                <h5>Menu</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#ourfoods">Our Food</a>
                  </li>
                  <li>
                    <a href="#plans">Plans</a>
                  </li>
                  <li>
                    <a href="#contactus">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="social-network">
                <h5>Follow Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#facebook">
                      <img src={Facebook} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <img src={Twitter} alt="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#googlePlus">
                      <img src={GooglePlus} alt="GooglePlus" />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="allRights">&#169;All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
