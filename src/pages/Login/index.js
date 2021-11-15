import React from "react";

import { Divider, DividerContainer, MainContainer, MainContent } from "./style";
import Signin from "../../components/LoginComponents/Signin";
import Signup from "../../components/LoginComponents/Signup";


export default function Login(){
    return (
        <MainContainer>
            <MainContent>
                <Signin/>
                <Signup/>
            </MainContent>
        </MainContainer>
    )
}