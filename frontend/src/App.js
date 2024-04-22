import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// my component pages
import LandingPage from "./components/LandingPage/index";
import ProfilePage from "./components/Profile";
import OrderPage from "./components/Order";
import AdminPage from "./components/AdminView";
import CheckoutPage from "./components/Checkout";
import Menu from "./components/Menu";
import { getOrderByIdThunk } from "./store/order";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    if (user && user.id) {
      dispatch(getOrderByIdThunk(user.id));
    }
  }, [user, dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/order" component={OrderPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/*" component={LandingPage} />
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
