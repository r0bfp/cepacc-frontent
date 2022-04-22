import React, { useState } from "react";
import { MdClose } from 'react-icons/md';

import { CloseButton, Content, CourseTitle, MainContainer } from "./style";

export default function CourseDetail({showing, setCourseDetailShowing}) {
    return (
        <MainContainer showing={showing}>
            <Content>
                <CloseButton onClick={() => setCourseDetailShowing(false)}>
                    <MdClose/>
                </CloseButton>
                <CourseTitle>A Arte de Contar Histórias</CourseTitle>
            </Content>
        </MainContainer>
    )
}