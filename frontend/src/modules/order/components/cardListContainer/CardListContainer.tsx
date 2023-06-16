import React from "react";
import { Button, Typography } from "antd";
import CardContainer from "../cardContainer/CardContainer";

import { ReactComponent as BucketIcon } from "../../../../assets/bucket.svg";
import "./cardListContainer.css";

const CardListContainer: React.FC = () => {
  return (
    <div className="body-card-container">
      <div className="card-list-container">
        <div>
          <Typography className="card-list-container-title">Bundles</Typography>
          <div className="card-list-container-data">
            <CardContainer />
            <CardContainer />
            <CardContainer />
          </div>
        </div>
        <div>
          <Typography className="card-list-container-title">Bundles</Typography>
          <div className="card-list-container-data">
            <CardContainer />
            <CardContainer />
            <CardContainer />
          </div>
        </div>
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
