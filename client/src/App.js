import "./App.css";
//redux
import { Provider } from "react-redux";
import store from "./store";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="bg-gray-100 h-screen max-h-screen ">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
