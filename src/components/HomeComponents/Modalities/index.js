import { Button } from "antd";
import React from "react";
import Image from "../../../assets/pessoas-estudando.png"

import { 
    Content,
    FooterContainer,
    MainContainer,
    TextContainer,
    TextContent,
    TextContentTitle,
    Title, 
} from "./style";

export default function Modalities() {
    return (
        <MainContainer>
            <Title>Modalidades</Title>
            <Content>
                <TextContainer>
                    <div>
                        <TextContentTitle>Semipresencial</TextContentTitle>
                        <TextContent>
                            Realize sua sonhada graduação dentro da sua rotina com cursos que combinam aulas online e presenciais.
                        </TextContent>
                    </div>
                    <div>
                        <TextContentTitle>Presencial</TextContentTitle>
                        <TextContent>
                            Conquiste seu diploma e tenha uma experiência universitária completa, com intenso relacionamento com alunos e professores.
                        </TextContent>
                    </div>
                    <div>
                        <TextContentTitle>EAD</TextContentTitle>
                        <TextContent>
                            Obtenha seu diploma universitário com aulas 100% digitais e total flexibilidade para estudar onde e quando quiser.
                        </TextContent>
                    </div>
                </TextContainer>
                <img src={Image} alt=''/>
            </Content>
            <FooterContainer>
                <Button type='primary' shape='round'>SAIBA MAIS</Button>
            </FooterContainer>
        </MainContainer>
    )
}