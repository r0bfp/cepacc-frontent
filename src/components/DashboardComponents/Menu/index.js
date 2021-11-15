import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { 
    MenuNavigation,
    Exit,
    MainContainer,
    MenuHeader,
    UserContainer,
    UserDescriptionContainer,
    UserImageContainer,
    Username,
    MenuItem,
    MenuItemText
} from "./style";


export default function Menu(props) {
    const [ menuItemSelected, setMenuItemSelected ] = useState();
    const menuItems = props.menuItems;

    function handleSelected(element) {
        const currentKey = element.target.innerText;

        setMenuItemSelected(currentKey);
    }

    function handleClick(element) {
        handleSelected(element)
        props.handleDashboards(element.target.innerText);
    }

    return (
        <MainContainer>
            <MenuHeader>
                <UserContainer>
                    <UserImageContainer>
                        <AiOutlineUser size={35} color='#093366'/>
                    </UserImageContainer>
                    <UserDescriptionContainer>
                        <Username>Usuário Teste</Username>
                        <Exit>Sair</Exit>
                    </UserDescriptionContainer>
                </UserContainer>
            </MenuHeader>
            <MenuNavigation>
                {
                    Object.keys(menuItems).map((menuItem, index) => {
                        return (
                            <MenuItem key={index} onClick={(element) => handleClick(element)} selected={menuItemSelected === menuItems[menuItem].key}>
                                <MenuItemText>{menuItems[menuItem].key}</MenuItemText>
                            </MenuItem>
                        )
                    })
                }
            </MenuNavigation>
        </MainContainer>
    )
}