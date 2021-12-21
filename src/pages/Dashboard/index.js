import React, { useState } from "react";
import { HomeOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

import { MainContainer, ContentContainer } from "./style";
import DashboardMenu from "../../components/DashboardComponents/Menu";
import Home          from "../../components/DashboardComponents/Home";
import ManageCourses from "../../components/DashboardComponents/ManageCourses";
import ManageAccount from "../../components/DashboardComponents/ManageAccount";


export default function Dashboard(){
    const [ dashboards, setDashboards ] = useState([
        {
            key: 'home',
            text: 'Início',
            icon: () => (<HomeOutlined />),
            component: () => (<Home/>),
            selected: true
        },
        {
            key: 'user',
            text: 'Meus Dados',
            icon: () => (<UserOutlined />),
            component: () => (<ManageAccount/>),
            selected: false
        },
        {
            key: 'courses',
            text: 'Cursos',
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
            <DashboardMenu 
                handleSelectedTab={handleSelectedTab}
                tabs={dashboards}
            />
            <ContentContainer>
                {
                    dashboards.map((e, i) => {
                        return e.selected && (<e.component key={i}/>)
                    })
                }
            </ContentContainer>
        </MainContainer>
    )
}