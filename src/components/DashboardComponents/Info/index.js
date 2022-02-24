import React, { useState } from "react";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { MdLogout } from 'react-icons/md';

import MyCourses from "./MyCourses";
import Pendencies from "./MyPendencies";

import { 
    EditImageContainer,
    ExitButton,
    ExitContainer,
    MainContainer,
    MyCoursesContainer,
    PendenciesContainer,
    UserContainer,
    UserImageContainer,
    Username,
    UsernameContainer,
} from "./style";


export default function Info() {
    return (
        <MainContainer>
            <ExitContainer>
                <ExitButton>
                    <MdLogout size={25}/>
                </ExitButton>
            </ExitContainer>
            <UserContainer>
                <UserImageContainer>
                    <UserOutlined />
                    <EditImageContainer>
                        <PlusOutlined />
                    </EditImageContainer>
                </UserImageContainer>
                <UsernameContainer>
                    <Username>Usuário Teste</Username>
                </UsernameContainer>
            </UserContainer>
            <MyCoursesContainer>
                <MyCourses/>
            </MyCoursesContainer>
            <PendenciesContainer>
                <Pendencies/>
            </PendenciesContainer>
        </MainContainer>
    )
}