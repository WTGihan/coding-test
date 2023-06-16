import React from "react";
import { Menu } from "antd";

import "./menuItems.css";

const MenuItems: React.FC = () => {
  return (
    <div className="menu-item">
      <Menu mode={"horizontal"} theme={"light"} selectedKeys={["bundles"]}>
        <Menu.Item key={"bundles"}>Bundles</Menu.Item>
        <Menu.Item key={"salads"}>Salads</Menu.Item>
        <Menu.Item key={"hot_power_bowls"}>Hot Power Bowls</Menu.Item>
        <Menu.Item key={"vegan_menu"}>Vegan Menu</Menu.Item>
        <Menu.Item key={"rainbow_wraps"}>Rainbow Wraps</Menu.Item>
        <Menu.Item key={"snacks_and_sides"}>Snacks & Sides</Menu.Item>
        <Menu.Item key={"smoothies_shakes_and_juice"}>
          Smoothies, shakes & juice
        </Menu.Item>
        <Menu.Item key={"cold_drinks"}>Cold Drinks</Menu.Item>
        <Menu.Item key={"yoghur_and_fruit"}>Yoghurt & fruit</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuItems;
