import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
`;

export const CoursesContainer = styled.div`
    padding: 15px 30px;
    width: 100%;
`;

export const CoursesListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

`;

export const ListTitle = styled.h1`
    color: #093366;
`;

const courseTypeColors = {
    'Pós-Graduação': '#48cae4',
    'Curso de Extensão': '#ef476f'
}

export const Course = styled.div`
    width: 250px;
    min-height: 100px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 5px 5px rgb(126 126 126 / 20%);
    padding: 10px;
    padding-bottom: 5px;
    margin: 0 20px 20px 0;

    border-bottom: 3px solid ${ props => courseTypeColors[props.courseType] };

    cursor: pointer;

    * {
        cursor: pointer;
    }

    transition: 200ms;
    :hover{
        box-shadow: 0 0px 0px rgb(126 126 126 / 30%);
    }
`;

export const CourseTitle = styled.h1`
    font-size: 18px;
    color: #093366;
`;

export const CourseInfosContainer = styled.div`
    border-top: 1px solid rgb(225 180 80);
    display: flex;
    align-items: center;
    margin-top: 3px;
    padding-top: 3px;
`;

export const CourseInfoContainer = styled.div`
    display: flex;
    align-items: center;
    color: rgb(225 180 80);
    margin-right: 5px;

    label {
        margin-left: 5px;
    }
`;

export const CourseModalities = styled.label`
    color: #093366;
`;