import React from "react";
import { MdWatchLater } from "react-icons/md"
import { GiGraduateCap } from "react-icons/gi"

import { 
    Course,
    CourseInfoContainer,
    CourseInfosContainer,
    CourseModalities,
    CoursesContainer,
    CoursesListContainer,
    CourseTitle,
    ListTitle,
    MainContainer
} from "./style";

export default function Courses(props) {
    const apiCourseMock = [
        {
            nome: 'A Arte de Contar Histórias',
            area: 'Educação',
            duracao: '450h',
            tipo: 'Pós-Graduação',
            tbl_modalidade: [
                'ead',
                'presencial'
            ]
        },
        {
            nome: 'A Arte de Contar Histórias',
            area: 'Educação',
            duracao: '450h',
            tipo: 'Pós-Graduação',
            tbl_modalidade: [
                'ead',
                'presencial'
            ]
        }
    ]

    return (
        <MainContainer>
            <CoursesContainer>
                <ListTitle>{props.courseType}</ListTitle>
                <CoursesListContainer>
                    {
                        apiCourseMock.map((course, index) => {
                            return (
                                <Course key={index} courseType={props.courseType}>
                                    <CourseTitle>{course.nome}</CourseTitle>
                                    {
                                        course.tbl_modalidade.map((modality, index) => {
                                            return (
                                                <CourseModalities key={index}> {index !== 0 && "/"} {modality}</CourseModalities>
                                            )
                                        })
                                    }
                                    <CourseInfosContainer>
                                        <CourseInfoContainer>
                                            <MdWatchLater size={20} color='rgb(225 180 80)'/>
                                            <label>{course.duracao}</label>
                                        </CourseInfoContainer>
                                        <CourseInfoContainer>
                                            <GiGraduateCap size={25} color='rgb(225 180 80)'/>
                                            <label>{course.area}</label>
                                        </CourseInfoContainer>
                                    </CourseInfosContainer>
                                </Course>
                            )
                        })
                    }
                </CoursesListContainer>
            </CoursesContainer>
        </MainContainer>
    )
}