import React, { useState } from "react";

import { HomeOutlined } from '@ant-design/icons';
import logo from "../../../assets/logo-sem-texto.png";

import { 
    MainContainer,
    HeaderContainer,
    BodyContainer,
    FooterContainer,
    ItemContainer,
    ItemIconContainer,
    ItemTextContainer,
    ItemText,
    LogoContainer,
} from "./style";


export default function Menu({tabs, handleSelectedTab}) {

    return (
        <MainContainer>
            <HeaderContainer>
                <LogoContainer>
                    <img src={logo} alt='logo'/>
                </LogoContainer>
            </HeaderContainer>
            <BodyContainer>
                {
                    tabs.map((element, index) => (
                        <ItemContainer key={element.key} selected={element.selected} onClick={() => handleSelectedTab(element.key)}>
                            <ItemIconContainer selected={element.selected}>
                                <element.icon />
                            </ItemIconContainer>
                            <ItemTextContainer>
                                <ItemText selected={element.selected}>{element.label}</ItemText>
                            </ItemTextContainer>
                        </ItemContainer>
                    ))
                }
            </BodyContainer>
            <FooterContainer>
            </FooterContainer>
        </MainContainer>
    )
}