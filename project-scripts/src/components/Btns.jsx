import { Link } from "react-router-dom";
import styled from 'styled-components/macro';

export const LinkBtn = ({link, text, styles}) => {
    return (
        <Wrapper>
            <BtnStyles sutomStyles={styles}><Link to={link}>{text}</Link></BtnStyles>
        </Wrapper>
    )
}

export const Btn = ({handleClick, text, styles}) => {
    return (
        <BtnStyles sutomStyles={styles} onClick={handleClick}>{text}</BtnStyles>
    )
}

const Wrapper = styled.div`
    text-align: center;
    margin-top: 50px;
`;

const BtnStyles = styled.button`
    background: gainsboro;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 20px;
    a{
        color: black;
        text-decoration: none;
        &:hover{
            color: rgba(0,0,255,.5);
        }
    }

    ${p => p.sutomStyles}
`;