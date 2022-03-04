import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #002756;
`;

export const ContentContainer = styled.div`
    background-color: #FFF;
    width: 100%;
    border-radius: 15px;
    padding: 20px;

    label {
        color: #b3b9c4;
        font-size: 12px;
        font-weight: 600;
    }

    input { 
        border-radius: 5px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    margin: 15px 0;
    border: 1px solid #c9cbd752;
`;

export const SendButtonContainer = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: end;

    button {
        border-radius: 40px;
    }
`;

// PERSONAL DATA =================================
export const PersonalDataContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-template-areas: 
        "name name name"
        "birth cpf rg"
        "phone phone ."
    ;

    div { 
        border-radius: 5px;
    }
`;

// ENDRESS DATA =================================
export const AddressDataContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-template-areas: 
        "zipcode state city"
        "street number district"
    ;

    div, .ant-select-selector { 
        border-radius: 5px !important; 
    }
`;
