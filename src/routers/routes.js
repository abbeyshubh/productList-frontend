import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "../Components/Dashboard/Dashboard";
import ProductDetails from "../Components/productDetails/productDetails";
import Cart from "../Components/Cart/Cart";

const { Content } = Layout;
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/productDetails" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
