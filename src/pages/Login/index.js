import React from "react";

import { Divider, DividerContainer, MainContainer, MainContent } from "./style";
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";


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