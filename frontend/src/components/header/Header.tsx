import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

import { ReactComponent as SearchOneIcon } from "../../assets/searchOne.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as SignUpLoginIcon } from "../../assets/signUpLogin.svg";

import "./header.css";
import TokenService from "../../services/Token";

interface HeaderProps {
  searchIsAvailable?: boolean;
}

const Header: React.FC<HeaderProps> = ({ searchIsAvailable }) => {
  const navigate = useNavigate();
  const [userLoggingStatus, setUserLoggingStatus] = useState(false);

  useEffect(() => {
    const userToken = TokenService.getUser();

    if (userToken) {
      setUserLoggingStatus(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="header-container" id="header">
      <div
        className={`header-item-one ${
          !searchIsAvailable && "header-item-one-no-search"
        }`}
      >
        <div className="app-logo">
          <Link href="#" />
        </div>
      </div>
      <div className="header-item-two">
        <Input
          placeholder="Search Tossed - St Martin's Lane"
          prefix={<SearchOneIcon className={"header-item-two-icon"} />}
          className={`app-search-bar ${
            !searchIsAvailable && "header-item-two-no-search"
          }`}
        />
      </div>
      <div
        className={`header-item-three ${
          !searchIsAvailable && "header-item-three-no-search"
        }`}
      >
        <div className="header-item-three-container">
          {!userLoggingStatus && (
            <Button
              type="primary"
              shape="round"
              icon={<SignUpLoginIcon className="header-item-three-icon" />}
              size={"middle"}
              className="header-signup-button header-menu-button"
              onClick={() => navigate("/")}
            >
              Sign up or log in
            </Button>
          )}
          <Button
            type="primary"
            shape="round"
            icon={<MenuIcon className="header-item-three-icon" />}
            size={"middle"}
            className="header-menu-button"
          >
            Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
