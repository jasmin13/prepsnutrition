import React from "react";
//import styles from "./Menu.module.scss";
import Twitter from "../../assets/images/social/twitter.png";
import Social from "../../assets/images/social/social.png";

const Menu = () => {
  return (
    <div>
      <section className="menuSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="menu">
                <h1>Have no time</h1>
                <h1>
                  to prepare <span className="foodtext">food?</span>
                </h1>
                <p>
                  Choose one of our plans, enter delivery time <br />
                  and enjoy delicious food without leaving your home!
                </p>
                <button className="btn menu-button my-2 my-sm-0" type="submit">
                  Menu
                </button>
                <div className="social">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#twitter">
                        <img src={Twitter} alt="twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#social">
                        <img src={Social} alt="Social" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 top-pizza">
              <div className="pizzavideo">
                <button className="play" />
                <h1>Watch the Video</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
