import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "antd/dist/antd.css";
import "./App.less";

import { GlobalStyle } from "./globaStyle";
import { HeaderContainer, BodyContainer } from "./style"

import Header from "./components/Header";
import ContactUs from "./components/ContactUs";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <BodyContainer>
                <Routes />
                <ContactUs/>
            </BodyContainer>
        </BrowserRouter>
    );
}

export default App;
