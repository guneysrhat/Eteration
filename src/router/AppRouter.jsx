import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Dashboard />}>
          <Route index element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
