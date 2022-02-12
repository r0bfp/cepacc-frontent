import React, { useState } from "react";
import { Button, Steps } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';

import { Banner, ButtonsContainer, Content, Main, MainContainer, StepperContainer, StepsContainer } from "./style";
import SignUpForm     from "../../components/EnrollComponents/SignUpForm";
import CourseForm     from "../../components/EnrollComponents/CourseForm";
import PersonalForm   from "../../components/EnrollComponents/PersonalForm";
import Congratulation from "../../components/EnrollComponents/Congratulations";
import banner         from "../../assets/banner.png"

export default function Enroll(){
    const [steps, setSteps] = useState([
        {
            key: 'access-form',
            component: SignUpForm,
            selected: true
        },
        {
            key: 'course-form',
            component: CourseForm,
            selected: false
        },
        {
            key: 'personal-form',
            component: PersonalForm,
            selected: false
        },
        {
            key: 'congratulation',
            component: Congratulation,
            selected: false
        },
    ]);

    function handleNext(){
        const nextStepIndex = steps.findIndex((e) => e.selected && e) + 1;

        if(nextStepIndex <= steps.length - 1){
            setSteps(prev => prev.map((step, index) => {
                if (index === nextStepIndex){
                    return {...step, selected: true } 
                }
    
                return {...step, selected: false}
            }));
        }
    }

    function handleBack(){
        const previousStepIndex = steps.findIndex((e) => e.selected && e) - 1;

        if(previousStepIndex >= 0){
            setSteps(prev => prev.map((step, index) => {
                if (index === previousStepIndex){
                    return {...step, selected: true } 
                }

                return {...step, selected: false}
            }));
        }
    }

    return (
        <MainContainer>
            <Main>
                <Content>
                    <StepperContainer>
                        <Steps size='small' current={steps.findIndex(value => value.selected)}>
                            <Steps.Step title="Dados Acesso"/>
                            <Steps.Step title="Sobre o Curso"/>
                            <Steps.Step title="Informações Pessoais"/>
                        </Steps>
                    </StepperContainer>
                    <StepsContainer>
                        {
                            steps.map((step, i) => {
                                return step.selected && <step.component key={i}/>
                            })
                        }
                    </StepsContainer>
                    {
                        !steps.at(-1).selected &&
                        <ButtonsContainer>
                            <Button
                                type='primary'
                                size='large'
                                shape="round"
                                onClick={() => handleBack()}
                                disabled={steps.findIndex((e) => e.selected && e) === 0}
                            >
                                Voltar
                            </Button>
                            <Button
                                type='primary'
                                size='large'
                                shape="round"
                                onClick={() => handleNext()}
                            >
                                Avançar
                                <ArrowRightOutlined />
                            </Button>
                        </ButtonsContainer>
                    }
                </Content>
                <Banner>
                    <img src={banner} alt='banner'/>
                </Banner>
            </Main>
        </MainContainer>
    )
}