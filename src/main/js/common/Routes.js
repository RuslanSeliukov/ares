import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddProduct from "../components/AddProduct";
import Cart from "../components/Cart";
import LogIn from "../components/LogIn"
import ProtectedRoute from "./ProtectedRoute"
import Cards from "../components/Cards";
import BookInfo from "../components/BookInfo";
import Order from "../components/Order";

export default function Routes() {
    return (
        <Switch>
            <ProtectedRoute exact path="/admin/addProduct" component={AddProduct} />
            <Route path="/BookInfo" component={BookInfo}/>
            <Route exact path="/order" component={Order}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/" component={Cards}/>
        </Switch>
    )
};