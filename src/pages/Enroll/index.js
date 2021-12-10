import React, { useState } from "react";
import { Divider, Button } from "antd";

import { Main, MainContainer, NextButtonContainer, StepContentContainer, GlobalStyle } from "./style";
import Stepper      from "../../components/EnrollComponents/Stepper";
import SignUpForm   from "../../components/EnrollComponents/SignUpForm";
import CourseForm   from "../../components/EnrollComponents/CourseForm";
import PersonalForm from "../../components/EnrollComponents/PersonalForm";
import AddressForm  from "../../components/EnrollComponents/AddressForm";


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
            key: 'address-form',
            component: AddressForm,
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
            <GlobalStyle/>
            <Main>
                <Stepper currentStepIndex={steps.findIndex((e) => e.selected && e)}/>
                <Divider/>
                <StepContentContainer>
                    { 
                        steps.map((step, i) => {
                            return step.selected && <step.component key={i}/>
                        })
                    }
                </StepContentContainer>
                <NextButtonContainer>
                    <Button 
                        type='default' 
                        size='large' 
                        onClick={() => handleBack()}
                        disabled={steps.findIndex((e) => e.selected && e) === 0}

                    >Voltar</Button>
                    <Button 
                        type='primary' 
                        size='large' 
                        onClick={() => handleNext()}
                        style={{marginLeft: '15px'}}
                    >Avançar</Button>
                </NextButtonContainer>
            </Main>
        </MainContainer>
    )
}