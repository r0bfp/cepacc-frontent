import styled from "styled-components";
import { AppColors } from "../../../globaStyle";


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    td {
        color: ${AppColors.primaryText};
    }
`;

export const Title = styled.h1`
    color: ${AppColors.primaryText};
`;

export const ActionButton = styled.div`
    border: none;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    padding: 5px;

    transition: 150ms;
    :hover {
        box-shadow: 0 5px 5px rgb(126 126 126 / 20%);
    }
`;

export const DropdownButtonContainer = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-left: 5px;
    }
`;

export const ModalRemoveContainer = styled.div`

`;
