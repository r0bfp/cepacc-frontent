import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    max-height: 100%;
    padding: 30px;
    background-color: #FFF;
    border: 1px solid #F0EEED;

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
`;

export const AddressDataContainer = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-areas:
        "cep . ."
        "street district number"
        "city state .";
    margin-bottom: auto;
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


