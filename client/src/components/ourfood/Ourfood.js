import React from "react";
import ourfood from "./../../assets/images/cuisine-cutlery.jpg";

const Ourfood = () => {
  return (
    <div>
      <section className="foodSection" id="ourfoods">
        <div className="row row-margin top30">
          <div className="col-lg-12 col-md-12 col-sm-12 no-padding ourfood">
            <div className="col-lg-6 col-sm-12 col-md-6 no-padding">
              <img id="ourfoodimg" src={ourfood} alt="ourfood" />
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="ourfoodtxt">
                <h1>OUR FOOD</h1>

                <hr className="headderline" />
                <div className="row">
                  <div className="col">
                    <ul className="feature">
                      <li>Affordable</li>
                      <p>Starting at just 5$ per meal</p>
                      <li>Large portions size</li>
                      <p>
                        Because we know you can&apos;t get enough of our tasty
                        food
                      </p>
                      <li>Convienient</li>
                      <p>Freshly prepared and delivered every evening</p>
                    </ul>
                  </div>
                </div>
                <button className="btn learn-more my-2 my-sm-0" type="submit">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourfood;
