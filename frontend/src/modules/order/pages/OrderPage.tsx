import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

import Header from "../components/header/Header";
import ResturantDescription from "../components/resturantDescription/ResturantDescription";
import MenuItems from "../components/menuItems/MenuItems";
import CardListContainer from "../components/cardListContainer/CardListContainer";
import Footer from "../components/footer/Footer";
import { getAllOrdersData } from "../slices/orderSlice";

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state: any) => state.order);

  useEffect(() => {
    dispatch(getAllOrdersData());
  }, []);

  console.log("Order data", order);

  return (
    <div className="container">
      <Header />
      <ResturantDescription />
      <MenuItems />
      <CardListContainer />
      <Footer />
    </div>
  );
};

export default OrderPage;
