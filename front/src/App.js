import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import MyProducts from './components/MyProducts';
import MyProfile from './components/MyProfile';
import Users from './components/Users';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar/>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/products" component={Products} />
            <Route path="/users" component={Users} />
            <Route path="/my-products/:id" component={MyProducts} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/my-profile/:id" component={MyProfile} />
            <Route path="/product/:id" component={ViewProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
