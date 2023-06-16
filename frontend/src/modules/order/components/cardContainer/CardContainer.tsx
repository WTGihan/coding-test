import React from "react";
import { Image, Card } from "antd";

import "./cardContainer.css";

const CardContainer = () => {
  return (
    <Card size="small" title="" className="card-container">
      <div className="dish-card-container">
        <div className="dish-card-description">
          <p className="dish-card-description-title">Salad Bundle</p>
          <p className="dish-card-description-product-description">
            A perfect healthy & delicious meal.
          </p>
          <p className="dish-card-description-product-price">£14.99</p>
        </div>
        <div className="dish-card-img">
          <Image src="https://rs-menus-api.roocdn.com/images/81b01e75-5c1f-4c4e-ad64-4049d71752e4/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop" />
        </div>
      </div>
    </Card>
  );
};

export default CardContainer;
