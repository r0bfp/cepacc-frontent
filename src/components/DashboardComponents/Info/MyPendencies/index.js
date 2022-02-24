import React from "react";

import { 
    Content,
    Header,
    Title,
    MainContainer,
    CourseContainer,
    CourseIcon,
    CourseInitials,
    CourseName, 
    CourseInfosContainer, 
    CourseType
} from "./style";


export default function MyPendencies() {
    return (
        <MainContainer>
            <Header>
                <Title>PENDÊNCIAS</Title>
            </Header>
            <Content>
                <CourseContainer>
                    <CourseIcon>
                        <CourseInitials>RP</CourseInitials>
                    </CourseIcon>
                    <CourseInfosContainer>
                        <CourseName>Teste</CourseName>
                        <CourseType>Pós-Graduação</CourseType>
                    </CourseInfosContainer>
                </CourseContainer>
                <CourseContainer>
                    <CourseIcon>
                        <CourseInitials>RP</CourseInitials>
                    </CourseIcon>
                    <CourseInfosContainer>
                        <CourseName>Teste</CourseName>
                        <CourseType>Pós-Graduação</CourseType>
                    </CourseInfosContainer>
                </CourseContainer>
            </Content>
        </MainContainer>
    )
}