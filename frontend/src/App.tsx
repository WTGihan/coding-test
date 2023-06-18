import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resturant from "./modules/resturant/pages/resturant/Resturant";
import Auth from "./modules/auth/pages/auth/Auth";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/resturant"
          element={<ProtectedRoute component={<Resturant />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
