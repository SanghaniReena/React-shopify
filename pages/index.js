import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Configuration from '../pages/Configuration';
import {Provider} from 'react-redux'
import store from "./store"
const Index = () => {
    return (
       <Provider store={store}><Configuration/></Provider>
    )}
export default Index;
