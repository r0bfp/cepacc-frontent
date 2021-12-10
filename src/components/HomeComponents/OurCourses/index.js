import React from "react";
import { Button } from "antd";

import { MainContainer, Title, CoursesContainer, Course, CourseTitle, CourseIconContainer, CourseDescription, ReadMoreButtonContainer } from "./style";
import extensao     from "../../../assets/courses-icons-home/extensao.png";
import graduacao    from "../../../assets/courses-icons-home/graduacao.png";
import pos          from "../../../assets/courses-icons-home/pos.png";
import preparatorio from "../../../assets/courses-icons-home/preparatorio.png";
import segunda      from "../../../assets/courses-icons-home/segunda.png";
import tec          from "../../../assets/courses-icons-home/tec.png";

export default function OurCourses() {
    return (
        <MainContainer>
            <Title>Nossos Cursos</Title>
            <CoursesContainer>
                <Course>
                    <CourseIconContainer>
                        <img src={graduacao} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Graduação</CourseTitle>
                    <CourseDescription>
                        teste de mensagem
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={tec} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Tecnólogos</CourseTitle>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={preparatorio} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Preparatórios</CourseTitle>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={pos} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Pós-Graduação</CourseTitle>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={extensao} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Extensões</CourseTitle>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={segunda} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>2ª Licenciatura</CourseTitle>
                </Course>
            </CoursesContainer>
        </MainContainer>
    )
}