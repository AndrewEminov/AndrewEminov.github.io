import { 
    Link,
  } from "react-router-dom";

import styled from 'styled-components/macro';

function TypeClothes({text, link, setTitle}) {

    return (
        <ChooseClothes onClick={() => setTitle(text)} to={link}>
            <span>{text}</span>
        </ChooseClothes>
    );
  }
  

  export default TypeClothes;

  const ChooseClothes = styled(Link)`
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: gainsboro;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    transition: transform .2s;
    color: black;
    text-decoration: none;

    span{
        font-size: 16px;
        font-weight: 600;
    }
    &:hover{
        transform: scale(1.1);
        box-shadow: 5px 5px 4px 1px rgba(0, 0, 255, .2);
        color: rgba(0, 0, 255, .5);
    }
`;
