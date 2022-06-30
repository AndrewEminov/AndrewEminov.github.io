import { useParams } from "react-router-dom";
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import { DifficultyGroups } from '../constants/tables';
import { LinkBtn } from '../components/Btns';

function CurrentDifficultyGroup({ 
    title,
}) {
    const { id } = useParams();
    return (
        <Wrapper>
            <HeaderText text={title} />

            <Header>{id-1} группа</Header>

            <Cloth>{DifficultyGroups[id-1]}</Cloth>

            <LinkBtn link={"/types-clothes/difficulty-groups"} text={'назад'}/>
        </Wrapper>
    );
  }



export default CurrentDifficultyGroup;
  

  const Cloth = styled.div`
    line-height: 1.5;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    background: gainsboro;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0px;

    // @media (max-width: 1024px) { }
    // font-size: 20px;

  `;

  const Header = styled.h1`
    font-size: 16px;
    font-weight: 600;
    margin-bottom 30px;
    text-align: center;
  `;

  const Wrapper = styled.div`
    //display: flex;
    // align-items: center;
    // justify-content: space-around;
    // @media (max-width: 1024px) { }

    width: 90%;
    margin: 50px auto;
    // a{
    //     width: 90%;
    //     margin: 0 auto 20px;
    // }
`;
