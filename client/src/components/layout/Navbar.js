import React from "react";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="mainMenu">
        <div className="container">
          <div className="row topImg align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                  <a className="navbar-brand" href="#home">
                    <img src={Logo} alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls=".navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>

                  <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link" href="#about">
                          ABOUT <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#ourfoods">
                          OUR FOOD
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#plans">
                          PLANS
                        </a>
                      </li>
                    </ul>
                    <div className="contactBtn">
                      <a href="#contactus">
                        <button
                          className="btn contact-us-btn my-2 my-sm-0"
                          type="submit"
                        >
                          CONTACT US
                        </button>
                      </a>
                    </div>
                    <div className="callback">
                      <a href="tel:+1-847-555-5555">
                        <button
                          className="btn callback-btn my-2 my-sm-0"
                          type="submit"
                        >
                          CALL BACK
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
