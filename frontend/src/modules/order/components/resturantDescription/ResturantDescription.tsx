import React from "react";
import { Button, Typography } from "antd";
import { ReactComponent as BackIcon } from "../../../../assets/back.svg";
import { ReactComponent as RatingIcon } from "../../../../assets/rating.svg";
import { ReactComponent as RightArrowIcon } from "../../../../assets/rightArrow.svg";
import { ReactComponent as WarningIcon } from "../../../../assets/warning.svg";
import { ReactComponent as DeliveryManIcon } from "../../../../assets/deliveryMan.svg";
import { ReactComponent as GroupIcon } from "../../../../assets/group.svg";
import "./resturantDescription.css";

const ResturantDescription: React.FC = () => {
  return (
    <div className="resturant-description">
      <div className="back-navigation">
        <BackIcon className="back-navigation-icon" />
        <Typography className="back-navigation-title">Back</Typography>
      </div>
      <div className="resturant-body">
        <div className="resturant-main-container">
          <div className="resturant-container-img" />
          <div className="resturant-details-container">
            <h1 className="main-title">Tossed - St Martin's Lane</h1>
            <Typography className="sub-title-one">
              <span>Chicken</span>
              <span className="sub-title-dot-icon">·</span>
              <span>Salads</span>
              <span className="sub-title-dot-icon">·</span>
              <span>Healthy</span>
            </Typography>
            <Typography className="sub-title-two">
              <span>0.20 miles away</span>
              <span className="sub-title-dot-icon">·</span>
              <span>Opens at 11:00 on Monday</span>
              <span className="sub-title-dot-icon">·</span>
              <span>£1.49 delivery</span>
              <span className="sub-title-dot-icon">·</span>
              <span>£7.00 minimum</span>
            </Typography>
            <div className="info-tab">
              <div className="info-tab-icon-one">
                <WarningIcon />
              </div>
              <div className="info-tab-title">
                <Typography className="info-tab-title-one">Info</Typography>
                <Typography className="info-tab-title-two">
                  Map, allergens and hygiene rating
                </Typography>
              </div>
              <div className="info-tab-icon-two">
                <RightArrowIcon />
              </div>
            </div>
            <div className="rating-tab">
              <div className="rating-tab-icon-one">
                <RatingIcon />
              </div>
              <div className="rating-tab-title">
                <Typography className="rating-tab-title-one">
                  4.7 Excellent
                </Typography>
                <Typography className="rating-tab-title-two">
                  See all 500 reviews
                </Typography>
              </div>
              <div className="rating-tab-icon-two">
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="resturant-sub-container">
          <div className="resturant-sub-container-title">
            <DeliveryManIcon className="resturant-sub-container-title-icon" />
            <Typography className="resturant-sub-container-title-one">
              Deliver in 30 - 45 min
            </Typography>
            <Typography className="resturant-sub-container-title-two">
              Change
            </Typography>
          </div>
          <div className="resturant-sub-container-button">
            <Button
              type="primary"
              shape="round"
              icon={
                <GroupIcon className="resturant-sub-container-button-icon" />
              }
              size={"middle"}
              className="group-button"
            >
              Start group order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDescription;
