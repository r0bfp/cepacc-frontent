import React, { useState } from "react";
import { Table, Tag, Dropdown, Menu, Modal } from 'antd';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiEdit, BiTrash } from "react-icons/bi";

import { Title, MainContainer, ActionButton, DropdownButtonContainer } from "./style";
import { AppColors } from "../../../globaStyle";
import reactDom from "react-dom";


export default function ManageCourses(props) {
    const [ selectedRow, setSelectedRow ] = useState(null);

    const tableData = props.tableData;
    const tableTitle = props.tableTitle;

    function handleRowClick(element) {
        const row = reactDom.findDOMNode(element.target.parentNode.parentNode.parentNode);
        console.log(row.attributes)
    }

    const onRemoveModal = {
        title: 'Atenção!',
        content: (
            <>
                Tem certeza que deseja remover este item?
            </>
        ),
        okText: "REMOVER",
        okButtonProps: { danger: true },
        cancelText: "Cancelar"
    };

    const dropdownMenu = (
        <Menu>
            <Menu.Item key="0">
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
            </Menu.Item>
        </Menu>
    );

    return (
        <MainContainer>
            <Modal
                title='Atenção'
            >
            </Modal>
            <Title>{tableTitle}</Title>
            <Table dataSource={tableData} pagination={false} bordered={true} scroll={{ y: 300 }} >
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
                <Table.Column
                    title="Ação"
                    dataIndex="action"
                    key="action"
                    align='center'
                    render={() => (
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