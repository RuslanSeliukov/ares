import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddProduct from "../admin/addProduct";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/admin/addProduct" component={AddProduct}/>
        </Switch>
    )
};