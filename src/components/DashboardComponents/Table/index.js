import React, { useState } from "react";
import { Table, Tag, Dropdown, Menu, Modal } from 'antd';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiEdit, BiTrash } from "react-icons/bi";

import { Title, MainContainer, ActionButton, DropdownButtonContainer } from "./style";
import { ModalEdit } from "./Modals";
import { AppColors } from "../../../globaStyle";


export default function ManageCourses(props) {
    const [ editModalVisible, setEditModalVisible ] = useState(false);
    const [ selectedRow, setSelectedRow ] = useState({
        key: '',
        courseName: 'TESTE',
        courseDuration: '400',
        courseType: 'Pós-Graduação',
        courseArea: 'Educação',
        courseModality: 'EAD',
    });

    const tableData = props.tableData;
    const tableTitle = props.tableTitle;

    function handleRowClick(element) {
        const row = element.target.parentNode.parentNode.parentNode;

        console.log(element.target.props);

        // setSelectedRow({
        //     key: row.getAttribute('data-row-key'),
        //     courseName: row.children[0].textContent,
        //     courseDuration: row.children[1].textContent,
        //     courseType: row.children[2].textContent,
        //     courseArea: row.children[3].textContent,
        //     courseModality: row.children[4].textContent
        // });
    }

    function handleEditOk() {
        setEditModalVisible(false);
    }

    const onRemoveModal = {
        title: 'Atenção!',
        content: (
            <>
                Tem certeza que deseja remover o curso {selectedRow.courseName}?
            </>
        ),
        okText: "REMOVER",
        okButtonProps: { danger: true },
        cancelText: "Cancelar"
    };

    const dropdownMenu = (
        <Menu>
            {/* <Menu.Item key="0" onClick={() => setEditModalVisible(true)}>
                <DropdownButtonContainer>
                    <BiEdit color={AppColors.primaryText}/>
                    <span style={{ color: AppColors.primaryText }}>Editar</span>
                </DropdownButtonContainer>
            </Menu.Item>
            <Menu.Item danger key="1" onClick={() => Modal.confirm(onRemoveModal)}>
                <DropdownButtonContainer>
                    <BiTrash/>
                    <span>Remover</span>
                </DropdownButtonContainer>
            </Menu.Item> */}
        </Menu>
    );

    return (
        <MainContainer>
            <Modal
                title={selectedRow.courseName}
                visible={editModalVisible}
                onOk={() => handleEditOk()}
                onCancel={() => setEditModalVisible(false)}
            >
                <ModalEdit selectedCourse={selectedRow}/>
            </Modal>
            <Title>{tableTitle}</Title>
            <Table 
                dataSource={tableData} 
                pagination={false} 
                bordered={true} 
                scroll={{ y: 300 }} 
            >
                <Table.Column title="Nome" dataIndex="name" key="name" align='center'/>
                <Table.Column title="Duração" dataIndex="duration" key="duration" align='center'/>
                <Table.Column
                    title="Tipo"
                    dataIndex="type"
                    key="type"
                    align='center'
                    render={(type) => <Tag color={AppColors.coursesColors[type]}
                >{type}</Tag>}/>
                <Table.Column title="Área" dataIndex="area" key="area" align='center'/>
                <Table.Column title="Modalidade" dataIndex="modality" key="modality" align='center'/>
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
        </MainContainer>
    )
}