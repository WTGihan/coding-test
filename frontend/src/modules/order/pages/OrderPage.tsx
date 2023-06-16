import React from "react";

import Header from "../components/header/Header";
import ResturantDescription from "../components/resturantDescription/ResturantDescription";
import MenuItems from "../components/menuItems/MenuItems";
import CardListContainer from "../components/cardListContainer/CardListContainer";
import Footer from "../components/footer/Footer";

const OrderPage: React.FC = () => {
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
