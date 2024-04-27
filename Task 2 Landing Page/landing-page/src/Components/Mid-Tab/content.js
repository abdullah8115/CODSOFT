import React from "react";
import "./content.css";
import manworking from "../../Components/Images/manworking.png";

const Midcontent = () => {
  return (
    <div className="mid-tab" id="info">
      <div className="mid-content">
        <h1>Our Info</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          non leo turpis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Praesent fermentum malesuada
          enim, vitae bibendum mauris imperdiet laoreet. Vestibulum eget lacinia
          orci. Quisque et turpis blandit, dignissim ante in, tristique magna.
          Vivamus luctus fermentum nisi non ultrices. Nunc tempor ante eget arcu
          porta, id volutpat sem volutpat. Praesent sodales eleifend odio sit
          amet mollis.
        </p>
        <button>Explore More</button>
      </div>
      <div className="image-container">
        <img src={manworking} alt="manworking" className="manworking-image" />
      </div>
    </div>
  );
};

export default Midcontent;
