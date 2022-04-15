import { Button } from "antd";
import React, { useEffect, useState } from "react";

import TableRowActionButton from "./TableRowActionButton";
import ModalAddCourse from "./Modals/AddCourse";
import ModalRemoveCourse from "./Modals/RemoveCourse";
import ModalEditCourse from "./Modals/EditCourse";
import Table from "../../CommonComponents/Table";
import { AddCourseContainer, MainContainer, Title } from "./style";


export default function ManageCourses() {
    const [modalAddCourseVisible, setModalAddCourseVisible] = useState(false);
    const [modalRemoveCourseVisible, setModalRemoveCourseVisible] = useState(false);
    const [modalEditCourseVisible, setModalEditCourseVisible] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    const [courses, setCourses] = useState([]);

    const coursesMock = [
        {name: 'xxx', duration: 11, type: 'graduacao', area: 'saude', modality: 'ead'},
        {name: 'asda', duration: 3, type: 'graduacao', area: 'saude', modality: 'ead'},
        {name: 'b', duration: 45, type: 'graduacao', area: 'saude', modality: 'ead'},
    ]
    const tableHead = ['Nome', 'Duração', 'Tipo', 'Área', 'Modalidade', 'Ação'];

    useEffect(() => {
        setCourses(coursesMock.map(course => ({
            ...course,
            render: <TableRowActionButton 
                setModalRemoveCourseVisible={setModalRemoveCourseVisible}
                setModalEditCourseVisible={setModalEditCourseVisible}
                setSelectedRowIndex={setSelectedRowIndex}
            />
        })));
    }, []);

    function handleRemoveCourse() {
        setCourses(courses.filter((course, index) => {
            return index !== selectedRowIndex && course;
        }));
    }

    function handleEditCourse(newCourseData) {
        setCourses(courses.map((course, index) => {
            return index === selectedRowIndex ? newCourseData : course;
        }));
    }

    function handleAddNewCourse(newCourse){
        newCourse = {
            ...newCourse, 
            render: <TableRowActionButton
                setModalRemoveCourseVisible={setModalRemoveCourseVisible}
                setModalEditCourseVisible={setModalEditCourseVisible}
                setSelectedRowIndex={setSelectedRowIndex}
            /> 
        }

        setCourses(prev => [...prev, newCourse])
    }

    return (
        <MainContainer>
            <Title>Cursos</Title>
            {courses && <Table tableHead={tableHead} tableData={courses}/>}
            <AddCourseContainer>
                <Button 
                    type="primary" 
                    onClick={() => setModalAddCourseVisible(prev => !prev)}
                >Adicionar Curso</Button>
            </AddCourseContainer>
            <ModalAddCourse 
                visible={modalAddCourseVisible} 
                setVisible={setModalAddCourseVisible} 
                handleAddNewCourse={handleAddNewCourse}
            />
            <ModalRemoveCourse 
                visible={modalRemoveCourseVisible} 
                setVisible={setModalRemoveCourseVisible} 
                handleRemoveCourse={handleRemoveCourse}
                selectedCourse={courses[selectedRowIndex]}
            />
            <ModalEditCourse 
                visible={modalEditCourseVisible} 
                setVisible={setModalEditCourseVisible} 
                handleEditCourse={handleEditCourse}
                selectedCourse={courses[selectedRowIndex]}
            />
        </MainContainer>
    )
}