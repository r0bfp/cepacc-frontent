import styled from "styled-components";


export const MainContainer = styled.div`
    min-width: 250px;
    height: 100%;
    border-right: 1px solid #f0f0f0;
    background-color: #FFF;
`;

export const MenuHeader = styled.div`
    width: 100%;
`;

export const MenuNavigation = styled.ul`
    list-style-type: none;
`;

export const MenuItem = styled.li`
    padding: 15px 10px;
    border-top: 1px solid #f0f0f0;
    padding-left: 20px;

    transition: 150ms;
    cursor: pointer;

    :hover{
        background-color: #efefef;
    }

    ${props => props.selected && 'border-right: 5px solid #346594;'}
`;

export const MenuItemText = styled.label`
    font-size: 17px;
    color: #093366;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const UserImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    background-color: #efefef;
    border: solid 1px #093366;
    cursor: pointer;
    transition: 200ms;

    :hover {
        box-shadow: 0 5px 5px rgb(126 126 126 / 20%);
    }
`;

export const UserDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Username = styled.label`
    font-weight: bold;
    font-size: 17px;
    color: #093366;
`;

export const Exit = styled.a`
    font-size: 13px;
    color: red;
    text-decoration: none;
    cursor: pointer;
    width: fit-content;

    :hover{
        color: red;
    }
`;
