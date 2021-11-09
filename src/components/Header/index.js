import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { HomeTwoTone, BankTwoTone, BookTwoTone } from "@ant-design/icons";

import { LogoContainer, MenuContainer, MainContainer, ButtonContainer } from "./style";

export default function Header() {
    return (
        <MainContainer>
            <LogoContainer>
                Logo
            </LogoContainer>
            <MenuContainer>
                <Menu mode="horizontal" style={{ display: "flex", justifyContent: "right" }}>
                    <Menu.Item key="inicio" icon={<HomeTwoTone />}>
                        <Link to='/'/>
                        Inicio
                    </Menu.Item>
                    <Menu.Item key="institucional" icon={<BankTwoTone />}>
                        <Link to='/institucional'/>
                        Institucional
                    </Menu.Item>
                    <Menu.Item key="cursos" icon={<BookTwoTone />}>
                        Cursos
                    </Menu.Item>
                </Menu>
            </MenuContainer>
            <ButtonContainer>
                <Button type="primary" shape="round">Matricule-se!</Button>
            </ButtonContainer>
        </MainContainer>
    )
}