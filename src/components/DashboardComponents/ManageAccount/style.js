import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    max-height: 100%;

    label{
        color: #002756;
    }
`;

export const PersonalDataContainer = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-areas:
        "name name birth"
        "cpf rg phone";
    background-color: #FFF;
    border: 1px solid #F0EEED;
    padding: 20px;
    margin-bottom: 40px;
`;

export const AddressDataContainer = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-areas:
        "cep . ."
        "street district number"
        "city state .";
    margin-bottom: auto;
    background-color: #FFF;
    border: 1px solid #F0EEED;
    padding: 20px;
    margin-bottom: 40px;
`;

export const Title = styled.h1`
    font-weight: 700;
    color: #002756;
`;

export const ButtonSendContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
`;


