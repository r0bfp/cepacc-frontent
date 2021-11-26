import React, { useState } from "react";
import { HamburgerSqueeze } from 'react-animated-burgers'

import { AppColors } from "../../../globalStyle";
import { 
    MainContainer,
    HeaderContainer,
    ButtonContainer,
    TextContainer,
    Text,
    IconContainer,
    MenuButtonContainer,
} from "./style";


export default function Menu({tabs, handleSelectedTab}) {
    const [ isOpen, setIsOpen ] = useState(true);

    function handleIsOpen() {
        setIsOpen(prev => !prev);
    }

    return (
        <MainContainer isOpen={isOpen}>
            <HeaderContainer>
                <MenuButtonContainer>
                    <HamburgerSqueeze
                        buttonWidth={30}
                        isActive={isOpen}
                        toggleButton={() => handleIsOpen()}
                        barColor={AppColors.primaryText}
                    />
                </MenuButtonContainer>
            </HeaderContainer>
            {
                tabs.map((e, i) => (
                    <ButtonContainer key={i} onClick={() => handleSelectedTab(e.key)} selected={e.selected}>
                        <IconContainer>
                            <e.icon/>
                        </IconContainer>
                        <TextContainer>
                            <Text>{e.tabName}</Text>
                        </TextContainer>
                    </ButtonContainer>
                ))
            }
        </MainContainer>
    )
}