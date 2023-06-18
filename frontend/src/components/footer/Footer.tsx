import React from "react";
import { Typography } from "antd";

import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";

import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-container">
        <div className="footer-container-list">
          <div className="footer-box">
            <Typography className="footer-box-title">
              Discover Deliveroo
            </Typography>
            <ul className="footer-box-ul">
              <li className="footer-box-ul-item">Investors</li>
              <li className="footer-box-ul-item">About us</li>
              <li className="footer-box-ul-item">Takeaway</li>
              <li className="footer-box-ul-item">More</li>
              <li className="footer-box-ul-item">Newsroom</li>
              <li className="footer-box-ul-item">Engineering blog</li>
              <li className="footer-box-ul-item">Design blog</li>
              <li className="footer-box-ul-item">Gift Cards</li>
              <li className="footer-box-ul-item">Careers</li>
              <li className="footer-box-ul-item">Restaurant signup</li>
              <li className="footer-box-ul-item">Become a rider</li>
              <li className="footer-box-ul-item">Deliveroo Talent Directory</li>
            </ul>
          </div>
          <div className="footer-box">
            <Typography className="footer-box-title">Legal</Typography>
            <ul className="footer-box-ul">
              <li className="footer-box-ul-item">Terms and conditions</li>
              <li className="footer-box-ul-item">Privacy</li>
              <li className="footer-box-ul-item">Cookies</li>
              <li className="footer-box-ul-item">Modern Slavery Statement</li>
              <li className="footer-box-ul-item">Tax Strategy</li>
              <li className="footer-box-ul-item">Section 172 Statement</li>
            </ul>
          </div>
          <div className="footer-box">
            <Typography className="footer-box-title">Help</Typography>
            <ul className="footer-box-ul">
              <li className="footer-box-ul-item">Contact</li>
              <li className="footer-box-ul-item">FAQs</li>
              <li className="footer-box-ul-item">Cuisines</li>
              <li className="footer-box-ul-item">Brands</li>
            </ul>
          </div>
          <div className="footer-box">
            <Typography className="footer-box-title">
              Take Deliveroo with you
            </Typography>
            <ul className="footer-box-ul">
              <li className="footer-box-ul-item-img-one">
                <div className="footer-box-ul-item-img-app-store" />
              </li>
              <li className="footer-box-ul-item-img-two">
                <div className="footer-box-ul-item-img-play-store" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sub-container">
          <div className="footer-social">
            <FacebookIcon className="footer-social-link" />
            <TwitterIcon className="footer-social-link" />
            <InstagramIcon className="footer-social-link" />
          </div>
          <div className="footer-rights">
            <Typography>© 2023 Deliveroo</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
