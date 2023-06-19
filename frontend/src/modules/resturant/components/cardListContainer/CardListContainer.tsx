import React from "react";
import { Button, Typography } from "antd";
import CardContainer from "../cardContainer/CardContainer";

import { ReactComponent as BucketIcon } from "../../../../assets/bucket.svg";
import "./cardListContainer.css";

interface CardListContainerProps {
  menuWithDishes: any[];
}

const CardListContainer: React.FC<CardListContainerProps> = ({
  menuWithDishes,
}) => {
  return (
    <div className="body-card-container">
      <div className="card-list-container">
        {menuWithDishes.map((menuWithDish: any) => (
          <div key={`card_${menuWithDish.id}`} id={menuWithDish.id}>
            {menuWithDish.dishes.length > 0 && (
              <React.Fragment key={`card_conainer${menuWithDish.id}`}>
                <Typography className="card-list-container-title">
                  {menuWithDish.name}
                </Typography>
                <div className="card-list-container-data">
                  {menuWithDish.dishes.map((dish: any) => (
                    <React.Fragment key={`card_conainer_menu_${dish.id}`}>
                      <CardContainer
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                        imageUrl={dish.image_url}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
      <div className="card-list-order">
        <div className="card-list-bucket">
          <div className="card-list-order-empty-bar">
            <div className="card-list-order-icon-content">
              <BucketIcon className="card-list-order-icon" />
            </div>
            <div className="card-list-order-empty-text">
              <Typography>Your basket is empty</Typography>
            </div>
          </div>

          <div className="card-list-order-button">
            <Button
              type="primary"
              shape="round"
              size={"middle"}
              className="checkout-button"
            >
              Go To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListContainer;
