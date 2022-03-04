import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { Body, Footer, Header, MainContainer, MainContent, Title } from "./style";

export default function ModalRemoveCourse({visible, setVisible, handleRemoveCourse, selectedCourse}) {
    function handleOkClick(){
        setVisible(prev => !prev);
        handleRemoveCourse();
    }

    return (
        <MainContainer visible={visible}>
            <MainContent>
                <Header>
                    <ExclamationCircleOutlined style={{fontSize: '38px', color: '#faad14'}}/>
                    <Title>Atenção!</Title>
                </Header>
                <Body>
                    <span>Tem certeza que deseja remover o curso <strong>{selectedCourse && selectedCourse.name}</strong>?</span>
                </Body>
                <Footer>
                    <Button onClick={() => setVisible(prev => !prev)}>Cancelar</Button>
                    <Button onClick={handleOkClick} type='primary' danger>REMOVER</Button>
                </Footer>
            </MainContent>
        </MainContainer>
    )
}