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

    function handleSearchTerm(searchTerm) {
        const filteredCourses = {}

        setCourses(rawCourses);

        Object.keys(rawCourses).map((courseType) => {
            const courseList = rawCourses[courseType].filter((course) => { 
                return course.name.toLowerCase().includes(searchTerm);
            });

            if(!!courseList.length){
                filteredCourses[courseType] = courseList;
            }
        });

        setCourses(filteredCourses);
    }

    const filtersHandlers = {
        type: (types, filteredCourses) => {
            const rawCoursesCopy = rawCourses

            // check if arrays are equals
            if(types.length === Object.keys(rawCoursesCopy).length){
                if(types.every(item => Object.keys(rawCoursesCopy).includes(item))){
                    filteredCourses = rawCoursesCopy
                }
            }
            
            if(!types.length){
                filteredCourses = rawCoursesCopy
            }

            Object.keys(rawCoursesCopy).map(courseType => {
                if(types.includes(courseType)){
                    filteredCourses[courseType] = rawCoursesCopy[courseType]
                }
            })

            return filteredCourses;
        },
        area: (areas, filteredCourses) => {
            const rawCoursesCopy = rawCourses

            if(!areas.length){
                Object.keys(filteredCourses).map(courseType => {
                })
            }

            Object.keys(filteredCourses).map(courseType => {
                const courses = filteredCourses[courseType].filter(course => {
                    return areas.includes(course.area) && course
                })

                filteredCourses[courseType] = courses
            })

            return filteredCourses
        }
    }

    function filtersApply(filters) {
        let filteredCourses = {}

        filteredCourses = filtersHandlers.type(filters.type, filteredCourses);
        // filteredCourses = filtersHandlers.area(filters.area, filteredCourses);
        setCourses(filteredCourses);
    }

    return (
        <MainContainer>
            <FiltersContainer>
                <Filters 
                    handleSearchTerm={handleSearchTerm} 
                    filtersApply={filtersApply}
                />
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