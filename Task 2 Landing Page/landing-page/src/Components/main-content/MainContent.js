import React from 'react';
import bodyImage from '../Images/body-image.jpg';

const MainContent = () => {
  return (
    <div className="main-content" id="home">
      <img src={bodyImage} className="img1-b1" alt="Body" />
      <div className="text-content">
        <h1>Explore Our Website</h1>
        <p>
          eu mi bibendum neque egestas congue quisque egestas diam in arcu
          cursus euismod quis viverra nibh cras pulvinar mattis nunc sed
          blandit libero volutpat sed cras ornare arcu dui vivamus arcu
          felis bibendum ut tristique et egestas quis ipsum suspendisse
          ultrices gravida dictum fusce ut placerat orci nulla pellentesque
          dignissim
        </p>
        <button>GET STARTED</button>
      </div>
    </div>
  );
};

export default MainContent;