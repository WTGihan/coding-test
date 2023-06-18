import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";

import Header from "../../../../components/header/Header";
import ResturantDescription from "../../components/resturantDescription/ResturantDescription";
import MenuItems from "../../components/menuItems/MenuItems";
import CardListContainer from "../../components/cardListContainer/CardListContainer";
import Footer from "../../../../components/footer/Footer";

import { getAllMenu, getAllMenuWithDishes } from "../../slices/menu";

import "./resturant.css";

const Resturant: React.FC = () => {
  const dispatch = useAppDispatch();
  const resturant = useAppSelector((state: any) => state.resturant);
  const { menu, menuWithDishes } = resturant.menu;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    dispatch(getAllMenu()).catch((error: Error) => {
      console.error("An error occurred while fetching menu data:", error);
    });
    dispatch(getAllMenuWithDishes()).catch((error: Error) => {
      console.error(
        "An error occurred while fetching menu with dishes data:",
        error
      );
    });
  };

  return (
    <div className="container">
      <Header searchIsAvailable />
      <ResturantDescription />
      <MenuItems menu={menu} />
      <CardListContainer menuWithDishes={menuWithDishes} />
      <Footer />
    </div>
  );
};

export default Resturant;
