import React from "react";

import { MainContainer } from "./style";
import CoursesComponent from "../../components/CoursesComponents/Courses";

export default function Courses(){
    return (
        <MainContainer>
            <CoursesComponent courseType='Pós-Graduação'/>
            <CoursesComponent courseType='Curso de Extensão'/>
        </MainContainer>
    )
}