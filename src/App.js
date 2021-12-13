import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "antd/dist/antd.css";
import "./App.less";

import { GlobalStyle } from "./globalStyle";
import { BodyContainer } from "./style"

import Header from "./components/GlobalComponents/Header";
import ContactUs from "./components/GlobalComponents/ContactUs";
import Footer from "./components/GlobalComponents/Footer";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header />
            <BodyContainer>
                <Routes />
                <ContactUs/>
            </BodyContainer>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
