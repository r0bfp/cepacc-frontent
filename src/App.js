import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "antd/dist/antd.css";

import { GlobalStyle } from "./globaStyle";
import { HeaderContainer, BodyContainer } from "./style"

import Header from "./components/Header";
import FaleConosco from "./components/FaleConosco";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <BodyContainer>
                <Routes />
                <FaleConosco/>
            </BodyContainer>
        </BrowserRouter>
    );
}

export default App;
