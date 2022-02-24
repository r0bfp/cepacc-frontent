import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 40px;
`;

export const Content = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px 0;
    background-color: #FFF;
    border-radius: 15px;
    overflow: scroll;
`;

export const Title = styled.h3`
    font-size: 14px;
    font-weight: 900;
    color: #002756;
    margin: 0;
`;

export const MoreButton = styled.button`
    background-color: transparent;
    border: none;
    color: #002756;
    font-weight: 600;
    padding: 5px;
    cursor: pointer;
    font-size: 14px;

    span{
        margin-right: 5px;
    }

    transition: 0.5s cubic-bezier(0.190, 1.000, 0.220, 1.000);

    :hover{
        transform: translateX(5px);
    }
`;

export const CourseContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 15px;
    transition: 100ms cubic-bezier(.645,.045,.355,1);

    :hover{
        background-color: #f5f5f5;
    }
`;

export const CourseIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #F5F6FC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CourseInitials = styled.h1`
    margin: 0;
    font-size: 20px;
    font-weight: 800;
    color: #002756;
`;

export const CourseInfosContainer = styled.div`
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
`;

export const CourseName = styled.span`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #002756;
`;

export const CourseType = styled.span`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    color: #b3b9c4;
`;