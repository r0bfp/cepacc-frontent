import React, { useState } from "react";
import { AppstoreOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

import { MainContainer, Main, ContentContainer } from "./style";
import DashboardMenu from "../../components/DashboardComponents/Menu";
import ManageCourses from "../../components/DashboardComponents/ManageCourses";
import ManageAccount from "../../components/DashboardComponents/ManageAccount";


export default function Dashboard(){
    const [ dashboards, setDashboards ] = useState([
        {
            key: 'home',
            tabName: 'Início',
            icon: () => (<AppstoreOutlined />),
            component: () => (<h1 style={{width: '100%'}}>inicio</h1>),
            selected: false
        },
        {
            key: 'user',
            tabName: 'Meus Dados',
            icon: () => (<UserOutlined />),
            component: () => (<ManageAccount/>),
            selected: true
        },
        {
            key: 'courses',
            tabName: 'Cursos',
            icon: () => (<BookOutlined />),
            component: () => (<ManageCourses/>),
            selected: false
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
            <Main>
                <DashboardMenu 
                    handleSelectedTab={handleSelectedTab}
                    tabs={dashboards.map(e => ({ key: e.key, tabName: e.tabName, selected: e.selected, icon: e.icon }))}
                />
                <ContentContainer>
                    {
                        dashboards.map((e, i) => {
                            return e.selected && (<e.component key={i}/>)
                        })
                    }
                </ContentContainer>
            </Main>
        </MainContainer>
    )
}