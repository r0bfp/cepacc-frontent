import React from "react";
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';

import { Content, Header, SubTitle, MoreButton, MainContainer, CourseContainer, CourseIcon, CourseInitials, CourseName, CourseInfosContainer, CourseType, NoPendenciesContainer, NoPendenciesIcon, NoPendenciesText} from "./style";


export default function Pendencies() {
    return (
        <MainContainer>
            <Header>
                <SubTitle>PENDÊNCIAS</SubTitle>
            </Header>
            <Content>
                <NoPendenciesContainer>
                    <NoPendenciesIcon>
                        <CheckCircleFilled />
                    </NoPendenciesIcon>
                    <NoPendenciesText>Nenhuma Pendência</NoPendenciesText>
                </NoPendenciesContainer>
            </Content>
        </MainContainer>
    )
}