import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined, BankOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

import { 
    LogoContainer, 
    Menu, 
    MainContainer, 
    MainContent,
    MenuItem,
    Text,
    IconContainer,
    TextContainer,
    EmphasisButtonContainer
} from "./style";
import logo from "../../../assets/logo.png";


export default function Header() {
    const [ tabs, setTabs ] = useState([
        {
            title: 'Início',
            icon: (<HomeOutlined/>),
            link: '/',
            selected: false
        },
        {
            title: 'Institucional',
            icon: (<BankOutlined/>),
            link: '/institucional',
            selected: true
        },
        {
            title: 'Cursos',
            icon: (<BookOutlined/>),
            link: '/cursos',
            selected: false
        },
        {
            title: 'Área do Aluno',
            icon: (<UserOutlined/>),
            link: '/area-do-aluno/login',
            selected: false
        },
    ])

    const currentLocation = window.location.href;
    const fullHostname = currentLocation.split('/').slice(0, 3).join('/');
    const currentRoute = currentLocation.replace(fullHostname, '');

    function handleTabSelected(tabTitle) {
        setTabs(prev => prev.map(e => {
            return tabTitle === e.title ? {...e, selected: true} : {...e, selected: false}
        }))
    }

    return (
        <MainContainer>
            <MainContent>
                <LogoContainer>
                    <img src={logo} alt='logo'/>
                </LogoContainer>
                <Menu>
                    {
                        tabs.map((e, i) => {
                            return (
                                <Link to={e.link}>
                                    <MenuItem key={i} selected={e.selected} onClick={() => handleTabSelected(e.title)}>
                                        <IconContainer>
                                            {e.icon}
                                        </IconContainer>
                                        <TextContainer>
                                            <Text>{e.title}</Text>
                                        </TextContainer>
                                    </MenuItem>
                                </Link>
                            )
                        })
                    }
                </Menu>
                <EmphasisButtonContainer>
                    <Link to='/matricule-se'>
                        <Button type="primary" shape="round" size='large'>Matricule-se!</Button>
                    </Link>
                </EmphasisButtonContainer>
            </MainContent>
        </MainContainer>
    )
}