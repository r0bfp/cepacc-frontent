import React from "react";
import { Button, Empty } from "antd";
import { MainContainer, ShowAllCoursesContainer } from "./style";

export default function NoCoursesFound({showAllCourses}) {
    return (
        <MainContainer>
            <Empty description='Nenhum curso encontrado.'/>
            <ShowAllCoursesContainer>
                <Button type='primary' onClick={showAllCourses}>Mostrar todos os cursos</Button>
            </ShowAllCoursesContainer>
        </MainContainer>
    )
}