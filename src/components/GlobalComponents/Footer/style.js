import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    background-color: #01468C;
    display: flex;
`;

export const MainContent = styled.div`
    min-width: 60%;
    display: flex;
    justify-content: end;
    padding: 40px;
`;

export const SocialContainer = styled.div`
    min-width: 40%;
    background-color: #E8E4D9;
    padding: 40px;
`;

export const SocialMediasContainer = styled.div`
    width: 100%;
    font-size: 48px;

    svg{
        margin-right: 20px;
        cursor: pointer;
        transition: 200ms ease-out;

        &:hover{
            transform: translateY(-5%);
        }
    }
`;

export const SocialMediasTitle = styled.h1`
    color: #01468C;
    font-weight: 800;
`;

export const InfosColumn = styled.div`
    margin: 0 20px;
`;

export const InfosContainer = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: #FFF;
`;

export const Link = styled.a`
    transition: 200ms;
    font-size: 16px;
    object-fit: cover;
    width: fit-content;
    color: #FFF;

    &:hover{
        color: #FFF;
        transform: translateX(10%);
    }
`;

export const StaticLink = styled.a`
    transition: 200ms;
    font-size: 16px;
    object-fit: cover;
    width: fit-content;
    color: #FFF;

    &:hover{
        color: #FFF;
    }
`;