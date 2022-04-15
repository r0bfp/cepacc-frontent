import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    min-height: 70px;
    margin-bottom: 50px;
`;

export const MainContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
        "search filter-button"
        "filter filter"
        "applied applied"
    ;
    grid-row-gap: 10px;
    padding-bottom: 20px;
`;

const searchOnFocus = css`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const searchOnHover = css`
    :hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`;

export const SearchBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    cursor: pointer;
    grid-area: search;
    border-radius: 10px;
    background-color: #ebedf2;

    transition: 150ms cubic-bezier(0.645, 0.045, 0.355, 1);
    ${props => props.isFocus && searchOnFocus};
    ${props => !props.isFocus && searchOnHover};
`;

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    margin-left: 30px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
`;

export const AppliedFiltersContainer = styled.div`
    width: 100%;
    grid-area: applied;
    margin-top: 30px;
    display: flex;
`;

export const FilterApplied = styled.div`
    height: 45px;
    width: fit-content;
    background-color: #ebedf2;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

export const FilterAppliedText = styled.span`
    padding: 0 15px;
    font-size: 18px;
    color: #002756;
`;

export const FilterAppliedClose = styled.button`
    width: 100%;
    padding: 0 5px;
    height: 100%;
    background-color: #ebedf2;
    border-radius: 0 10px 10px 0;
    border: none;
    border-left: 1px solid #F0EEED;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 80ms cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    :hover {
        background-color: #ced0d6;
    }
`;

export const OpenFilterContainer = styled.div`
    height: 100%;
    width: 100%;
    grid-area: filter-button;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const OpenFiltersButton = styled.button`
    border-radius: 10px;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    background-color: #ebedf2;
    border: none;
    transition: 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;

    :active {
        background-color: #ced0d6;
    }

    :hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`;

export const FiltersModal = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FiltersModalContent = styled.div`
    height: fit-content;
    max-width: 800px;
    background-color: #FFFFFF;
    border-radius: 15px;
    width: 800px;
`;

export const ModalTitle = styled.h1`
    color: #002756;
    margin: 0;
    font-size: 26px;
    font-weight: 700;
`;

export const ModalHeader = styled.div`
    padding: 20px;
`;

export const ModalBody = styled.div`
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    border-top: 1px solid #f0f0f0;
`;

export const ModalFilter = styled.div`
    max-height: 180px;
    display: flex;
    padding: 10px 0;

    :not(:last-child){
        border-bottom: 1px solid #f0f0f0;
    }
`;

export const ModalFilterTitle = styled.label`
    color: #002756;
    font-size: 18px;
    font-weight: 600;
    width: 20%;
`;

export const ModalFilterContainer = styled.div`
    width: 80%;
    column-fill: balance;
    display: flex;
    flex-flow: wrap;
    flex-direction: column;

    .ant-checkbox-wrapper{
        margin: 5px 0;
    }
`;


export const ModalFooter = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        margin-left: 10px;
        border-radius: 15px;
    }

    a {
        color: red;
        cursor: pointer;
        transition: 100ms ease-in-out;

        :hover {
            opacity: 40%;
        }
    }
`;



