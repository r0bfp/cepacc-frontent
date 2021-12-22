import React from "react";
import { ArrowRightOutlined } from '@ant-design/icons';

import { Content, Header, SubTitle, MoreButton, MainContainer, CourseContainer, CourseIcon, CourseInitials, CourseName, CourseInfosContainer, CourseType} from "./style";


export default function MyCourses() {
    return (
        <MainContainer>
            <Header>
                <SubTitle>MEUS CURSOS</SubTitle>
                <MoreButton>
                    <span>Mais</span>
                    <ArrowRightOutlined />
                </MoreButton>
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