import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Product from "./components/ShopPage/Product";
import history from "./history";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CompatibleDevices from "./pages/CompatibleDevices";
import ConfirmOtp from "./pages/ConfirmOtp";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Otp from "./pages/Otp";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import ProfileInfo from "./pages/ProfileInfo";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RefundPolicy from "./pages/RefundPolicy";
import Support from "./pages/Support";
import TermsConditions from "./pages/Terms&Conditions";
import WelcomePage from "./pages/WelcomePage";
import ForgotPasswordContact from "./pages/ForgotPassword-Contact";
import ForgotPasswordChange from "./pages/ForgotPassword-ChangePass";
import ConstructionPage from "./pages/ConstructionPage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          {/* <Layout>
            <Switch>
               <Route
                path="/Product/:id/:Category"
                render={(propsRoute) => <Product {...propsRoute} />}
              />
              <Route exact path="/Shop" render={() => <Shop />} />
              <Route exact path="/Support" render={() => <Support />} />
              <Route
                exact
                path="/Support/CompatibleDevices"
                render={() => <CompatibleDevices />}
              />
              <Route
                exact
                path="/Support/RefundPolicy"
                render={() => <RefundPolicy />}
              />
              <Route exact path="/Checkout" render={() => <Checkout />} />
              <Route exact path="/Cart" render={() => <Cart />} />
              <Route exact path="/SignIn" render={() => <SignIn />} />
              <Route exact path="/SignUp" render={() => <SignUp />} />
              <Route exact path="/SignIn/OTP" render={() => <Otp />} />
              <Route
                exact
                path="/ForgotPassword/Contact"
                render={() => <ForgotPasswordContact />}
              />
              <Route
                exact
                path="/ForgotPassword/ChangePassword"
                render={() => <ForgotPasswordChange />}
              />
              <Route
                exact
                path="/Privacy-Policy"
                render={() => <PrivacyPolicies />}
              />
              <Route
                exact
                path="/Terms&Conditions"
                render={() => <TermsConditions />}
              />
              <Route exact path="/Welcome" render={() => <WelcomePage />} />
              <Route
                exact
                path="/Profile/EditInfo"
                render={() => <ProfileInfo />}
              />
              <Route
                exact
                path="/Profile/Dashboard"
                render={() => <Dashboard />}
              />
              <Route
                exact
                path="/SignIn/ConfirmOTP"
                render={() => <ConfirmOtp />}
              />
              <Route exact path="/" render={() => <Home />} /> 
            </Switch>
          </Layout> */}
          <Route exact path="/" render={() => <ConstructionPage />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
