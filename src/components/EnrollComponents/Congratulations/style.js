import styled from "styled-components";
import { AppColors } from "../../../globalStyle";


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    margin: 0 auto;
`;

export const ImageContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 10px;

    img{
        width: 100%;
        height: 100%;
    }
`;

export const MessageContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h1{
        font-weight: 700;
        font-size: 40px;
        background-image: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span{
        color: #a2b0b8;
        font-weight: 600;
        font-size: 18px;
    }
`;


