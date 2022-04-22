import React from "react";
import { Button } from "antd";

import { 
    AmountOfCourses,
    MainContainer, 
    SubTitle, 
    SubTitleContainer, 
    Title, 
    CoursesContainer, 
    Course,
    CourseTitle,
    CoursesButtonContainer,
    CourseContainer,
    CourseTypeTitle
} from "./style";

export default function Signup() {
    const areaColors = [
        {
            color: '#ef476f',
            courseType: '2 Licenciatura',
            courses: ['curso 1', 'curso 2', 'curso 3']
        },{
            color: '#48cae4',
            courseType: 'Pós-Graduação',
            courses: ['curso 1', 'curso 2', 'curso 3']
        },{
            color: '#06d6a0',
            courseType: 'Cursos de Extensão',
            courses: ['curso 1', 'curso 2', 'curso 3']
        },{
            color: '#fd9e02',
            courseType: 'Reforço Escolar',
            courses: ['curso 1', 'curso 2', 'curso 3']
        },{
            color: '#126782',
            courseType: 'Cursos Preparatórios',
            courses: ['curso 1', 'curso 2', 'curso 3']
        }
    ]
    
    return (
        <MainContainer>
            <Title>Ainda não é nosso aluno?</Title>
            <SubTitleContainer>
                <SubTitle>
                    São mais de 
                </SubTitle>
                <AmountOfCourses>20</AmountOfCourses>
                <SubTitle>
                    cursos para você turbinar sua carreira!
                </SubTitle>
            </SubTitleContainer>
            <CoursesContainer>
                {
                    areaColors.map((e) => {
                        return (
                            <CourseContainer color={e.color}>
                                <CourseTypeTitle>{e.courseType}</CourseTypeTitle>
                                {
                                    e.courses.map(c => (<Course>{c}</Course>))
                                }
                                
                            </CourseContainer>
                        )
                    })
                }
            </CoursesContainer>
        </MainContainer>
    )
}