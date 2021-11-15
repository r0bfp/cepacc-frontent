import React, { useState } from "react";

import { MainContainer, Main } from "./style";
import DashboardMenu from "../../components/DashboardComponents/Menu";
import ManageCourses from "../../components/DashboardComponents/ManageCourses";

export default function Dashboard(){
    const [ dashboardSelected, setDashboardSelected ] = useState('Cursos');
    const menuItems = {
        'Início': {
            key: 'Início',
            component: () => (<h1>teste</h1>)
        },
        'Cursos': {
            key: 'Cursos',
            component: ManageCourses
        }
    };

    function handleDashboards(menuItemKey) {
        setDashboardSelected(menuItemKey);
    }

    return (
        <MainContainer>
            <Main>
                <DashboardMenu menuItems={menuItems} handleDashboards={handleDashboards}/>
                {menuItems[dashboardSelected].component()}
            </Main>
        </MainContainer>
    )
}