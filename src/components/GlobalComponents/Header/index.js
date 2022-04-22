import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined, BankOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

import { 
    LogoContainer, 
    Menu, 
    MainContainer, 
    MainContent,
    MenuItem,
    Text,
    TextContainer,
    EmphasisButtonContainer
} from "./style";
import logo from "../../../assets/logo.png";


export default function Header() {
    const [ isOnTop, setIsOnTop] = useState(true);
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
        // {
        //     title: 'Área do Aluno',
        //     icon: (<UserOutlined/>),
        //     link: '/area-do-aluno/login',
        //     selected: false
        // },
    ]);

    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset === 0 ? setIsOnTop(true) : setIsOnTop(false);
        }
    }, []);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    function handleTabSelected(tabTitle) {
        setTabs(prev => prev.map(e => {
            return tabTitle === e.title ? {...e, selected: true} : {...e, selected: false}
        }));
    }

    return (
        pathname !== '/area-do-aluno/dashboard' &&
        <MainContainer isOnTop={isOnTop}>
            <MainContent>
                <LogoContainer onClick={() => navigate('/')}>
                    <img src={logo} alt='logo'/>
                </LogoContainer>
                <Menu>
                    {
                        tabs.map((e, i) => {
                            return (
                                <Link to={e.link} key={i}>
                                    <MenuItem key={i} selected={e.selected} onClick={() => handleTabSelected(e.title)}>
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
                        <Button type="primary" shape="round">
                            <span>MATRICULE-SE!</span>
                        </Button>
                    </Link>
                </EmphasisButtonContainer>
            </MainContent>
        </MainContainer>
    )
}