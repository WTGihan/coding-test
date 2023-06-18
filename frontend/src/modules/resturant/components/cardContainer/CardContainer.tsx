import React from "react";
import { Image, Card } from "antd";

import "./cardContainer.css";

interface CardContainerProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <Card size="small" title="" className="card-container">
      <div className="dish-card-container">
        <div className="dish-card-description">
          <p className="dish-card-description-title">{name}</p>
          <p className="dish-card-description-product-description">
            {description}
          </p>
          <p className="dish-card-description-product-price">{`£${price}`}</p>
        </div>
        <div className="dish-card-img">
          <Image src={imageUrl} />
        </div>
      </div>
    </Card>
  );
};

export default CardContainer;
