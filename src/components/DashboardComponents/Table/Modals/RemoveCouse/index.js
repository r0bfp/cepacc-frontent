import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { Body, Footer, Header, MainContainer, MainContent, Title } from "./style";
import { Button } from "antd";


export default function ModalRemoveCourse({visible, setVisible, selectedRow, handleRemoveCourse}) {
    function handleOkClick(courseKey) {
        handleRemoveCourse(courseKey);
        setVisible(prev => !prev);
    }

    return (
        <MainContainer visible={visible}>
            <MainContent>
                <Header>
                    <ExclamationCircleOutlined style={{fontSize: '38px', color: '#faad14'}}/>
                    <Title>Atenção!</Title>
                </Header>
                <Body>
                    <span>Tem certeza que deseja remover o curso <strong>{selectedRow.courseName}</strong></span>
                </Body>
                <Footer>
                    <Button onClick={() => setVisible(prev => !prev)}>Cancelar</Button>
                    <Button onClick={() => handleOkClick(selectedRow.key)} type='primary' danger>REMOVER</Button>
                </Footer>
            </MainContent>
        </MainContainer>
    )
}