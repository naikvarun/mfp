import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";

const generateClassName = createGenerateClassName({productionPrefix: 'co'})

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header/>
                <MarketingApp/>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
