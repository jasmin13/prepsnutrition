import React from "react";
import Menu from "./../menu/Menu";
import Ourfood from "./../ourfood/Ourfood";
import Plans from "./../plans/Plans";
import Contactus from "./../contactus/Contactus";
import Footer from "./../layout/Footer"; 

const Home = () => {
  return (
    <div>
      <div className="container-fluid no-padding">
        <Menu />
        <Ourfood />
      </div>
      <Plans />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
