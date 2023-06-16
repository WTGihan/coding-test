import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "./modules/order/pages/OrderPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
