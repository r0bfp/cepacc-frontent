import React from "react";
import { Button } from "antd";

import { MainContainer, Title, CoursesContainer, Course, CourseTitle, CourseIconContainer, CourseDescription, ReadMoreButtonContainer } from "./style";
import extensao     from "../../../assets/courses-icons-home/extensao.png";
import graduacao    from "../../../assets/courses-icons-home/graduacao.png";
import pos          from "../../../assets/courses-icons-home/pos.png";
import preparatorio from "../../../assets/courses-icons-home/preparatorio.png";
import segunda      from "../../../assets/courses-icons-home/segunda.png";
import tec          from "../../../assets/courses-icons-home/tec.png";

export default function OurCourses() {
    return (
        <MainContainer>
            <Title>Nossos Cursos</Title>
            <CoursesContainer>
                <Course>
                    <CourseIconContainer>
                        <img src={graduacao} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Graduação</CourseTitle>
                    <CourseDescription>
                        Graduação é como é chamado o curso de ensino superior, sendo o primeiro nível da formação universitária. Completar a graduação é o que permite o exercício da profissão escolhida, caso esta seja atrelada a exigência de um diploma.
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={tec} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Tecnólogos</CourseTitle>
                    <CourseDescription>
                        Tecnólogo é um curso de nível superior voltado para o mercado de trabalho. Também é conhecido como curso de tecnologia ou graduação tecnológica e tem duração menor que os cursos de bacharelado ou licenciatura.
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={preparatorio} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Preparatórios</CourseTitle>
                    <CourseDescription>
                        É um curso de preparo, nesse caso, para o concurso que você escolher prestar. A falta de preparo é a principal causa das pessoas não passarem nos concursos que ambicionam, já que são muito concorridos e muito técnicos.
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={pos} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Pós-Graduação</CourseTitle>
                    <CourseDescription>
                        Um curso realizado após a conclusão de uma graduação, por isso recebe esse nome, e é muito indicado para quem quer aumentar as chances de desenvolver a carreira e se aprofundar em uma determinada área.
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={extensao} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>Extensões</CourseTitle>
                    <CourseDescription>
                        Disponível nas modalidades presencial e a distância (EAD), o curso de extensão universitária pode ser realizado por qualquer pessoa, independente de possuir vínculo com a faculdade que o oferta ou diploma de nível superior.
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
                <Course>
                    <CourseIconContainer>
                        <img src={segunda} alt=''/>
                    </CourseIconContainer>
                    <CourseTitle>2ª Licenciatura</CourseTitle>
                    <CourseDescription>
                        Após a conclusão da primeira licenciatura, é comum que exista o interesse expandir o conhecimento e lecionar em outra área, e é aí que entra a Segunda Licenciatura, para profissionais já formados que desejam uma nova licenciatura.
                    </CourseDescription>
                    <ReadMoreButtonContainer>
                        <Button type='primary'>Saiba Mais</Button>
                    </ReadMoreButtonContainer>
                </Course>
            </CoursesContainer>
        </MainContainer>
    )
}