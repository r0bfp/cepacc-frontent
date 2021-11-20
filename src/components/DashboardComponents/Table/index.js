import React, { useState } from "react";
import { Table, Tag, Dropdown, Menu, Button } from 'antd';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiEdit, BiTrash } from "react-icons/bi";
import { PlusOutlined } from "@ant-design/icons";

import ModalAddCourse from "./Modals/AddCourse";
import ModalRemoveCourse from "./Modals/RemoveCouse";
import ModalEditCourse from "./Modals/EditCourse";
import { Title, MainContainer, ActionButton, DropdownButtonContainer, ConfirmContainer } from "./style";
import { AppColors } from "../../../globaStyle";


export default function ManageCourses({
        tableData,
        tableTitle,
        handleAddNewCourse,
        handleRemoveCourse,
        handleEditCourse
    }) {
    const [ editCourseModalVisible, setEditCourseModalVisible ] = useState(false);
    const [ removeCourseModalVisible, setRemoveCourseModalVisible ] = useState(false);
    const [ addCourseModalVisible, setAddCourseModalVisible ] = useState(false);
    const [ selectedRow, setSelectedRow ] = useState({
        key: '',
        courseName: '',
        courseDuration: '',
        courseType: '',
        courseArea: '',
        courseModality: '',
    });

    function handleRowClick(element) {
        const row = element.currentTarget.parentNode.parentNode;

        setSelectedRow({
            key: row.getAttribute('data-row-key'),
            courseName: row.children[0].textContent,
            courseDuration: row.children[1].textContent,
            courseType: row.children[2].textContent,
            courseArea: row.children[3].textContent,
            courseModality: row.children[4].textContent
        });
    }


    const dropdownMenu = (
        <Menu>
            <Menu.Item key="0" onClick={() => setEditCourseModalVisible(prev => !prev)}>
                <DropdownButtonContainer>
                    <BiEdit color={AppColors.primaryText}/>
                    <span style={{ color: AppColors.primaryText }}>Editar</span>
                </DropdownButtonContainer>
            </Menu.Item>
            <Menu.Item danger key="1" onClick={() => setRemoveCourseModalVisible(prev => !prev)}>
                <DropdownButtonContainer>
                    <BiTrash/>
                    <span>Remover</span>
                </DropdownButtonContainer>
            </Menu.Item>
        </Menu>
    );

    return (
        <MainContainer>
            <ModalEditCourse 
                visible={editCourseModalVisible} 
                setVisible={setEditCourseModalVisible} 
                handleEditCourse={handleEditCourse}
                selectedRow={selectedRow}
            />
            <ModalRemoveCourse 
                visible={removeCourseModalVisible} 
                setVisible={setRemoveCourseModalVisible} 
                selectedRow={selectedRow} 
                handleRemoveCourse={handleRemoveCourse}
            />
            <ModalAddCourse 
                visible={addCourseModalVisible} 
                setVisible={setAddCourseModalVisible} 
                handleAddNewCourse={handleAddNewCourse}
            />
            <Title>{tableTitle}</Title>
            <Table 
                dataSource={tableData} 
                pagination={false} 
                bordered={true}
            >
                <Table.Column title="Nome" dataIndex="courseName" key="name" align='center'/>
                <Table.Column 
                    title="Duração"
                    dataIndex="courseDuration"
                    key="duration"
                    align='center'
                    render={(text) => (<span>{text} Horas</span>)}
                />
                <Table.Column
                    title="Tipo"
                    dataIndex="courseType"
                    key="type"
                    align='center'
                    render={(type) => <Tag color={AppColors.coursesColors[type]}
                >{type}</Tag>}/>
                <Table.Column title="Área" dataIndex="courseArea" key="area" align='center'/>
                <Table.Column title="Modalidade" dataIndex="courseModality" key="modality" align='center'/>
                <Table.Column
                    title="Ação"
                    dataIndex="action"
                    key="action"
                    align='center'
                    render={(e, i) => (
                        <Dropdown overlay={dropdownMenu} trigger={['click']}>
                             <ActionButton onClick={(element) => handleRowClick(element)}>
                                <HiOutlineDotsVertical size={20} color={AppColors.primaryText}/>
                            </ActionButton>
                        </Dropdown>
                    )}
                />
            </Table>
            <ConfirmContainer>
                <Button onClick={() => setAddCourseModalVisible(true)} type="primary" size='large' shape="circle" icon={<PlusOutlined />} />
            </ConfirmContainer>
        </MainContainer>
    )
}