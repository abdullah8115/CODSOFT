import React from "react";
import "./cards.css";

const CardSection = () => {
  return (
    <>
      <div className="card-section" id="products">
        <h1 className="title">About Our Products</h1>
        <div className="cards">
          <div className="card" style={{ backgroundColor: "#007bff" }}>
            <div className="icon">🎮</div>
            <h2>Template Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat velit at magna elementum posuere.</p>
            <button>Read More</button>
          </div>
          <div className="card" style={{ backgroundColor: "#ffc107" }}>
            <div className="icon">🛠️</div>
            <h2>Template Product 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat velit at magna elementum posuere.</p>
            <button>Read More</button>
          </div>
          <div className="card" style={{ backgroundColor: "#ff85c0" }}>
            <div className="icon">🎯</div>
            <h2>Template Product 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat velit at magna elementum posuere.</p>
            <button>Read More</button>
          </div>
          <div className="card" style={{ backgroundColor: "#28a745" }}>
            <div className="icon">💡</div>
            <h2>Template Product 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat velit at magna elementum posuere.</p>
            <button>Read More</button>
          </div>
          <div className="card" style={{ backgroundColor: "#17a2b8" }}>
            <div className="icon">🌐</div>
            <h2>Template Product 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat velit at magna elementum posuere.</p>
            <button>Read More</button>
          </div>
          <div className="card" style={{ backgroundColor: "#fd7e14" }}>
            <div className="icon">🚀</div>
            <h2>Template Product 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat velit at magna elementum posuere.</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
