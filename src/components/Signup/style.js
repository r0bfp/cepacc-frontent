import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #747c81;
`;


export const Title = styled.h1`
    margin: 0;
    font-size: 42px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -.7px;
    color: #747c81;
    text-align: center;
    margin-bottom: 15px;
`;

export const SubTitle = styled.p`
    color: #747c81;
    font-size: 14px;
    margin: 0;
    padding-bottom: 8px;
`;

export const AmountOfCourses = styled.h1`
    color: #747c81;
    font-weight: bold;
    margin: 0 5px;
`;

export const SubTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    margin-bottom: 20px;
`;

export const CoursesButtonContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: center;
`;

export const CoursesContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

export const CourseContainer = styled.div`
    width: 130px;
    height: 150px;
    background-color: ${ props => props.color };
    border-radius: 3px;
    margin: 7px;
    padding: 6px;
    box-shadow: 0 1px 2px #ccc;
    cursor: pointer;

    transition: 200ms;

    :hover{
        box-shadow: 0 2px 8px #bbb;
        transform: translateY(-3px);
    }
`;

export const CourseTypeTitle = styled.p`
    color: #FFF;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const Course = styled.li`
    color: #FFF;
    text-decoration: none;
    list-style-type: none;
`;
