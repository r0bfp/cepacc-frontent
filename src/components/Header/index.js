import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { HomeOutlined, BankOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

import { LogoContainer, MenuContainer, MainContainer, ButtonContainer, MainContent } from "./style";
import logo from "../../assets/logo.png";


export default function Header() {
    return (
        <MainContainer>
            <MainContent>
                <LogoContainer>
                    <img src={logo} alt='logo'/>
                </LogoContainer>
                <MenuContainer>
                    <Menu defaultSelectedKeys='inicio' mode="horizontal" style={{ display: "flex", justifyContent: "right" }}>
                        <Menu.Item key="inicio" icon={<HomeOutlined />}>
                            <Link to='/'/>
                            Inicio
                        </Menu.Item>
                        <Menu.Item key="institucional" icon={<BankOutlined />}>
                            <Link to='/institucional'/>
                            Institucional
                        </Menu.Item>
                        <Menu.Item key="cursos" icon={<BookOutlined />}>
                            <Link to='/cursos'/>
                            Cursos
                        </Menu.Item>
                        <Menu.Item key="login" icon={<UserOutlined />}>
                            <Link to='/login'/>
                            Área do Aluno
                        </Menu.Item>
                    </Menu>
                </MenuContainer>
                <ButtonContainer>
                    <Button type="primary" shape="round">Matricule-se!</Button>
                </ButtonContainer>
            </MainContent>
        </MainContainer>
    )
}