import React, { useState } from "react";
import { Dropdown, Menu } from 'antd';
import { BiEdit, BiTrash } from "react-icons/bi";
import { HiOutlineDotsVertical } from 'react-icons/hi';

import { ActionButton, DropdownButtonContainer } from "./style";


export default function TableRowActionButton({setModalRemoveCourseVisible, setModalEditCourseVisible, setSelectedRowIndex}) {
    function handleDropDownOpen(element) {
        const selectedRow = element.currentTarget.parentElement.parentElement;
        setSelectedRowIndex(parseInt(selectedRow.getAttribute('data-row-index')));
    }

    const dropdownMenu = (
        <Menu>
            <Menu.Item key="0">
                <DropdownButtonContainer onClick={() => setModalEditCourseVisible(prev => !prev)}>
                    <BiEdit color={'#002756'}/>
                    <span style={{ color: '#002756' }}>Editar</span>
                </DropdownButtonContainer>
            </Menu.Item>
            <Menu.Item danger key="1">
                <DropdownButtonContainer onClick={() => setModalRemoveCourseVisible(prev => !prev)}>
                    <BiTrash/>
                    <span>Remover</span>
                </DropdownButtonContainer>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
            <ActionButton onClick={element => handleDropDownOpen(element)}>
                <HiOutlineDotsVertical size={20} color={'#002756'}/>
            </ActionButton>
        </Dropdown>
    )
}