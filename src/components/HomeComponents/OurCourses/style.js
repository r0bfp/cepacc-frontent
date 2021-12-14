import styled from "styled-components";


export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 60px 0;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    color: #002756;
    text-align: center;
`;

export const CoursesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Course = styled.div`
    width: 350px;
    height: 450px;
    margin: 10px;
    border: 1px solid #ddd;
    padding: 40px;
    position: relative;
`;

export const CourseIconContainer = styled.div`
    width: 100%;
    margin-bottom: 24px;

    img{
        width: 70px;
        height: 70px;
        object-fit: contain;
    }
`;

export const CourseTitle = styled.h1`
    width: 100%;
    color: #002756;
    font-size: 24px;
    font-weight: 700;
`;

export const CourseDescription = styled.span`
    color: #57667e;
    font-size: 16px;
`;

export const ReadMoreButtonContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 40px;
`;
