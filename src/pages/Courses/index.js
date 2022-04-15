import React, { useEffect, useState } from "react";
import { Tag } from "antd";

import CourseDetail from "../../components/CoursesComponents/CourseDetail";
import NoCoursesFound from "../../components/CoursesComponents/NoCoursesFound";
import Filters from "../../components/CoursesComponents/Filters";
import Table from "../../components/CommonComponents/Table";

import { api } from "../../services/api";
import { FiltersContainer, MainContainer, TableContainer, Title } from "./style";

export default function Courses(){
    const [courseDetailShowing, setCourseDetailShowing] = useState(false);
    const [rawCourses, setRawCourses] = useState([]);
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await api.get("courses/list");
            const courses = rawToStandardizedCourses(response.data);

            setCourses(courses);
            setRawCourses(courses);
        }

        fetchData();
    }, []);

    const tableHead = ['Nome', 'Área', 'Tipo', 'Duração', 'Modalidade'];

    // standardize courses object to format expected by the table component
    function rawToStandardizedCourses(courses) {
        const coursesBy = {};

        courses.forEach(course => {
            if(!coursesBy[course.type]){
                coursesBy[course.type] = []
            }

            const { area, duration, modalities, name, type } = course;

            coursesBy[course.type].push({
                name,
                area,
                type,
                duration: <span>{duration} Horas</span>,
                render: 
                    <span>
                        {
                            modalities.map((element, index) => (
                                <Tag color='blue' key={index}>{element.name}</Tag>
                            ))
                        }
                    </span>
            });
        });

        return coursesBy;
    }

    const handleFilters = {
        searchTerm: (filters) => {
            const filteredCourses = {}
    
            Object.keys(rawCourses).map((courseType) => {
                const courseList = rawCourses[courseType].filter(course => course.name.toLowerCase().includes(filters.searchTerm))
    
                if(!!courseList.length){
                    filteredCourses[courseType] = courseList
                }
            });

            setCourses(filteredCourses);
        }
    }


    return (
        <MainContainer>
            <FiltersContainer>
                <Filters handleFilters={handleFilters}/>
            </FiltersContainer>
            {
                Object.keys(courses).map((courseType, index) => (
                    <TableContainer key={index}>
                        <Title>{courseType}</Title>
                        <Table 
                            tableHead={tableHead} 
                            tableData={courses[courseType]}
                            // handleRowClick={handleTableRowClick}
                        />
                    </TableContainer>
                ))
            }
            <CourseDetail showing={courseDetailShowing} setCourseDetailShowing={setCourseDetailShowing}/>
        </MainContainer>
    )
}