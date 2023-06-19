import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useNavigate } from "react-router-dom";

import Header from "../../../../components/header/Header";
import ResturantDescription from "../../components/resturantDescription/ResturantDescription";
import MenuItems from "../../components/menuItems/MenuItems";
import CardListContainer from "../../components/cardListContainer/CardListContainer";
import Footer from "../../../../components/footer/Footer";

import {
  getAllMenu,
  getAllMenuWithDishes,
  getAllMenuFailed,
  getAllMenuWithDishesFailed,
} from "../../slices/menu";

import "./resturant.css";
import TokenService from "../../../../services/Token";
import { TOKEN_EXPIRED } from "../../../../constants/auth";

const Resturant: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resturant = useAppSelector((state: any) => state.resturant);
  const { menu, menuWithDishes, actionType, error } = resturant.menu;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      actionType === getAllMenuFailed.type ||
      actionType === getAllMenuWithDishesFailed.type
    ) {
      const errMsg = error.data.message;
      if (errMsg && errMsg === TOKEN_EXPIRED) {
        TokenService.removeUser();
        navigate("/");
      }
    }
    // eslint-disable-next-line
  }, [actionType, dispatch]);

  const fetchData = () => {
    dispatch(getAllMenu()).catch((error: any) => {
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
