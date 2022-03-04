import React, { useState } from "react";
import { HomeOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

import { MainContainer, ContentContainer, MenuContainer, InfoContainer } from "./style";
import DashboardMenu from "../../components/DashboardComponents/Menu";
import Home          from "../../components/DashboardComponents/Home";
import ManageCourses from "../../components/DashboardComponents/ManageCourses";
import ManageAccount from "../../components/DashboardComponents/ManageAccount";
import Info from "../../components/DashboardComponents/Info";


export default function Dashboard(){
    const [ dashboards, setDashboards ] = useState([
        {
            key: 'home',
            label: 'Início',
            icon: () => (<HomeOutlined />),
            component: () => (<Home/>),
            selected: false
        },
        {
            key: 'user',
            label: 'Meus Dados',
            icon: () => (<UserOutlined />),
            component: () => (<ManageAccount/>),
            selected: false
        },
        {
            key: 'courses',
            label: 'Cursos',
            icon: () => (<BookOutlined />),
            component: () => (<ManageCourses/>),
            selected: true
        },
    ]);

    function handleSelectedTab(selectedTabKey) {
        setDashboards(dashboards.map(dashboard => {
            if(dashboard.key === selectedTabKey){
                return { ...dashboard, selected: true }
            }
            return { ...dashboard, selected: false }
        }));
    }

    return (
        <MainContainer>
            <MenuContainer>
                <DashboardMenu 
                    handleSelectedTab={handleSelectedTab}
                    tabs={dashboards}
                />
            </MenuContainer>
            <ContentContainer>
                <ContentContainer>
                    {
                        dashboards.map((e, i) => {
                            return e.selected && (<e.component key={i}/>)
                        })
                    }
                </ContentContainer>
            </ContentContainer>
            <InfoContainer>
                <Info/>
            </InfoContainer>
        </MainContainer>
    )
}