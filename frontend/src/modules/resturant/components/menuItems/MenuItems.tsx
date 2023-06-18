import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import Link from "antd/es/typography/Link";

import "./menuItems.css";

interface MenuItemProps {
  menu: any[];
}

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const MenuItems: React.FC<MenuItemProps> = ({ menu }) => {
  const [activeMenuId, setActiveMenuId] = useState("0");
  const offset = 150;
  useEffect(() => {
    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
    // eslint-disable-next-line
  }, [menu, offset]);

  const listener = () => {
    const scroll = window.scrollY;
    const ids: any = convertIdArray(menu);

    if (scroll > 280) {
      const position = ids
        .map((id: any) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top: any = clamp(rect.top + scroll - offset);
          const bottom: any = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }: any) => isBetween(scroll, top, bottom));
      position?.id && setActiveMenuId(position?.id);
    } else {
      setActiveMenuId(ids[0]);
    }
  };

  const convertIdArray = (data: any) => {
    let resultArray: any = [];
    data.map((data: any) => resultArray.push(data.id));
    return resultArray;
  };

  const handleClick = (event: any, itemId: any) => {
    event.preventDefault();
    const targetElement = document.getElementById(itemId);
    if (targetElement) {
      const headerHeight: any =
        document?.getElementById("header")?.offsetHeight;
      const menuItemHeight: any =
        document?.getElementById("menuItem")?.offsetHeight;
      const scrollPosition =
        targetElement.offsetTop - headerHeight - menuItemHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="menu-item" id="menuItem">
      <Menu
        mode={"horizontal"}
        theme={"light"}
        selectedKeys={[activeMenuId?.toString()]}
      >
        {menu.map((menuItem: any) => (
          <Menu.Item key={menuItem.id}>
            <Link
              href={`#${menuItem.id}`}
              className="menu-item-link"
              onClick={(event: any) => handleClick(event, menuItem.id)}
            >
              {menuItem.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default MenuItems;
