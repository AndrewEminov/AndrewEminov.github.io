import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import Steps from '../components/steps/index';
import { connect } from 'react-redux';
import { setCurrentCElements, setFewCElements } from "../redux/actions";
import { LinkBtn } from '../components/Btns';
import { GeneralCElements } from '../constants/tables';

const linkStyles = `
  width: 100%;
`;

const currentStepStyles = `
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    padding: 15px;
    margin: 10px 0px;
    &:hover{
        transform: scale(1.1);
        box-shadow: 5px 5px 4px 1px rgba(0, 0, 255, .2);
        color: rgba(0, 0, 255, .5);
    }
`;

const stepsStyles = `
    width: 100%; 
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
`;

// const titles = [ 
//     'Рельефы, швы, складки, клинья, шлицы (разрезы)', 
//     'Подрезы, драпировки, сборки, кулиса. Детали отрезные в горизонтальном направлении', 
//     'Застёжка, лацканы, воротник, вырез горловины, капюшон', 
//     'Карманы, клапаны'
// ];




function TypesClothesStepTwo() {
    return (
    <Wrapper>
        <HeaderText text={'Перечень усложняющих элементов'} />
        <Header>Выберите типы усложняющих элементов</Header>
        <Steps
            styles={{steps: stepsStyles, currentStep: currentStepStyles, link: linkStyles }}
            titles={GeneralCElements.titles}
            link={'/types-clothes/step2/'}
        />
        {/* <LinkBtn link={"/types-clothes/step1"} text={'назад'}/> */}
    </Wrapper>
    );
  }

  const mapDispatchToProps = {
    setCurrentCElements,
    setFewCElements
  }

export default connect(null, mapDispatchToProps)(TypesClothesStepTwo);


const Header = styled.h1`
  font-size: 16px;
  font-weight: 600;
  // margin-bottom 50px;
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