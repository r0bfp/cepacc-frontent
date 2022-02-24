import styled, { css } from "styled-components";


export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 50px 40px;
`;

// EXIT ===================================
export const ExitContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;

export const ExitButton = styled.button`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: 100ms cubic-bezier(.645,.045,.355,1);

    :hover {
        background-color: #f5f5f5;
    }
`;

// PERFIL ====================================
export const UserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UserImageContainer = styled.div`
    padding: 20px;
    font-size: 50px;
    color: #b3b9c4;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #b3b9c4;
    position: relative;
    cursor: pointer;
`;

export const EditImageContainer = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0e89c4;
    font-size: 15px;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const UsernameContainer = styled.div`
    padding: 30px 0;
`;

export const Username = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #002756;
`;

// MY COURSES ====================================
export const MyCoursesContainer = styled.div`
`;

// PENDENCIES ====================================
export const PendenciesContainer = styled.div`
`;