import React, { useState } from "react";
import { MainContainer } from "./style";

import Table from "../Table";


export default function ManageCourses() {
    const [courseMock, setCourseMock] = useState([
        {
            key: 1,
            courseName: 'curso teste',
            courseDuration: 450,
            courseType: '2° Licenciatura',
            courseArea: 'Educação',
            courseModality: 'Presencial'
        },
        {
            key: 2,
            courseName: 'curso teste 2',
            courseDuration: 470,
            courseType: 'Pós-Graduação',
            courseArea: 'Educação',
            courseModality: 'Presencial'
        },
        {
            key: 3,
            courseName: 'curso teste 2',
            courseDuration: 470,
            courseType: 'Pós-Graduação',
            courseArea: 'Educação',
            courseModality: 'Presencial'
        },
    ]);

    function handleAddNewCourse(courseData) {
        setCourseMock([...courseMock, {
            key: !!courseMock.length ? courseMock.slice(-1)[0]['key'] + 1 : 1,
            courseName: courseData.courseName,
            courseDuration: courseData.courseDuration,
            courseType: courseData.courseType,
            courseArea: courseData.courseArea,
            courseModality: courseData.courseModality
        }]);
    }

    function handleRemoveCourse(courseKey) {
        setCourseMock(courseMock.filter(element => element.key !== parseInt(courseKey)));
    }

    function handleEditCourse(courseData) {
        setCourseMock(courseMock.map(currentCouse => {
            if(parseInt(currentCouse.key) === parseInt(courseData.key)){
                return { ...courseData, key: parseInt(courseData.key) };
            }

            return currentCouse;
        }));
    }

    return (
        <MainContainer>
            <Table
                tableData={courseMock}
                tableTitle='Cursos'
                handleAddNewCourse={handleAddNewCourse}
                handleRemoveCourse={handleRemoveCourse}
                handleEditCourse={handleEditCourse}
            />
        </MainContainer>
    )
}