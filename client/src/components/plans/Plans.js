import React from "react";
import offer from "./../../assets/images/carrots-cucumber.jpg";
import popular from "./../../assets/images/cuisine-delicious.jpg";

const Plans = () => {
  return (
    <div>
      <section className="planSection" id="plans">
        <div className="row top30">
          <div className="col no-padding">
            <div className="plan">
              <div className="row">
                <div className="col-lg-12 col-sm-12 plan-center">
                  <div className="col-lg-7 col-md-7 col-sm-6">
                    <div className="header">
                      <h1>PLANS</h1>
                      <hr className="hrplan" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="option-btn">
                      <button
                        className="btn more-option my-2 my-sm-0"
                        type="submit"
                      >
                        More Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-margin top60">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="offer">
                    <img id="offerimg" src={offer} alt="discount" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="popular">
                    <img id="popularimg" src={popular} alt="popular" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
