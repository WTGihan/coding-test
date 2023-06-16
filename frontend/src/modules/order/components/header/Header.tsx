import React from "react";
import { Input, Button } from "antd";
import Link from "antd/es/typography/Link";

import { ReactComponent as SearchOneIcon } from "../../../../assets/searchOne.svg";
import { ReactComponent as MenuIcon } from "../../../../assets/menu.svg";

import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-item-one">
        <div className="app-logo">
          <Link href="#" />
        </div>
      </div>
      <div className="header-item-two">
        <Input
          placeholder="Search Tossed - St Martin's Lane"
          prefix={<SearchOneIcon className="header-item-two-icon" />}
          className={"app-search-bar"}
        />
      </div>
      <div className="header-item-three">
        <div>
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
