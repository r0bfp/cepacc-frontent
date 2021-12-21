import React, { useState } from "react";
import { HamburgerSqueeze } from 'react-animated-burgers';
import { PoweroffOutlined } from '@ant-design/icons';

import { 
    MainContainer,
    HeaderContainer,
    BodyContainer,
    MenuItemContainer,
    MenuItemImageContainer,
    MenuItemTextContainer,
    MenuItemText,
    FooterContainer,
} from "./style";


export default function Menu({tabs, handleSelectedTab}) {
    const [ isOpen, setIsOpen ] = useState(true);

    function handleIsOpen() {
        setIsOpen(prev => !prev);
    }

    return (
        <MainContainer isOpen={isOpen}>
            <HeaderContainer>
                <HamburgerSqueeze
                    buttonWidth={20}
                    isActive={isOpen}
                    toggleButton={() => handleIsOpen()}
                    barColor="#A4ADB3"
                />
            </HeaderContainer>
            <BodyContainer>
                {
                    tabs.map((tab, index) => (
                        <MenuItemContainer key={index} onClick={() => handleSelectedTab(tab.key)} selected={tab.selected}>
                            <MenuItemImageContainer selected={tab.selected}>
                                <tab.icon/>
                            </MenuItemImageContainer>
                            <MenuItemTextContainer>
                                <MenuItemText selected={tab.selected}>{tab.text}</MenuItemText>
                            </MenuItemTextContainer>
                        </MenuItemContainer>
                    ))
                }
            </BodyContainer>
            <FooterContainer>
                <MenuItemContainer>
                    <MenuItemImageContainer>
                        <PoweroffOutlined />
                    </MenuItemImageContainer>
                    <MenuItemTextContainer>
                        <MenuItemText>Sair</MenuItemText>
                    </MenuItemTextContainer>
                </MenuItemContainer>
            </FooterContainer>
        </MainContainer>
    )
}